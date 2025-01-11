function Footer() {
  return (
    <>
      <footer className="bg-zinc-800 text-white">
        <div className="container mx-auto px-4 md:px-16 pt-5">
          {/* خبرنامه */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-white rounded-3xl p-4">
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-black flex flex-col">
              <h5 className="text-2xl font-bold Rokh">خبرنامه قهوه شاپ</h5>
              <p className="text-sm mt-2 leading-6">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div
                className="flex items-center bg-white rounded-full shadow-md w-full max-w-md"
              >
                <input
                  type="text"
                  placeholder="آدرس ایمیل خود را وارد نمایید..."
                  className="flex-grow w-1/2 rounded-full p-2 px-6 text-gray-700 focus:outline-none text-sm"
                />
                <button className="bg-emerald-700 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  عضویت
                </button>
              </div>
            </div>
          </div>

          {/* محتوای اصلی */}
          <div className="flex flex-col md:flex-row md:justify-between mt-8">
            {/* بخش لوگو و توضیحات */}
            <div className="mb-6 md:ml-5 md:mb-0 md:w-1/4">
              <div className="flex items-center py-4">
                <img
                  src="https://halochin.ir/coffee-store/wp-content/uploads/2023/11/Group-796.svg"
                  className="w-3/4 mx-auto md:mx-0"
                  alt="لوگو"
                />
              </div>
              <p className="text-center md:text-right text-sm leading-6">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است...
              </p>
            </div>

            {/* بخش لینک‌ها */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full text-sm text-right">
              {/* خدمات مشتریان */}
              <div>
                <h2 className="mb-6 font-semibold text-white uppercase text-base">
                  خدمات مشتریان
                </h2>
                <ul className="text-gray-300 space-y-2">
                  <li>باشگاه مشتریان</li>
                  <li>همکاری در فروش</li>
                  <li>تخفیف‌ها</li>
                  <li>فرصت‌های شغلی</li>
                  <li>مرجوع کالا</li>
                  <li>سوالات متداول</li>
                </ul>
              </div>

              {/* لینک‌های مفید */}
              <div>
                <h2 className="mb-6 font-semibold text-white uppercase text-base">
                  لینک‌های مفید
                </h2>
                <ul className="text-gray-300 space-y-2">
                  <li>صفحه اصلی</li>
                  <li>سفارش قهوه</li>
                  <li>درباره ما</li>
                  <li>فروشگاه ما</li>
                  <li>آخرین مقالات</li>
                  <li>ارتباط با ما</li>
                </ul>
              </div>

              {/* راه‌های ارتباطی */}
              <div>
                <h2 className="mb-6 font-semibold text-white uppercase text-base">
                  راه‌های ارتباطی
                </h2>
                <ul className="text-gray-300 space-y-2">
                  <li>035 - 12345687</li>
                  <li>09123456789</li>
                  <li>Info@yoursite.com</li>
                  <li>
                    تهران، خیابان طراحان سایت، کوچه خوبان پ.22
                  </li>
                </ul>
              </div>

              {/* نماد اعتماد */}
              <div>
                <h2 className="mb-6 font-semibold text-white uppercase text-base">
                  نماد اعتماد
                </h2>
                <div className="flex space-x-4">
                  <img
                    src="https://cdn.zarinpal.com/badges/trustLogo/1.svg"
                    alt="نماد اعتماد"
                    className="w-12 h-12"
                  />
                  <img
                    src="https://labkhand.shop/wp-content/uploads/2022/11/enamad_icon_text_color_blue_1024-400x400.png"
                    alt="نماد اعتماد"
                    className="w-12 h-12"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* خط جداکننده و کپی‌رایت */}
          <hr className="my-6 border-gray-600" />
          <div className="sm:flex sm:items-center sm:justify-between text-sm text-gray-400">
            <span>تمامی حقوق مادی و معنوی این سایت متعلق به سایت قهوه می‌باشد.</span>
            {/* <div className="flex space-x-4 mt-4 sm:mt-0">
              <img
                src="/path/to/youtube.svg"
                alt="یوتیوب"
                className="w-6 h-6"
              />
              <img
                src="/path/to/facebook.svg"
                alt="فیسبوک"
                className="w-6 h-6"
              />
              <img
                src="/path/to/whatsapp.svg"
                alt="واتساپ"
                className="w-6 h-6"
              />
              <img
                src="/path/to/telegram.svg"
                alt="تلگرام"
                className="w-6 h-6"
              />
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
