import { create } from "zustand";
import axios from "axios";
import CheckAdmin from "./CheckAdmin";

const API_URL = "http://localhost:5000";

axios.defaults.withCredentials = true;

export const useAuth = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  isAuthenticated: !!localStorage.getItem("user"),
  error: null,
  isLoading: false,
  isAdmin: false,
  isAdminLoading: true,

  // Signup function
  signup: async (email, password, name) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/signup`, {
        email,
        password,
        name,
      });
      localStorage.setItem("user", JSON.stringify(response.data.user));
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error signing up",
        isLoading: false,
      });
      throw error;
    }
  },
  // Login function
  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      localStorage.setItem("user", JSON.stringify(response.data.user));
      const [isAdmin, isAdminLoading] = await CheckAdmin(
        response.data.user.email
      ); // Check admin status after login
      set({
        user: response.data.user,
        isAuthenticated: true,
        isAdmin, // Update admin state
        isAdminLoading, // Update admin loading state
        error: null,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error logging in",
        isLoading: false,
      });
      throw error;
    }
  },

  // Logout function
  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      await axios.post(`${API_URL}/logout`);
      localStorage.removeItem("user");
      set({
        user: null,
        isAuthenticated: false,
        isAdmin: false,
        isAdminLoading: false,
        isLoading: false,
      });
    } catch (error) {
      set({ error: "Error logging out", isLoading: false });
      throw error;
    }
  },

  // Sync across tabs
  syncUserAcrossTabs: () => {
    window.addEventListener("storage", async (event) => {
      if (event.key === "user") {
        const user = JSON.parse(event.newValue);
        const isAuthenticated = !!user;
        if (user) {
          const [isAdmin, isAdminLoading] = await CheckAdmin(user.email); // Check admin status across tabs
          set({ user, isAuthenticated, isAdmin, isAdminLoading });
        } else {
          set({
            user: null,
            isAuthenticated: false,
            isAdmin: false,
            isAdminLoading: false,
          });
        }
      }
    });
  },

  // Check user admin status when app reloads or initializes
  checkAdminOnLoad: async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const [isAdmin, isAdminLoading] = await CheckAdmin(user.email); // Check admin status on page load
      set({
        user,
        isAuthenticated: true,
        isAdmin,
        isAdminLoading,
      });
    } else {
      set({ isAdminLoading: false });
    }
  },
}));

// Initialize the sync across tabs functionality
useAuth.getState().syncUserAcrossTabs();
useAuth.getState().checkAdminOnLoad();
