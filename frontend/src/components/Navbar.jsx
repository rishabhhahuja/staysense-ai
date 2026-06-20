import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <h1 className="text-2xl font-bold text-green-700">
          StaySense AI
        </h1>

        <ul className="flex flex-wrap justify-center gap-4 md:gap-6 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;