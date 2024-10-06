import axios from "axios";

const API_URL = "http://localhost:5001";

const CheckAdmin = async () => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(`${API_URL}/check-admin`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    return [response.data.isAdmin];
  } catch (error) {
    console.error("Error checking admin status:", error);
    return [false]; // Return false if there's an error
  }
};

export default CheckAdmin;
