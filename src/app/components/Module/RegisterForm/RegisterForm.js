import React from "react";

const RegisterForm = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full max-w-[624px]">
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            نام کاربری *
          </label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded-md bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            آدرس ایمیل *
          </label>
          <input
            type="email"
            className="w-full mt-1 p-2 border rounded-md bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            گذرواژه *
          </label>
          <div className="relative">
            <input
              type="password"
              className="w-full mt-1 p-2 border rounded-md bg-gray-100"
            />
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 cursor-pointer">
              👁️
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          اطلاعات شخصی شما برای پردازش سفارش شما استفاده می‌شود، و پشتیبانی از
          تجربه شما در این وبسایت، و برای اهداف دیگری که در سیاست حفظ حریم خصوصی
          توضیح داده شده است.
        </p>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="w-1/2 bg-emerald-700 text-white py-2.5 px-5 rounded-md hover:bg-green-700 transition"
          >
            عضویت
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
