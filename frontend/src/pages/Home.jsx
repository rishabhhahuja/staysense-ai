import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

import { Button, Input, Loader, Toast } from "../components/ui";

function Home() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-black"
      }`}
    >
      <Navbar />

      <div className="text-center py-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded bg-black text-white"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

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

          <Card
            title="Theme Detection"
            description="Identify common topics like cleanliness, food, and location."
          />

          <Card
            title="Analytics Dashboard"
            description="View review trends and customer satisfaction insights."
          />
        </div>
      </section>

      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">
          UI Components Demo
        </h2>

        <Input
          label="Guest Name"
          placeholder="Enter guest name"
        />

        <div className="mt-4">
          <Button>
            Analyze Review
          </Button>
        </div>

        <div className="mt-6">
          <Toast message="Review submitted successfully!" />
        </div>

        <div className="mt-6">
          <Loader />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;