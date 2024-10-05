import { Helmet } from "react-helmet";

function Home() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Home | Internship Task</title>
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-purple-900">Home</h1>
      </div>
    </div>
  );
}

export default Home;
