import { useState, useEffect, useRef } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../Store/AuthStore";
import { HiMenuAlt2 } from "react-icons/hi";
import { CiPower } from "react-icons/ci";

const DashboardLayout = () => {
  const { user, isAdmin } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5001/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="flex mt-5 mx-2">
      <div className="relative">
        {/* Toggle button for small devices */}
        <button
          className={`text-white z-30 ${isOpen ? "hidden" : ""}`}
          onClick={toggleDrawer}
        >
          <HiMenuAlt2 className="text-3xl" />
        </button>

        {/* Drawer Navigation */}
        <div
          ref={drawerRef}
          className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-20`}
        >
          {/* Close button for the drawer */}
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={toggleDrawer}
          >
            &times;
          </button>
          <div className="flex flex-col justify-between h-full">
            <div>
              <ul className="menu p-4">
                <li>
                  <button className="text-2xl m-3" onClick={handleLogout}>
                    <CiPower /> <p className="text-sm">Logout</p>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main content area - Flex layout */}
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
