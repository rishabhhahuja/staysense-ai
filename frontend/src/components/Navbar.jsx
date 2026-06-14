import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-green-700">
                    StaySense AI
                </h1>

                <ul className="flex gap-6 font-medium">
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