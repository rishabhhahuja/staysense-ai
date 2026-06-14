import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">About Page</h1>

        <p>
          StaySense AI helps homestay owners understand guest reviews using AI.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default About;