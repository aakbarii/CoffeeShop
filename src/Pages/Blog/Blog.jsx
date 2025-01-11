import React from "react";
import PostBlog from "../../Components/Template/PostBlog";
import CategoryBox from "../../Components/Module/CategoryBox";
import { calendarIcon } from "../../assets/icons";
import { instagramImg, postImg } from "../../assets/image";
import PlantHeder from "../../Components/Module/PlantHeder";

const cardsData = [
  {
    title: "رویداد رونمایی از سرفیس‌ها در تاریخ ه...",
    description:
      "اپل ۱۰ سال قبل از آیفون ۵ رونمایی کرد که برخلاف نسل‌های قبلی، فاقد کانکتور ۳۰ پین بود و با...",
    date: "16 مهر 1401",
    img: postImg,
  },
  {
    title: "رویداد رونمایی از سرفیس‌ها در تاریخ ه...",
    description:
      "اپل ۱۰ سال قبل از آیفون ۵ رونمایی کرد که برخلاف نسل‌های قبلی، فاقد کانکتور ۳۰ پین بود و با...",
    date: "16 مهر 1401",
    img: postImg,
  },
  {
    title: "رویداد رونمایی از سرفیس‌ها در تاریخ ه...",
    description:
      "اپل ۱۰ سال قبل از آیفون ۵ رونمایی کرد که برخلاف نسل‌های قبلی، فاقد کانکتور ۳۰ پین بود و با...",
    date: "16 مهر 1401",
    img: postImg,
  },
  {
    title: "رویداد رونمایی از سرفیس‌ها در تاریخ ه...",
    description:
      "اپل ۱۰ سال قبل از آیفون ۵ رونمایی کرد که برخلاف نسل‌های قبلی، فاقد کانکتور ۳۰ پین بود و با...",
    date: "16 مهر 1401",
    img: postImg,
  },
];

function BlogPage() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-6 pt-32">
        <CategoryBox />
        <div className="flex-grow">
          <PostBlog />
        </div>
      </div>

      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mt-12">
          <PlantHeder size="text-2xl md:text-4xl" text="آخرین مقالات" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="bg-[#efeff1] rounded-3xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                className="rounded-xl w-full h-40 object-cover"
                src={card.img}
                alt={card.title}
              />
              <h5 className="my-2 text-sm md:text-base font-bold text-gray-900">
                {card.title}
              </h5>
              <p className="mb-5 text-xs md:text-sm text-gray-700">
                {card.description}
              </p>
              <div className="flex justify-between items-center text-xs md:text-sm">
                <div className="flex items-center gap-2">
                  <img src={calendarIcon} alt="calendar" className="w-4 h-4" />
                  <span>{card.date}</span>
                </div>
                <button className="px-4 py-1 text-white bg-emerald-700 rounded-2xl hover:bg-emerald-600">
                  مطالعه کنید
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex justify-center my-5">
          <img
            className="w-full max-w-4xl"
            src={instagramImg}
            alt="instagramImg"
          />
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
