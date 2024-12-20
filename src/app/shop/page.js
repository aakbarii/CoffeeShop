import React from "react";
import FilterBox from "../components/Module/FilterBox";
import ShopProductList from "../components/template/ShopProductList"

function page() {
  return (
    <div className="bg-[#f8f4fc] ">
      <div className="container flex mx-auto pt-32 p-4">
        <FilterBox />
        <ShopProductList />
      </div>
    </div>
  );
}

export default page;
