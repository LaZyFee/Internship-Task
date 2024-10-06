import axios from "axios";

const API_URL = "http://localhost:5001";

const CheckAdmin = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/check-admin`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
    console.log("Admin status:", response.data.isAdmin);
    return [response.data.isAdmin, false];
  } catch (error) {
    console.error("Error checking admin status:", error);
    return [false, false];
  }
};

export default CheckAdmin;
