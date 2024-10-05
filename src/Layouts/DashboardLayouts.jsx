import Navbar from "../Pages/Shared/Navbar";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../Store/AuthStore";
import CheckAdmin from "../Store/CheckAdmin";

const DashboardLayout = () => {
  const { user } = useAuth();
  const [isAdmin] = user?.email ? CheckAdmin(user.email) : [false];

  return (
    <div>
      <Navbar />
      <div className="drawer lg:drawer-open">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li>
              <Link to="/dashboard">Orders</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/">All Orders</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
