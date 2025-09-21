import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function FlipAuthCard() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-blue-500 p-4">
      <div className="w-96 h-[500px] perspective">
        <div className={`relative w-full h-full duration-700 transform ${isLogin ? "" : "rotate-y-180"}`}>
          
          {/* Login Front */}
          <div className="absolute w-full h-full bg-white rounded-2xl shadow-xl backface-hidden flex flex-col justify-center p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="button"
                  className="absolute right-2 top-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiOutlineEyeInvisible size={20}/> : <AiOutlineEye size={20}/>}
                </button>
              </div>
              <button className="bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition">
                Login
              </button>
            </form>
            <p className="text-sm text-center mt-4">
              Don't have an account?{" "}
              <span className="text-purple-500 cursor-pointer" onClick={() => setIsLogin(false)}>
                Signup
              </span>
            </p>
          </div>

          {/* Signup Back */}
          <div className="absolute w-full h-full bg-white rounded-2xl shadow-xl backface-hidden rotate-y-180 flex flex-col justify-center p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="button"
                  className="absolute right-2 top-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiOutlineEyeInvisible size={20}/> : <AiOutlineEye size={20}/>}
                </button>
              </div>
              <input
                type="password"
                placeholder="Confirm Password"
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition">
                Signup
              </button>
            </form>
            <p className="text-sm text-center mt-4">
              Already have an account?{" "}
              <span className="text-purple-500 cursor-pointer" onClick={() => setIsLogin(true)}>
                Login
              </span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
