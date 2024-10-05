import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Store/AuthStore"; // Assuming you have useAuth set up

const DisplayError = ({ message }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (err) {
      console.error("Error during logout:", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-500">
        Sorry, You Are Not an Admin
      </h1>
      <p className="text-lg text-red-400 mt-4">{message || "Access denied"}</p>

      <h4 className="mt-4 text-xl">
        Please{" "}
        <button onClick={handleLogout} className="text-blue-500 underline">
          Sign Out
        </button>{" "}
        and log back in.
      </h4>
    </div>
  );
};

export default DisplayError;
