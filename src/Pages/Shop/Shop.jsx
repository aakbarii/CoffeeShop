import FilterBox from "../../Components/Module/FilterBox";
import ShopProductList from "../../Components/Template/ShopProductList";

function Shop() {

  return (
    <div className="bg-gray-200">
      <div className="container mx-auto pt-20 p-4 flex flex-col lg:flex-row gap-6">
        <FilterBox />
        <ShopProductList />
      </div>
    </div>
  );
}

export default Shop;
