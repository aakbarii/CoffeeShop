// Utilities
import { useState } from "react";
import { Drawer } from "antd";
import { NavLink } from "react-router-dom";

// Images
import { appLogo } from "../../assets/image";

// Icons
import { FaBars, FaRegUser } from "react-icons/fa6";
import { CiShoppingBasket, CiSearch } from "react-icons/ci";
import { BiHomeAlt2 } from "react-icons/bi";
import {
  homeIcon,
  shopIcon,
  coffeeIcon,
  articleIcon,
  infoIcon,
  phoneIcon,
} from "../../assets/icons";
import { userIcon, cartIcon, searchIcon, menuIcon } from "../../assets/icons";

const navItems = [
  { name: "صفحه اصلی", icon: homeIcon, path: "/" },
  { name: "فروشگاه", icon: shopIcon, path: "/shop" },
  { name: "سفارش قهوه", icon: coffeeIcon, path: "/costom" },
  { name: "وبلاگ", icon: articleIcon, path: "/blog" },
  { name: "درباره ما", icon: infoIcon, path: "/about-us" },
  { name: "تماس با ما", icon: phoneIcon, path: "/call-to-us" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const renderNavItems = () => (
    <ul
      className={
        "flex lg:gap-x-9 gap-x-5 text-gray-300 tracking-tighter child:leading-[56px] font-dana"
      }
    >
      {navItems.map((item, index) => (
        <li key={index} className="flex items-center gap-x-2">
          <img src={item.icon} alt={item.name} width={20} height={20} />
          <NavLink className="text-black" to={item.path}>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  const renderUserIcons = (size = 22) => (
    <div dir="rtl" className="text-white flex gap-x-2 items-center">
      <span
        style={{ backgroundColor: "#331603" }}
        className="rounded-full flex items-center justify-center w-9 h-9"
      >
        <FaRegUser size={size} />
      </span>
      <span
        style={{ backgroundColor: "#331603" }}
        className="bg-zinc-900 rounded-full flex items-center justify-center w-9 h-9"
      >
        <CiShoppingBasket size={size} />
      </span>
    </div>
  );

  return (
    <>
      {/* Desktop Navbar */}
      <header
        style={{ backgroundColor: "#efeff1" }}
        className="container m-auto absolute top-5 right-0 left-0 md:flex lg:flex hidden items-center md:w-[85%] w-[90%] h-20 mx-auto lg:px-10 px-5 rounded-4xl"
      >
        <div className="flex w-full items-center justify-between">
          <nav className="flex lg:gap-x-9 gap-x-5 items-center h-14 delay-75">
            <div className="shrink-0">
              <img src={appLogo} alt="App Logo" />
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
              <CiSearch size={24} />
            </span>
          </div>
          {renderUserIcons()}
        </div>
      </header>

      {/* Mobile Navbar */}
      <div
        style={{ backgroundColor: "#efeff1" }}
        className="flex md:hidden items-center justify-between bg-white m-auto absolute top-5 right-0 left-0 lg:w-[85%] w-[90%] h-20 mx-auto lg:px-10 px-5 rounded-4xl"
      >
        <div
          onClick={() => setOpen(true)}
          className="text-zinc-900 dark:text-white"
        >
          <FaBars size={26} />
        </div>
        <Drawer
          className="bg-white text-zinc-700"
          title={
            <div className="flex gap-x-2 mr-5">
              <img src={appLogo} alt="Logo" />
              <h2 className="text-center content-center">
                فروشگاه آنلاین قهوه
              </h2>
            </div>
          }
          onClose={() => setOpen(false)}
          open={open}
        >
          <div dir="rtl" className="flex items-center">
            <input
              style={{ backgroundColor: "#efeff1" }}
              type="text"
              placeholder="جستجو..."
              className="rounded-r-3xl p-2 px-8"
            />
            <span
              style={{ backgroundColor: "#efeff1" }}
              className="rounded-l-3xl bg-white p-2"
            >
              <CiSearch size={21} />
            </span>
          </div>
          {renderNavItems(true)}
        </Drawer>
        <div className="flex items-center text-center content-center w-[100px] h-10 mr-16">
          <img src={appLogo} alt="App Logo" />
        </div>
        {renderUserIcons(21)}
      </div>
    </>
  );
}

export default Navbar;
