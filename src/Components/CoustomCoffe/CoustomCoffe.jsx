import {
  arrowImg,
  coffeeImg,
  coffeeMashinImg,
  sunImg,
} from "../../assets/image";
import PlantHeder from "../Module/PlantHeder";

function CoustomCoffe() {
  return (
    <>
      {/* عنوان */}
      <div className="flex items-center content-center text-center md:mt-96 md:pt-10 mb-16 justify-center">
        <div className="text-2xl md:text-4xl">
          <PlantHeder size="text-2xl md:text-4xl" text="ترکیب سفارشی" />
        </div>
      </div>

      {/* تصاویر و توضیحات */}
      <div className="flex flex-col md:flex-row gap-y-8 md:gap-x-8 mt-12 px-4 md:mr-32 items-center md:items-start">
        {/* آیتم اول */}
        <div className="flex flex-col items-center md:flex-row md:items-center gap-4">
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-slate-100 flex justify-center items-center">
            <img className="w-12 h-12 md:w-24 md:h-24" src={sunImg} alt="آفتاب" />
          </div>
          <p className="text-base md:text-xl Rokh">انتخاب نوع و نژاد قهوه</p>
        </div>

        {/* فلش اول */}
        <img className="hidden md:block" src={arrowImg} alt="فلش" />

        {/* آیتم دوم */}
        <div className="flex flex-col items-center md:flex-row md:items-center gap-4">
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-slate-100 flex justify-center items-center">
            <img
              className="w-12 h-12 md:w-24 md:h-24"
              src={coffeeMashinImg}
              alt="دستگاه قهوه‌سازی"
            />
          </div>
          <p className="text-base md:text-xl Rokh">تنظیم درصد رست و ترکیب</p>
        </div>

        {/* فلش دوم */}
        <img className="hidden md:block" src={arrowImg} alt="فلش" />

        {/* آیتم سوم */}
        <div className="flex flex-col items-center md:flex-row md:items-center gap-4">
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-slate-100 flex justify-center items-center">
            <img className="w-12 h-12 md:w-24 md:h-24" src={coffeeImg} alt="قهوه" />
          </div>
          <p className="text-base md:text-xl Rokh">انتخاب سفارش و تحویل بسته</p>
        </div>
      </div>

      {/* دکمه */}
      <div className="flex justify-center mt-10">
        <button className="rounded-3xl text-white bg-emerald-600 hover:text-emerald-600 hover:bg-slate-100 py-2 px-5 text-sm md:text-base transition-colors">
          مشاهده همه
        </button>
      </div>
    </>
  );
}

export default CoustomCoffe;
