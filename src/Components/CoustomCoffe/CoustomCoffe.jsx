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
      {/* Title */}
      <div className="flex items-center content-center text-center mt-96 mb-10 pt-96 justify-center">
        <div className="flex items-center content-center text-center mb-10 text-4xl justify-center">
          <PlantHeder size={36} text="ترکیب سفارشی" />
        </div>
      </div>

      {/* Coffe Image */}
      <div className="flex gap-x-8 mt-12 mr-32">
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-slate-100">
          <img className="w-24 h-24" src={sunImg} />
        </div>
        <p className="text-xl Rokh">انتخاب نوع و نژاد قهوه</p>

        <img src={arrowImg} />

        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-slate-100">
          <img className="w-24 h-24" src={coffeeMashinImg} />
        </div>
        <p className="text-xl Rokh">تنظیم درصد رست و ترکیب</p>

        <img className="arrowImg" src={arrowImg} />

        <div className="flex w-16 h-16 md:w-24 md:h-24 rounded-full bg-slate-100">
          <img className="w-24 h-24" src={coffeeImg} />
        </div>
        <p className="text-xl Rokh"> انتخاب سفارش و تحویل بسته</p>
      </div>

      <div className="flex mr-80">
        <button className="grid my-10 mr-96 rounded-3xl text-white bg-emerald-600 hover:text-emerald-600 hover:bg-slate-100 p-2 px-5 md:p-2 md:px-5 text-xs md:text-base transition-color">
          مشاهده همه
        </button>
      </div>
    </>
  );
}

export default CoustomCoffe;
