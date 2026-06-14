import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 gap-6">

          <Card
            title="Sentiment Analysis"
            description="Identify positive, neutral, and negative reviews."
          />

          <Card
            title="AI Responses"
            description="Generate professional replies to customer feedback."
          />

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;