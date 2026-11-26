
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  // Handle Registration
  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (password.length < 6) {
      alert("Password must contain at least 6 characters.");
      return;
    }

    alert("Registration form submitted successfully!");
  };


  return (
    <div className="min-h-screen bg-[#EBEBD8] flex items-center justify-center p-6">

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row max-w-5xl w-full">


        {/* LEFT IMAGE SECTION */}
        <div className="md:w-1/2 relative min-h-[300px] md:min-h-[700px]">

          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
            alt="Modern team workspace"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#455230]/75 flex flex-col justify-end p-10">

            <h1 className="text-4xl font-bold text-white mb-4">
              Start Something
              <br />
              Great Together.
            </h1>

            <p className="text-[#EBEBD8] leading-relaxed">
              Create your account and bring your projects,
              people and ideas together in one smart workspace.
            </p>

            <p className="text-[#EBEBD8] text-sm mt-8">
              PulseWorks AI – Your workspace, reimagined.
            </p>

          </div>

        </div>


        {/* RIGHT REGISTER FORM */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">

          <h2 className="text-3xl font-bold text-[#455230] mb-2">
            Create Account
          </h2>

          <p className="text-gray-600 mb-8">
            Join PulseWorks AI and get started.
          </p>


          <form onSubmit={handleRegister}>


            {/* FULL NAME */}
            <div className="mb-5">

              <label className="block text-[#455230] font-medium mb-2">
                Full Name
              </label>

              <div className="flex items-center border border-[#9BA685] rounded-lg px-4 py-3 focus-within:border-[#637545]">

                <User size={19} className="text-[#637545]" />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full ml-3 outline-none text-[#455230]"
                  required
                />

              </div>

            </div>


            {/* EMAIL */}
            <div className="mb-5">

              <label className="block text-[#455230] font-medium mb-2">
                Email Address
              </label>

              <div className="flex items-center border border-[#9BA685] rounded-lg px-4 py-3 focus-within:border-[#637545]">

                <Mail size={19} className="text-[#637545]" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full ml-3 outline-none text-[#455230]"
                  required
                />

              </div>

            </div>


            {/* PASSWORD */}
            <div className="mb-5">

              <label className="block text-[#455230] font-medium mb-2">
                Password
              </label>

              <div className="flex items-center border border-[#9BA685] rounded-lg px-4 py-3 focus-within:border-[#637545]">

                <Lock size={19} className="text-[#637545]" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full ml-3 outline-none text-[#455230]"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-[#637545]"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>

              </div>

            </div>


            {/* CONFIRM PASSWORD */}
            <div className="mb-6">

              <label className="block text-[#455230] font-medium mb-2">
                Confirm Password
              </label>

              <div className="flex items-center border border-[#9BA685] rounded-lg px-4 py-3 focus-within:border-[#637545]">

                <Lock size={19} className="text-[#637545]" />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full ml-3 outline-none text-[#455230]"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="text-[#637545]"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>

              </div>

            </div>


            {/* REGISTER BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#637545] text-white py-3 rounded-lg font-semibold hover:bg-[#455230] transition duration-300"
            >
              Create Account
            </button>

          </form>


          {/* LOGIN LINK */}
          <p className="text-center text-gray-600 mt-7">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-[#637545] font-semibold hover:text-[#455230]"
            >
              Login
            </Link>

          </p>


          <Link
            to="/"
            className="text-center text-sm text-[#637545] mt-5 hover:underline"
          >
            ← Back to Home
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Register;
