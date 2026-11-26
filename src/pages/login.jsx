
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please fill in all the fields");
      return;
    }

    // Redirect to Dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex bg-[#EBEBD8]">

      {/* Left Side - Image */}
      <div className="hidden md:flex md:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902"
          alt="Team collaboration"
          className="w-full h-screen object-cover"
        />

        <div className="absolute inset-0 bg-[#455230]/70 flex flex-col justify-end p-12 text-white">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to PulseWorks AI
          </h1>

          <p className="text-lg text-gray-200">
            Bring your projects, teams and ideas together
            in one secure workspace.
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">

        <div className="w-full max-w-md">

          <Link
            to="/"
            className="text-[#637545] font-semibold text-sm hover:text-[#455230]"
          >
            ← Back to Home
          </Link>

          <div className="mt-10 mb-8">
            <h2 className="text-3xl font-bold text-[#455230]">
              Welcome Back!
            </h2>

            <p className="text-gray-600 mt-2">
              Login to continue to your workspace.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-[#455230] font-medium mb-2">
                Email Address
              </label>

              <div className="flex items-center border border-[#9BA685] rounded-lg px-3 bg-white">
                <Mail size={19} className="text-[#637545]" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 outline-none bg-transparent"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-[#455230] font-medium mb-2">
                Password
              </label>

              <div className="flex items-center border border-[#9BA685] rounded-lg px-3 bg-white">
                <Lock size={19} className="text-[#637545]" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 outline-none bg-transparent"
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

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#637545] text-white py-3 rounded-lg font-semibold hover:bg-[#455230] transition duration-300"
            >
              Login
            </button>

          </form>

          {/* Register Link */}
          <p className="text-center text-gray-600 mt-6">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-[#637545] font-semibold hover:underline"
            >
              Register
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;
