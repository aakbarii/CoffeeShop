import React from "react";
import Image from "next/image";

const CategoryBox = () => {
  const categories = [
    { id: 1, name: "هنر و سینما", icon: "🎭" },
    { id: 2, name: "منتخب سردبیر", icon: "🖋" },
    { id: 3, name: "کتاب و ادبیات", icon: "📖" },
    { id: 4, name: "علم و تکنولوژی", icon: "🌐" },
    { id: 5, name: "سبک زندگی", icon: "🏞" },
    { id: 6, name: "بازی ویدئویی", icon: "🎮" },
    { id: 7, name: "آن‌باکس محصولات", icon: "📦" },
  ];

  return (
    <div className="w-72 h-[360px] p-4 bg-white border rounded-lg shadow-md">
      <ul className="space-y-4">
        {categories.map((category) => (
          <li
            key={category.id}
            className="flex items-center justify-between text-gray-700 hover:text-gray-900"
          >
            <span className="flex items-center gap-2">
              <span className="text-lg">{category.icon}</span>
              <span className="text-sm font-medium">{category.name}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryBox;
