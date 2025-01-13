import { coffe, coffe_2 } from "../../assets/image";
import { checkboxIcon, questionIcon, shopIcon } from "../../assets/icons";
import SpecialCard from "../SpecialCard/SpecialCard";
import db from "../../../db.json";
import { NavLink } from "react-router-dom";
import PlantHeder from "../Module/PlantHeder";

function AboutShop() {
  const loremText = `ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
  استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
  در ستون و سطرآنچنان که لازم است.`;

  return (
    <div className="h-auto md:h-[1780px] text-white pt-10 md:pt-52 -mt-0 md:-mt-36 bg-[#1b1b1d]">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
        {/* بخش درباره فروشگاه */}
        <div className="flex flex-col justify-center">
          <div className="text-2xl md:text-4xl">
            <PlantHeder size="text-2xl" color="#ffff" text="درباره فروشگاه ما" />
          </div>
          <div className="mt-4 md:mt-6 text-sm md:text-base">
            <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی است.
            </p>
          </div>
          <div className="mt-5 md:mt-10 flex flex-col md:flex-row gap-y-4 md:gap-x-6">
            <button className="flex items-center justify-center rounded-3xl bg-emerald-600 text-white p-2 px-5 text-xs md:text-base">
              <img src={shopIcon} className="ml-1" alt="فروشگاه ما" />
              فروشگاه ما
            </button>
            <button className="flex items-center justify-center rounded-3xl text-emerald-600 bg-slate-100 p-2 px-5 text-xs md:text-base">
              <img src={questionIcon} className="ml-1" alt="سوالی دارید؟" />
              سوالی دارید؟
            </button>
          </div>
        </div>

        {/* تصویر درباره فروشگاه */}
        <div className="flex justify-center">
          <img
            className="h-[300px] w-full md:h-[600px] md:w-[640px] object-cover rounded-lg"
            src={coffe}
            alt="تصویر کافه"
          />
        </div>
      </div>

      {/* بخش مناسب‌ترین انتخاب */}
      <div className="container grid md:grid-cols-2 gap-8 mt-10 md:mt-36 px-4 md:px-10">
        <div className="flex justify-center order-2 md:order-1">
          {/* تصویر مناسب‌ترین انتخاب */}
          <img
            className="h-[300px] w-full md:h-[600px] md:w-[640px] object-cover rounded-lg"
            src={coffe_2}
            alt="تصویر کافه"
          />
        </div>

        <div className="flex flex-col justify-center order-1 md:order-1">
          {/* متن مناسب‌ترین انتخاب */}
          <div className="text-2xl md:text-4xl">
            <PlantHeder size="text-2xl" color="#ffff" text="مناسب ترین انتخاب" />
          </div>
          <div className="mt-4 md:mt-6 space-y-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-sm md:text-base font-light"
              >
                <img src={checkboxIcon} alt="آیکون چک‌باکس" className="w-6 h-6" />
                <p>{loremText}</p>
              </div>
            ))}
          </div>
        </div>

        
      </div>

      {/* بخش جدیدترین محصولات */}
      <div className="mt-20 px-4 md:px-0">
        <div className="text-2xl md:text-4xl text-center">
          <PlantHeder size="text-2xl" color="#ffff" text="جدید ترین محصولات" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-2 md:px-28">
          {db.Products.slice(0, 4).map((product) => ( // فقط 4 کارت در موبایل
            <SpecialCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center py-10">
          <NavLink
            className="rounded-3xl text-emerald-600 bg-slate-100 hover:bg-emerald-600 hover:text-white py-2 px-5 text-sm md:text-base transition-all"
            to="/products"
          >
            مشاهده همه
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AboutShop;
