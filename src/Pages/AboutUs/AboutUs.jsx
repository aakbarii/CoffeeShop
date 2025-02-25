import React from "react";
import { aboutUsImg } from "../../assets/image";
import { Link } from "react-router-dom";
import { questionIcon } from "../../assets/icons";
import CostomLayout from "../../Components/Template/AboutUs/costomLayout";

function page() {
  return (
    <div className="pt-40 p-4 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-y-5">
          <div className="flex lg:justify-start justify-center items-center content-center">
            <svg
              className="w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="48"
              viewBox="0 0 40 48"
              fill="none"
            >
              <path
                d="M2.06297 27.8139C-0.542719 21.3503 1.59865 13.0495 7.26788 7.62882C11.9689 3.13685 18.7983 0.428029 26.5008 0.00273982C26.8529 -0.0202488 27.1885 0.102352 27.4475 0.335687C27.7054 0.567871 27.8609 0.89354 27.8789 1.24028C28.2107 7.82115 25.9571 14.4783 21.6963 19.5063C17.2707 24.727 10.9455 27.8798 3.40394 28.6251C3.36065 28.6289 3.31738 28.6316 3.27523 28.6316C2.74689 28.632 2.2645 28.3113 2.06297 27.8139Z"
                fill="#007E57"
              ></path>
              <path
                d="M20.165 46.8304C14.1469 44.9604 8.75506 40.7991 5.37341 35.4127C5.17422 35.0946 5.12074 34.7057 5.22912 34.3444C5.336 33.9831 5.59276 33.6889 5.93246 33.5362C12.6364 30.5224 19.2427 29.5982 25.0404 30.872C32.0354 32.4046 37.7669 37.3858 39.644 43.5608C39.7584 43.9383 39.6952 44.3409 39.487 44.6579C39.4598 45.1325 39.1757 45.5718 38.7217 45.7716C35.3625 47.25 31.6695 47.9999 27.9829 47.9999C25.33 48.0006 22.6826 47.6132 20.165 46.8304Z"
                fill="#007E57"
              ></path>
            </svg>
            <h3 className="lg:text-[34px] text-3xl lg:text-start text-center font-rokh">درباره فروشگاه ما </h3>
            <svg
              className="w-10"
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="10"
              viewBox="0 0 31 10"
              fill="none"
            >
              <path
                d="M2.9903 7.13018C4.3143 7.11818 4.9973 5.07218 4.1623 4.15618C3.4053 4.70618 2.3493 4.91414 1.6483 4.16314C1.0933 5.47114 1.2113 7.16018 2.9903 7.13018ZM1.3623 8.69317C-0.729701 7.34017 -0.117701 5.01915 1.2293 3.36815C1.1613 -0.0498464 6.5883 -0.226862 7.3803 2.95214C8.7403 6.32114 4.7753 11.0272 1.3623 8.69317Z"
                fill="#007E57"
              ></path>
              <path
                d="M14.6448 7.13018C15.9688 7.11818 16.6518 5.07218 15.8168 4.15618C15.0598 4.70618 14.0038 4.91414 13.3028 4.16314C12.7478 5.47114 12.8658 7.16018 14.6448 7.13018ZM13.0168 8.69317C10.9248 7.34017 11.5368 5.01915 12.8838 3.36815C12.8158 -0.0498464 18.2428 -0.226862 19.0348 2.95214C20.3948 6.32114 16.4298 11.0272 13.0168 8.69317Z"
                fill="#007E57"
              ></path>
              <path
                d="M26.2994 7.13018C27.6234 7.11818 28.3064 5.07218 27.4714 4.15618C26.7144 4.70618 25.6584 4.91414 24.9574 4.16314C24.4024 5.47114 24.5204 7.16018 26.2994 7.13018ZM24.6714 8.69317C22.5794 7.34017 23.1914 5.01915 24.5384 3.36815C24.4704 -0.0498464 29.8974 -0.226862 30.6894 2.95214C32.0494 6.32114 28.0844 11.0272 24.6714 8.69317Z"
                fill="#007E57"
              ></path>
            </svg>
          </div>
          <p className="text-gray-600 leading-7">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد .
          </p>
          <div className="mt-5 flex gap-x-6">
            <Link href="/shop">
              <p className="flex gap-x-2 items-center rounded-3xl bg-emerald-600 text-white p-2 px-5 md:p-2 md:px-5 text-xs md:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3.01025 15.71C3.01025 20.2 4.81025 22 9.30025 22H14.6903C19.1803 22 20.9803 20.2 20.9803 15.71V11.22"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12.0005 12C13.8305 12 15.1805 10.51 15.0005 8.68L14.3405 2H9.67048L9.00048 8.68C8.82048 10.51 10.1705 12 12.0005 12Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M18.3103 12C20.3303 12 21.8103 10.36 21.6103 8.35L21.3303 5.6C20.9703 3 19.9703 2 17.3503 2H14.3003L15.0003 9.01C15.1703 10.66 16.6603 12 18.3103 12Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M5.64037 12C7.29037 12 8.78037 10.66 8.94037 9.01L9.16037 6.8L9.64037 2H6.59037C3.97037 2 2.97037 3 2.61037 5.6L2.34037 8.35C2.14037 10.36 3.62037 12 5.64037 12Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12.0005 17C10.3305 17 9.50049 17.83 9.50049 19.5V22H14.5005V19.5C14.5005 17.83 13.6705 17 12.0005 17Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                فروشگاه ما
              </p>
            </Link>
            <Link href="/faq">
              <p className="flex items-center rounded-3xl text-emerald-600 bg-slate-100 p-2 px-5 md:p-2 md:px-5 text-xs md:text-base">
                <img
                  src={questionIcon}
                  alt="سوالی دارید؟"
                  width={20}
                  height={20}
                  className="ml-1"
                />
                سوالی دارید؟
              </p>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={aboutUsImg}
            alt="aboutUsImg"
            className="filter brightness-110 grayscale-0"
          />
        </div>
      </div>
      <CostomLayout />
    </div>
  );
}

export default page;
