import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Signup({ closeModel }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const submit = async (data) => {
    const { firstName, lastName, email, password, cpassword, contact } = data;

    if (password !== cpassword) {
      setError("cpassword", {
        type: "manual",
        message: "Passwords do not match.",
      });
      toast.error("Passwords do not match! ❌");
      return;
    }

    const payload = {
      username: email,
      email,
      password,
      name: {
        firstname: firstName,
        lastname: lastName,
      },
      phone: contact,
      address: {
        city: "",
        street: "",
        number: 0,
        zipcode: "",
        geolocation: { lat: "", long: "" },
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        payload
      );
      console.log(response)

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      toast.success("Signup Successful! 🎉");
      closeModel();
      navigate("/home");
      window.location.reload();  


    } catch (error) {
      console.error("Signup failed:", error);
      toast.error("Signup failed. Please try again! ❌");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-rose-100 p-8">
      <h1 className="text-2xl font-bold text-rose-600 text-center mb-2 tracking-tight">
        Create an Account ✨
      </h1>
      <p className="text-center text-gray-500 mb-6 text-sm">
        Join us and start your journey today
      </p>

      <form onSubmit={handleSubmit(submit)} className="space-y-5">
        
        {/* First + Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="FirstName" className="block text-gray-700 mb-1">
              First Name
            </label>
            <input
              placeholder="First Name"
              className="w-full px-4 py-2 rounded-lg bg-white border border-rose-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <p className="text-sm text-rose-600 mt-1">First name is required.</p>
            )}
          </div>

          <div>
            <label htmlFor="LastName" className="block text-gray-700 mb-1">
              Last Name
            </label>
            <input
              placeholder="Last Name"
              className="w-full px-4 py-2 rounded-lg bg-white border border-rose-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && (
              <p className="text-sm text-rose-600 mt-1">Last name is required.</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="Email" className="block text-gray-700 mb-1">
            Email
          </label>
          <input
            placeholder="Email"
            type="email"
            className="w-full px-4 py-2 rounded-lg bg-white border border-rose-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="text-sm text-rose-600 mt-1">Please enter a valid email.</p>
          )}
        </div>

        {/* Password + Confirm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="password" className="block text-gray-700 mb-1">
              Password
            </label>
            <input
              placeholder="Password"
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-white border border-rose-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-sm text-rose-600 mt-1">Please enter a password.</p>
            )}
          </div>

          <div>
            <label htmlFor="cpassword" className="block text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              placeholder="Confirm Password"
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-white border border-rose-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
              {...register("cpassword", { required: true })}
            />
            {errors.cpassword && (
              <p className="text-sm text-rose-600 mt-1">
                {errors.cpassword.message || "Please confirm your password."}
              </p>
            )}
          </div>
        </div>

        {/* Contact */}
        <div>
          <label htmlFor="contact" className="block text-gray-700 mb-1">
            Contact
          </label>
          <input
            placeholder="Contact Number"
            type="number"
            className="w-full px-4 py-2 rounded-lg bg-white border border-rose-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
            {...register("contact", { required: true })}
          />
          {errors.contact && (
            <p className="text-sm text-rose-600 mt-1">Please enter your contact number.</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
