
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#EBEBD8] shadow-md px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-[#455230]">
        PulseWorks <span className="text-[#637545]">AI</span>
      </h1>

      <div className="flex items-center gap-8">

        <a href="#home" className="text-[#455230] hover:text-[#637545]">
          Home
        </a>

        <a href="#features" className="text-[#455230] hover:text-[#637545]">
          Features
        </a>

        <a href="#about" className="text-[#455230] hover:text-[#637545]">
          About
        </a>

        <Link
          to="/login"
          className="bg-[#637545] text-white px-6 py-2 rounded-lg hover:bg-[#455230]"
        >
          Login
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;
