// import YotubeImage from '../../assets/Images/svg-image-37.svg'
// import FacebookImage from '../../assets/Images/svg-image-38.svg'
// import WhatsubImage from '../../assets/Images/svg-image-39.svg'
// import TelegramImage from '../../assets/Images/svg-image-40.svg'

function Footer() {
  return (
    <>
      <footer className="back-image bg-zinc-800 text-white">
        <div className="mx-32 pt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-fit bg-white rounded-3xl ">
            {/* خبرنامه */}
            <div className="container m-5 text-black my-4 mb-6 flex flex-col md:col-span-2 lg:col-span-3 xl:col-span-3">
              <h5 className="text-2xl font-bold Rokh">خبرنامه قهوه شاپ</h5>
              <p className="text-sm mt-2 leading-6">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است.
              </p>
            </div>
            <div className="md:col-span-1 lg:col-span-1 xl:col-span-2 flex justify-center items-center">
              <div
                dir="rtl"
                className="flex items-center bg-white rounded-full shadow-md"
              >
                <input
                  type="text"
                  placeholder="آدرس ایمیل خود را وارد نمایید..."
                  className="rounded-full p-2 px-6 w-64 text-gray-700 focus:outline-none"
                />
                <span className="bg-emerald-700 p-2 rounded-full">
                  <button className="text-sm text-white px-4 py-2 font-semibold">
                    عضویت
                  </button>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-6 md:mb-0 md:w-1/5">
              <div className="flex items-center py-4">
                <img
                  src="https://halochin.ir/coffee-store/wp-content/uploads/2023/11/Group-796.svg"
                  className="w-3/4"
                />
              </div>

              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
            </div>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6 w-full text-nowrap pr-16 pt-5 bg-cover bg-center"
              style={{ backgroundImage: "url('/path/to/background.jpg')" }}
            >
              {/* خدمات مشتریان */}
              <div>
                <h2 className="mb-6 font-semibold text-white uppercase text-base">
                  خدمات مشتریان
                </h2>
                <ul className="text-white font-medium">
                  <li className="mb-4">باشگاه مشتریان</li>
                  <li className="mb-4">همکاری در فروش</li>
                  <li className="mb-4">تخفیف‌ها</li>
                  <li className="mb-4">فرصت‌های شغلی</li>
                  <li className="mb-4">مرجوع کالا</li>
                  <li>سوالات متداول</li>
                </ul>
              </div>

              {/* لینک‌های مفید */}
              <div>
                <h2 className="mb-6 font-semibold text-white uppercase  text-base">
                  لینک‌های مفید
                </h2>
                <ul className="text-white font-medium">
                  <li className="mb-4">صفحه اصلی</li>
                  <li className="mb-4">سفارش قهوه</li>
                  <li className="mb-4">درباره ما</li>
                  <li className="mb-4">فروشگاه ما</li>
                  <li className="mb-4">آخرین مقالات</li>
                  <li>ارتباط با ما</li>
                </ul>
              </div>

              {/* راه‌های ارتباطی */}
              <div>
                <h2 className="mb-6 font-semibold text-white uppercase  text-base">
                  راه‌های ارتباطی
                </h2>
                <ul className="text-white font-medium">
                  <li className="mb-4">035 - 12345687</li>
                  <li className="mb-4">09123456789</li>
                  <li className="mb-4">Info@yoursite.com</li>
                  <li className="text-wrap">تهران، خیابان طراحان سایت، کوچه خوبان پ.22</li>
                </ul>
              </div>

              {/* نماد اعتماد */}
              <div>
                <h2 className="mb-6 font-semibold text-white uppercase  text-base">
                  نماد اعتماد
                </h2>
                <div className="flex space-x-4">
                  <div className="p-4 size-52 rounded-md text-center">
                    <img src="https://cdn.zarinpal.com/badges/trustLogo/1.svg" alt="" />
                  </div>
                  <div className="p-4 size-52 rounded-md text-center">
                    <img src="https://labkhand.shop/wp-content/uploads/2022/11/enamad_icon_text_color_blue_1024-400x400.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center ">
              تمامی حقوق مادی و معنوی این سایت متعلق به سایت قهوه می باشد
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              {/* <img className=' bg-black' src={YotubeImage} />
                        <img className=' bg-black' src={FacebookImage} />
                        <img className=' bg-black' src={WhatsubImage} />
                        <img className=' bg-black' src={TelegramImage} /> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
