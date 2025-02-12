import { calendarIcon } from "../../assets/icons";
import { postImg } from "../../assets/image";
import PlantHeder from "../Module/PlantHeder";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useEffect, useState } from "react";
import { Axios } from "../../api/Axios";

function LastArticle() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    Axios.get("/articles")
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error("خطا در دریافت داده‌ها: ", error);
      });
  }, []);

  return (
    <>
      {/* عنوان */}
      <div className="flex justify-center items-center content-center text-center mb-16 text-2xl md:text-4xl">
        <PlantHeder size="text-2xl md:text-4xl" text="آخرین مقالات" />
      </div>

      {/* اسلایدر کارت‌ها */}
      <Swiper
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        breakpoints={{
          1200: {
            slidesPerView: 4, // تعداد کارت‌ها برای دسکتاپ
          },
          992: {
            slidesPerView: 3, // تعداد کارت‌ها برای تبلت
          },
          768: {
            slidesPerView: 2, // تعداد کارت‌ها برای موبایل‌های بزرگ
          },
          0: {
            slidesPerView: 1, // تعداد کارت‌ها برای موبایل‌های کوچک
          },
        }}
        className="mx-4 md:mx-24"
      >
        {articles.slice(0 , 4).map((article) => (
          <SwiperSlide key={article.id}>
            <div className="w-full h-auto md:w-[300px] md:h-[356px] rounded-3xl bg-[#efeff1] pb-3 mb-10">
              {/* تصویر */}
              <div className="flex justify-center items-center pt-3 pb-2">
                <img
                  className="rounded-xl w-full md:w-[281px] h-[200px]"
                  src={article.image}
                  alt="Post"
                />
              </div>

              {/* متن و اطلاعات */}
              <div className="px-4 md:px-5">
                <h5 className="my-2 text-sm md:text-base font-bold text-ellipsis text-gray-900">
                  {article.title}
                </h5>
                <p className="mb-5 text-[11px] md:text-[13px] font-light text-gray-700">
                  اپل ۱۰ سال قبل از آیفون ۵ رونمایی کرد که برخلاف نسل‌های قبلی،
                  فاقد کانکتور ۳۰ پین بود و با...
                </p>
                <div className="flex justify-between items-center text-xs md:text-sm">
                  <div className="flex items-center gap-x-2 font-light">
                    <img
                      src={calendarIcon}
                      alt="calendar"
                      width={20}
                      height={20}
                    />
                    <span>16 مهر 1401</span>
                  </div>
                  <button className="px-4 py-1.5 text-xs md:text-sm text-center text-white bg-emerald-700 rounded-2xl">
                    مطالعه کنید
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default LastArticle;
