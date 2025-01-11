"use client";
import React, { useState } from "react";
import CountryCard from "../../Module/CountryCard";
import PlantHeder from "../../Module/PlantHeder";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import CoffeeCard from "../../Module/WightCoffeeCard";

const CoffeeSelection = () => {
  const [arabicaValue, setArabicaValue] = useState(50);
  const [robustaValue, setRobustaValue] = useState(50);

  const countries = [
    {
      country: "Peru",
      flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg",
      nativeName: "پرو",
      roast: "رست",
      level: "مدیوم",
    },
    {
      country: "Colombia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg",
      nativeName: "کلمبیا",
      roast: "رست",
      level: "مدیوم",
    },
    {
      country: "Kenya",
      flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg",
      nativeName: "کنیا",
      roast: "رست",
      level: "مدیوم",
    },
    {
      country: "India",
      flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
      nativeName: "هند",
      roast: "رست",
      level: "مدیوم",
    },
    {
      country: "Vietnam",
      flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg",
      nativeName: "ویتنام",
      roast: "رست",
      level: "مدیوم",
    },
    {
      country: "Indonesia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
      nativeName: "اندونزی",
      roast: "رست",
      level: "مدیوم",
    },
  ];

  const firstRow = countries.slice(0, 3);
  const secondRow = countries.slice(3);

  return (
    <div className="w-full mt-10 bg-white rounded-2xl">
      <div className="p-4 flex flex-col gap-8">
        {/* نژاد عربیکا */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-lg md:text-2xl text-green-800">نژاد عربیکا:</h3>
            <p className="text-sm text-gray-600 pt-2">
              در اینجا می‌توانید نژاد قهوه عربیکا خود را در بین گزینه‌های مقابل
              انتخاب نمایید.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {firstRow.map((country, index) => (
              <CountryCard key={index} {...country} />
            ))}
          </div>
        </div>

        {/* نژاد روبوستا */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-lg md:text-2xl text-green-800">نژاد روبوستا:</h3>
            <p className="text-sm text-gray-600 pt-2">
              در اینجا می‌توانید نژاد قهوه روبوستای خود را در بین گزینه‌های
              مقابل انتخاب نمایید.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {secondRow.map((country, index) => (
              <CountryCard key={index} {...country} />
            ))}
          </div>
        </div>

        {/* تنظیم ترکیبات قهوه */}
        <div>
          <PlantHeder size="text-lg md:text-3xl" text="تنظیم ترکیبات قهوه" />
        </div>
        <div className="flex flex-col gap-8">
          {/* اسلایدر عربیکا */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg md:text-2xl text-green-800">
              درصد ترکیب عربیکا :
            </h3>
            <RangeSlider
              min={0}
              max={100}
              step={10}
              value={[arabicaValue]}
              onInput={(value) => setArabicaValue(value[0])}
              className="w-full"
              thumbClassName="bg-green-600"
              trackClassName="bg-gray-200"
            />
            <div className="flex justify-between text-sm text-green-800">
              {Array.from({ length: 11 }, (_, i) => i * 10).map((val) => (
                <span key={val}>{val}</span>
              ))}
            </div>
          </div>

          {/* اسلایدر روبوستا */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg md:text-2xl text-green-800">
              درصد ترکیب روبوستا :
            </h3>
            <RangeSlider
              min={0}
              max={100}
              step={10}
              value={[robustaValue]}
              onInput={(value) => setRobustaValue(value[0])}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-green-800">
              {Array.from({ length: 11 }, (_, i) => i * 10).map((val) => (
                <span key={val}>{val}</span>
              ))}
            </div>
          </div>
        </div>

        {/* وزن بسته قهوه */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg md:text-2xl text-green-800">وزن بسته قهوه شما:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <CoffeeCard
              imageSrc="https://halochin.ir/coffee-store/wp-content/uploads/2023/11/Group-72.png"
              weight="100 گرم"
              description="قهوه عربیکا و روبوستا"
            />
            <CoffeeCard
              imageSrc="https://halochin.ir/coffee-store/wp-content/uploads/2023/11/Group-72.png"
              weight="150 گرم"
              description="قهوه عربیکا و روبوستا"
            />
            <CoffeeCard
              imageSrc="https://halochin.ir/coffee-store/wp-content/uploads/2023/11/Group-72.png"
              weight="250 گرم"
              description="قهوه عربیکا و روبوستا"
            />
          </div>
        </div>

        {/* دکمه مرحله بعد */}
        <div className="flex justify-center mt-4">
          <button className="bg-emerald-700 w-32 h-10 rounded-lg text-white text-sm md:text-base">
            مرحله بعد
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeSelection;
