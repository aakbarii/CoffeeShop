import Image from "next/image";
import Link from "next/link";
import HomeDrawer from "../Drawer/HomeDrawer";

// تصاویر
import { appLogo } from "../../../../../public/image";
import {
  homeIcon,
  shopIcon,
  coffeeIcon,
  infoIcon,
  phoneIcon,
  articleIcon,
  userIcon,
  cartIcon,
  searchIcon,
  menuIcon,
} from "../../../../../public/icons";

// آیکون‌ها
const navItems = [
  { name: "صفحه اصلی", icon: homeIcon, path: "/" },
  { name: "فروشگاه", icon: shopIcon, path: "/shop" },
  { name: "سفارش قهوه", icon: coffeeIcon, path: "/costom" },
  { name: "وبلاگ", icon: articleIcon, path: "/blog" },
  { name: "درباره ما", icon: infoIcon, path: "/about-us" },
  { name: "تماس با ما", icon: phoneIcon, path: "/call-to-us" },
];

function Navbar() {
  const renderNavItems = (isMobile = false) => (
    <ul
      className={
        isMobile
          ? "mt-4 font-dana"
          : "flex lg:gap-x-9 gap-x-5 text-gray-300 tracking-tighter chlid:leading-[56px] font-dana"
      }
    >
      {navItems.map((item, index) => (
        <li key={index}>
          <span className="flex gap-x-1 items-center">
            <Image src={item.icon} alt={item.name} width={20} height={20} />
            <Link className="text-black" href={item.path}>
              {item.name}
            </Link>
          </span>
        </li>
      ))}
    </ul>
  );

  const renderUserIcons = () => (
    <div dir="rtl" className="text-white flex gap-x-2 items-center">
      <span className="rounded-full flex items-center justify-center w-9 h-9 bg-[#331603]">
        <Image src={userIcon} alt="User" width={20} height={20} />
      </span>
      <span className="rounded-full flex items-center justify-center w-9 h-9 bg-[#331603]">
        <Image src={cartIcon} alt="Cart" width={25} height={25} />
      </span>
    </div>
  );

  return (
    <>
      <header className="container m-auto absolute top-5 right-0 left-0 bg-[#efeff1] rounded-3xl md:flex lg:flex hidden items-center md:w-[85%] w-[90%] h-20 mx-auto lg:px-10 px-5">
        <div className="flex w-full items-center justify-between">
          <nav className="flex lg:gap-x-9 gap-x-5 items-center h-14 delay-75">
            <div className="shrink-0">
              <Image src={appLogo} alt="App Logo" width={52} height={52} />
            </div>
            {renderNavItems()}
          </nav>
          <div dir="rtl" className="flex items-center">
            <input
              type="text"
              placeholder="جستجو..."
              className="rounded-r-3xl p-2 px-12"
            />
            <span className="rounded-l-3xl bg-white p-2">
              <Image src={searchIcon} alt="Search" width={24} height={24} />
            </span>
          </div>
          {renderUserIcons()}
        </div>
      </header>

      <div className="flex md:hidden items-center justify-between bg-[#efeff1] m-auto absolute top-5 right-0 left-0 lg:w-[85%] w-[90%] h-20 mx-auto lg:px-10 px-5 rounded-4xl">
        <div className="text-zinc-900 dark:text-white">
          <Image src={menuIcon} alt="Menu" width={26} height={26} />
        </div>
        <HomeDrawer renderNavItems={renderNavItems(true)} />
        <div className="flex items-center text-center w-24 h-10">
          <Image src={appLogo} alt="App Logo" width={50} height={50} />
        </div>
        {renderUserIcons(21)}
      </div>
    </>
  );
}

export default Navbar;
