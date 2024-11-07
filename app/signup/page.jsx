"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Checkbox } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

const RegistrationPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const onSubmit = (data) => {
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6  text-black bg-[#F0F0F0]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pb-5 max-w-6xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-wrap">
          {/* Left Column */}
          <div className="w-full  px-8 pt-10 pb-5">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <h1 className="font-semibold text-[20px] text-[#171717]">
                Welcome to Alzaf.com
              </h1>
              <a
                href="#login"
                className="font-semibold text-[20px] text-[#F97316]"
              >
                Login
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-8">
            <div className="mb-4">
              <label className="block text-[#434343] mb-2">Full Name</label>
              <input
                type="text"
                {...register("fullName", { required: true })}
                className={`w-full border rounded p-2 text-[12px] ${
                  errors.fullName && "border-red-500"
                }`}
                placeholder="Enter full name"
              />
              {errors.fullName && (
                <p className="text-red-500">This field is required</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-[#434343] mb-2">Phone Number</label>
              <input
                type="tel"
                {...register("phoneNumber", { required: true })}
                className={`w-full border rounded p-2 text-[12px] ${
                  errors.phoneNumber && "border-red-500"
                }`}
                placeholder="Phone or Email"
              />
              {errors.phoneNumber && (
                <p className="text-red-500">This field is required</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-[#434343] mb-2">Password</label>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
                  })}
                  className={`w-full border rounded p-2 text-[12px] ${
                    errors.password && "border-red-500"
                  }`}
                  placeholder="Please enter your password"
                />
                <span
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute right-2 top-2 cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={passwordVisible ? faEye : faEyeSlash}
                    className="text-gray-500"
                  />
                </span>
                {errors.password && (
                  <p className="text-red-500">
                    Password must have at least 8 characters, including an
                    uppercase letter, a digit, and a special character.
                  </p>
                )}
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-[#434343] mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  {...register("confirmPassword", {
                    validate: (value) =>
                      value === watch("password") || "Passwords don't match",
                  })}
                  className={`w-full border rounded p-2 text-[12px] ${
                    errors.confirmPassword && "border-red-500"
                  }`}
                  placeholder="Confirm password"
                />
                <span
                  onClick={() =>
                    setConfirmPasswordVisible(!confirmPasswordVisible)
                  }
                  className="absolute right-2 top-2 cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={confirmPasswordVisible ? faEye : faEyeSlash}
                    className="text-gray-500"
                  />
                </span>
                {errors.confirmPassword && (
                  <p className="text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="block w-full md:w-1/2 px-8 ">
            <div className="mb-4 grid grid-cols-1 md:grid-cols-4 gap-2">
              <div className="col-span-1 md:col-span-3">
                <label className="block text-[#434343] mb-2">Birthday</label>
                <div className="grid grid-cols-3 gap-2">
                  <select className="border rounded p-2 w-full text-[#9C9C9C] text-[12px]">
                    <option value="">Month</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                  <select className="border rounded p-2 w-full text-[#9C9C9C] text-[12px]">
                    <option value="">Day</option>
                    {[...Array(31)].map((_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                  <select className="border rounded p-2 w-full text-[#9C9C9C] text-[12px]">
                    <option value="">Year</option>
                    {[...Array(100)].map((_, i) => (
                      <option key={i} value={new Date().getFullYear() - i}>
                        {new Date().getFullYear() - i}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-span-1 md:col-span-1">
                <label className="block text-[#434343]  mb-2">Gender</label>
                <select className="border rounded p-2 w-full text-[#9C9C9C] text-[12px]">
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div
                  onClick={handleCheckboxChange}
                  className={`h-5 w-5 flex items-center justify-center rounded border transition duration-200 
                    ${
                      isChecked
                        ? "bg-[#F97316] border-[#F97316]"
                        : "border-gray-300"
                    }`}
                  style={{ cursor: "pointer" }}
                >
                  {isChecked && <span className="text-white text-lg">✔</span>}
                </div>
                <input
                  type="checkbox"
                  className="hidden" // Keeps the checkbox element accessible but hidden visually
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label className="text-[#9C9C9C] text-[12px]">
                  I’d like to receive exclusive offers and promotions via SMS.
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#F97316] text-white p-3 mt-4 rounded hover:bg-[#f97416be]"
            >
              Sign Up
            </button>
            <div className="flex justify-center items-center my-4">
              <p className="mx-4 text-gray-600">or</p>
            </div>
            <div className="flex flex-col gap-2">
              <button className="flex items-center justify-center w-full border border-orange-500  p-2 rounded hover:bg-orange-100 transition">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="w-5 h-5 mr-2 text-[#1877F2]"
                />
                Sign Up with Facebook
              </button>

              <button className="flex items-center justify-center w-full border border-orange-500 p-2 rounded hover:bg-orange-100 transition">
                <FontAwesomeIcon
                  icon={faGoogle}
                  className="w-5 h-5 mr-2 text-orange-500 "
                />
                Sign Up with Google
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
