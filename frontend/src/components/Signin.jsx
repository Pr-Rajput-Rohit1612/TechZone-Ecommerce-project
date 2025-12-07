import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Signin({ closeModel }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = async (data) => {
    console.log("Signin Data:", data);

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", data);
      console.log(response.data);
          console.log("User Data:", response.data.user);       


      toast.success("Login Successful! 🎉");

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      closeModel();
      navigate("/home");
      // window.location.reload();
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Invalid credentials! ❌");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-rose-100 p-8">
      <h1 className="text-2xl font-bold text-rose-600 text-center mb-2">
        Welcome Back 👋
      </h1>
      <p className="text-center text-gray-500 mb-6 text-sm">
        Sign in to access your dashboard
      </p>

      <form onSubmit={handleSubmit(submit)} className="space-y-5">
        
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg bg-white border border-rose-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-sm text-rose-600 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 rounded-lg bg-white border border-rose-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-sm text-rose-600 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
89