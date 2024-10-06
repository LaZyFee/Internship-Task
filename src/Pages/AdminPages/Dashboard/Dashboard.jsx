import { Helmet } from "react-helmet";
import Loader from "../../Shared/Loader";

function Dashboard() {
  return (
    <div>
      <Helmet>
        <title>Dashboard | Internship Task</title>
      </Helmet>
      Dashboard
      <Loader />
    </div>
  );
}

export default Dashboard;
