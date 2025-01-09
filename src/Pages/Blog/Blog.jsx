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
      <div className="flex gap-x-16 pt-40 p-4 container mx-auto">
        <CategoryBox />
        <PostBlog />
      </div>

      <div className="container mx-auto">
        {/* Title */}
        <PlantHeder size={20} text="آخرین مقالات" />

        <div className="grid grid-cols-4 gap-6 my-12 w-full">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="bg-[#efeff1] w-[300px] h-[356px] rounded-3xl"
            >
              <div className="flex justify-center items-center pt-3 pb-2">
                <img
                  className="rounded-xl w-[281px] h-[200px]"
                  src={card.img}
                  alt={card.date}
                  width={281}
                  height={200}
                />
              </div>
              <div className="px-5">
                <h5 className="my-2 text-[15px] font-bold text-gray-900">
                  {card.title}
                </h5>
                <p className="mb-5 text-[13px] font-light text-gray-700">
                  {card.description}
                </p>
                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-x-2 font-light">
                    <img
                      src={calendarIcon}
                      alt="calendar"
                      width={20}
                      height={20}
                    />
                    <span>{card.date}</span>
                  </div>
                  <button className="flex px-4 py-1.5 text-xs text-center text-white bg-emerald-700 rounded-2xl">
                    مطالعه کنید
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white shadow p-4 flex justify-center items-center rounded-xl">
          <div className="flex items-center gap-4">
            <button className="text-blue-500 hover:underline">۱</button>
            <button className="text-blue-500 hover:underline">۲</button>
            <button className="text-blue-500 hover:underline">بعدی</button>
          </div>
        </div>
        <div className="flex justify-center my-5">
          <img className="w-full" src={instagramImg} alt="instagramImg" />
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
