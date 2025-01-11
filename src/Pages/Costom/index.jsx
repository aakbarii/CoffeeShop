import { Link } from "react-router-dom";
import React from "react";
import { questionIcon, waiteCoffeeIcon } from "../../assets/icons";
import {
  arrowImg,
  coffeeImg,
  coffeeMashinImg,
  costomImg,
  sunImg,
} from "../../assets/image";
import CoffeeSelection from "../../Components/Template/CoustomCoffe/CoffeeSelection";
import PlantHeder from "../../Components/Module/PlantHeder";

function Index() {
  return (
    <div className="bg-gray-100 rounded-2xl">
      <div className="lg:pt-40 pt-20 p-4 container mx-auto">
        {/* بخش بالایی */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* متن و دکمه‌ها */}
          <div className="flex flex-col gap-y-5">
            <div className="text-2xl md:text-4xl">
              <PlantHeder size="text-2xl md:text-4xl" text="قهوه سفارشی" />
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-7">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،...
            </p>
            <div className="mt-5 flex flex-wrap gap-4">
              <button className="flex items-center justify-center rounded-3xl bg-emerald-600 text-white py-2 px-4 md:py-3 md:px-5 text-sm md:text-base">
                <img
                  src={waiteCoffeeIcon}
                  alt="Coffee Icon"
                  className="ml-2 w-5 h-5"
                />
                بزن بریم
              </button>
              <Link to="/faq">
                <p className="flex items-center justify-center rounded-3xl text-emerald-600 bg-slate-100 py-2 px-4 md:py-3 md:px-5 text-sm md:text-base">
                  <img
                    src={questionIcon}
                    alt="سوالی دارید؟"
                    className="ml-2 w-5 h-5"
                  />
                  سوالی دارید؟
                </p>
              </Link>
            </div>
          </div>

          {/* تصویر اصلی */}
          <div className="flex justify-center items-center">
            <img
              src={costomImg}
              alt="costomImg"
              className="w-full max-w-md rounded-lg"
            />
          </div>
        </div>

        {/* آیکون‌ها و توضیحات */}
        <div className="flex flex-col md:flex-row items-center gap-y-6 md:gap-y-0 md:gap-x-8 my-16">
          {/* آیتم اول */}
          <div className="flex flex-col items-center md:flex-row md:items-center gap-4">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-slate-100 flex justify-center items-center">
              <img
                className="w-12 h-12 md:w-24 md:h-24"
                src={sunImg}
                alt="Sun"
              />
            </div>
            <p className="text-sm md:text-xl font-semibold">
              انتخاب نوع و نژاد قهوه
            </p>
          </div>

          {/* فلش اول */}
          <img
            className="hidden md:block w-6 h-6"
            src={arrowImg}
            alt="Arrow"
          />

          {/* آیتم دوم */}
          <div className="flex flex-col items-center md:flex-row md:items-center gap-4">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-slate-100 flex justify-center items-center">
              <img
                className="w-12 h-12 md:w-24 md:h-24"
                src={coffeeMashinImg}
                alt="Coffee Machine"
              />
            </div>
            <p className="text-sm md:text-xl font-semibold">
              تنظیم درصد رست و ترکیب
            </p>
          </div>

          {/* فلش دوم */}
          <img
            className="hidden md:block w-6 h-6"
            src={arrowImg}
            alt="Arrow"
          />

          {/* آیتم سوم */}
          <div className="flex flex-col items-center md:flex-row md:items-center gap-4">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-slate-100 flex justify-center items-center">
              <img
                className="w-12 h-12 md:w-24 md:h-24"
                src={coffeeImg}
                alt="Coffee"
              />
            </div>
            <p className="text-sm md:text-xl font-semibold">
              انتخاب سفارش و تحویل بسته
            </p>
          </div>
        </div>

        {/* کامپوننت CoffeeSelection */}
        <CoffeeSelection />
      </div>
    </div>
  );
}

export default Index;
