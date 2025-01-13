// FilterBox.jsx
import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const FilterBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [productType, setProductType] = useState("");
  const [productName, setProductName] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  const handleApplyFilters = () => {
    console.log("Applying filters:", {
      searchTerm,
      priceRange,
      productType,
      productName,
    });
  };

  return (
    <div className="bg-white w-full h-[460px] lg:w-80 p-4 rounded-lg shadow-md mt-10">
      {/* جستجو */}
      <input
        type="text"
        placeholder="جستجو کنید"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 rounded-lg border border-gray-300"
      />
      <button
        className="w-full p-2 mb-4 text-white bg-[#087c54] rounded-lg hover:bg-emerald-700 transition-all"
        onClick={handleSearch}
      >
        جستجو کنید
      </button>

      {/* فیلتر قیمت */}
      <div className="bg-gray-100 p-3 rounded-lg mb-4">
        <h3 className="py-2 pb-5">فیلتر قیمت</h3>
        <RangeSlider
          min={0}
          max={100}
          value={priceRange}
          onInput={(value) => setPriceRange(value)}
          className="w-full mb-4"
        />
        <span className="block text-center">
          {priceRange[0]} تومان - {priceRange[1]} تومان
        </span>
      </div>

      {/* فیلتر نوع و اسم محصول */}
      <select
        value={productType}
        onChange={(e) => setProductType(e.target.value)}
        className="w-full p-2 mb-4 border rounded-lg"
      >
        <option value="">نوع محصول</option>
        <option value="type1">نوع 1</option>
        <option value="type2">نوع 2</option>
      </select>
      <select
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        className="w-full p-2 mb-4 border rounded-lg"
      >
        <option value="">اسم محصول</option>
        <option value="name1">اسم 1</option>
        <option value="name2">اسم 2</option>
      </select>

      {/* دکمه اعمال فیلتر */}
      <button
        className="w-full p-2 text-white bg-[#087c54] rounded-lg hover:bg-emerald-700 transition-all"
        onClick={handleApplyFilters}
      >
        اعمال فیلتر
      </button>
    </div>
  );
};

export default FilterBox;
