import { calendarIcon } from "../../assets/icons";
import { postImg } from "../../assets/image";
import PlantHeder from "../Module/PlantHeder";

function LastArticle() {
  return (
    <>
      {/* Title */}
      <div className="flex justify-center items-center content-center text-center mb-10 text-4xl">
        <PlantHeder size={20} text="آخرین مقالات" />
      </div>

      {/* Card */}
      <div className="grid grid-cols-4 mx-24 mb-52 ">
        <div
          style={{ backgroundColor: "#efeff1" }}
          className="w-[300px] h-[356px]  rounded-3xl"
        >
          <div className="flex justify-center items-center pt-3 pb-2">
            <img className="rounded-xl w-[281px] h-[200px]" src={postImg} />
          </div>
          <div className="px-5">
            <h5 className="my-2 text-base font-bold text-gray-900">
              رویداد رونمایی از سرفیس‌ها در تاریخ ه...
            </h5>
            <p className="mb-5 text-[13px] font-light text-gray-700 ">
              اپل ۱۰ سال قبل از آیفون ۵ رونمایی کرد که برخلاف نسل‌های قبلی، فاقد
              کانکتور ۳۰ پین بود و با...
            </p>
            <div className="flex justify-between text-sm">
              <div className="flex items-center gap-x-2 font-light">
                <img src={calendarIcon} alt="calendar" width={20} height={20} />
                <span>16 مهر 1401</span>
              </div>
              <button className="flex px-4 py-1.5 text-xs text-center text-white bg-emerald-700 rounded-2xl">
                مطالعه کنید
              </button>
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[356px] rounded-3xl bg-[#efeff1]">
          <div className="flex justify-center items-center pt-3 pb-2">
            <img className="rounded-xl w-[281px] h-[200px]" src={postImg} />
          </div>
          <div className="px-5">
            <h5 className="my-2 text-base font-bold text-gray-900">
              رویداد رونمایی از سرفیس‌ها در تاریخ ه...
            </h5>
            <p className="mb-5 text-[13px] font-light text-gray-700 ">
              اپل ۱۰ سال قبل از آیفون ۵ رونمایی کرد که برخلاف نسل‌های قبلی، فاقد
              کانکتور ۳۰ پین بود و با...
            </p>
            <div className="flex justify-between text-sm">
              <div className="flex items-center gap-x-2 font-light">
                <img src={calendarIcon} alt="calendar" width={20} height={20} />
                <span>16 مهر 1401</span>
              </div>
              <button className="flex px-4 py-1.5 text-xs text-center text-white bg-emerald-700 rounded-2xl">
                مطالعه کنید
              </button>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundColor: "#efeff1" }}
          className="w-[300px] h-[356px]  rounded-3xl"
        >
          <div className="flex justify-center items-center pt-3 pb-2">
            <img className="rounded-xl w-[281px] h-[200px]" src={postImg} />
          </div>
          <div className="px-5">
            <h5 className="my-2 text-base font-bold text-gray-900">
              رویداد رونمایی از سرفیس‌ها در تاریخ ه...
            </h5>
            <p className="mb-5 text-[13px] font-light text-gray-700 ">
              اپل ۱۰ سال قبل از آیفون ۵ رونمایی کرد که برخلاف نسل‌های قبلی، فاقد
              کانکتور ۳۰ پین بود و با...
            </p>
            <div className="flex justify-between text-sm">
              <div className="flex items-center gap-x-2 font-light">
                <img src={calendarIcon} alt="calendar" width={20} height={20} />
                <span>16 مهر 1401</span>
              </div>
              <button className="flex px-4 py-1.5 text-xs text-center text-white bg-emerald-700 rounded-2xl">
                مطالعه کنید
              </button>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundColor: "#efeff1" }}
          className="w-[300px] h-[356px] rounded-3xl"
        >
          <div className="flex justify-center items-center pt-3 pb-2">
            <img className="rounded-xl w-[281px] h-[200px]" src={postImg} />
          </div>
          <div className="px-5">
            <h5 className="my-2 text-base font-bold text-gray-900">
              رویداد رونمایی از سرفیس‌ها در تاریخ ه...
            </h5>
            <p className="mb-5 text-[13px] font-light text-gray-700 ">
              اپل ۱۰ سال قبل از آیفون ۵ رونمایی کرد که برخلاف نسل‌های قبلی، فاقد
              کانکتور ۳۰ پین بود و با...
            </p>
            <div className="flex justify-between text-sm">
              <div className="flex items-center gap-x-2 font-light">
                <img src={calendarIcon} alt="calendar" width={20} height={20} />
                <span>16 مهر 1401</span>
              </div>
              <button className="flex px-4 py-1.5 text-xs text-center text-white bg-emerald-700 rounded-2xl">
                مطالعه کنید
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="blackBg h-52"></div>
    </>
  );
}

export default LastArticle;
