import React from "react";

const LoginForm = () => {
  return (
    <div className="bg-white p-6 rounded-2xl w-full max-w-[630px] h-[320px]">
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            نام کاربری یا آدرس ایمیل *
          </label>
          <input
            type="text"
            className="w-[588px] h-10 mt-1 p-2 rounded-md bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            گذرواژه *
          </label>
          <div className="relative">
            <input
              type="password"
              className="w-[588px] h-10 mt-1 p-2 rounded-md bg-gray-100"
            />
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 cursor-pointer">
              👁️
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="rememberMe"
            className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-400"
          />
          <label htmlFor="rememberMe" className="mr-2 text-sm text-gray-700">
            مرا به خاطر بسپار
          </label>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="w-1/2 bg-emerald-700 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
          >
            ورود
          </button>
        </div>
      </form>
      <p className="mt-4 text-center text-[13px] text-gray-600 cursor-pointer">
        گذرواژه خود را فراموش کرده‌اید؟
      </p>
    </div>
  );
};

export default LoginForm;
