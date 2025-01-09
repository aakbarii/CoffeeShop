import FilterBox from "../../Components/Module/FilterBox";
import ShopProductList from "../../Components/Template/ShopProductList";

function Shop() {
  return (
    <div className="bg-gray-200">
      <div className="container flex mx-auto pt-32 p-4">
        <FilterBox />
        <ShopProductList />
      </div>
    </div>
  );
}

export default Shop;
