import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>

        <p>
          Review analytics and insights will appear here.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;