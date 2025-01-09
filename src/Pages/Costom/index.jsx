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

function index() {
  return (
    <div className="bg-gray-100 rounded-2xl">
      <div className="pt-40 p-4 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-y-5">
            <div className="text-4xl">
              <PlantHeder size={20} text="قهوه سفارشی" />
            </div>
            <p className="text-gray-600 leading-7">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد .
            </p>
            <div className="mt-5 flex gap-x-6">
              <button className="flex items-center rounded-3xl bg-emerald-600 text-white p-2 px-5 md:p-2 md:px-5 text-xs md:text-base">
                <img
                  src={waiteCoffeeIcon}
                  width={20}
                  height={20}
                  alt="Coffee Icon"
                  className="ml-1"
                />
                بزن بریم
              </button>
              <Link to="/faq">
                <p className="flex items-center rounded-3xl text-emerald-600 bg-slate-100 p-2 px-5 md:p-2 md:px-5 text-xs md:text-base">
                  <img
                    src={questionIcon}
                    alt="سوالی دارید؟"
                    width={20}
                    height={20}
                    className="ml-1"
                  />
                  سوالی دارید؟
                </p>
              </Link>
            </div>
          </div>
          <div>
            <img src={costomImg} alt="costomImg" />
          </div>
        </div>
        <div className="flex gap-x-8 mt-20">
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-slate-100 flex justify-center items-center">
            <img
              className="w-24 h-24"
              src={sunImg}
              alt="Sun"
              width={96}
              height={96}
            />
          </div>
          <p className="text-xl font-semibold">انتخاب نوع و نژاد قهوه</p>

          <img
            className="size-6"
            src={arrowImg}
            alt="Arrow"
            width={24}
            height={24}
          />

          <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-slate-100 flex justify-center items-center">
            <img
              className="w-24 h-24"
              src={coffeeMashinImg}
              alt="Coffee Machine"
              width={96}
              height={96}
            />
          </div>
          <p className="text-xl font-semibold">تنظیم درصد رست و ترکیب</p>

          <img
            className="size-6"
            src={arrowImg}
            alt="Arrow"
            width={24}
            height={24}
          />

          <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-slate-100 flex justify-center items-center">
            <img
              className="w-24 h-24"
              src={coffeeImg}
              alt="Coffee"
              width={96}
              height={96}
            />
          </div>
          <p className="text-xl font-semibold">انتخاب سفارش و تحویل بسته</p>
        </div>
        <CoffeeSelection />
      </div>
    </div>
  );
}

export default index;
