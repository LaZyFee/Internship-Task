import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Pages/Shared/Loader";
import { useAuth } from "./AuthStore";

const AdminRoute = ({ children }) => {
  const { user, isLoading, isAdmin, isAdminLoading } = useAuth();
  const location = useLocation();

  if (isLoading || isAdminLoading) {
    return <Loader />;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
