import cart from "../../assets/icons/cart.svg";

function SpecialCard({ product }) {
  return (
    <div className="">
      <div className="w-[304px] h-[347px] mx-auto rounded-3xl mt-12 bg-gray-100 relative">
        <div className="absolute top-5 right-5">
          {product.discount > 0 && (
            <span className="p-3 py-2 bg-white text-emerald-700 text-sm font-medium rounded-xl">
              % {product.discount}
            </span>
          )}
        </div>
        <div className="flex justify-center items-center">
          <img
            className="w-52"
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
          />
        </div>
        <div className="px-5 pb-5">
          <h5 className="text-base text-center -px-5 overflow-hidden text-wrap text-black">
            {product.name}
          </h5>
          <div className="flex items-center justify-between mt-3">
            <span className="text-gray-900">
              {product.discount > 0 && (
                <span className="text-xs text-emerald-600">
                  {` ${product.discount} `}% تخفیف
                </span>
              )}
              <div className="text-base font-thin">
                {product.price}
                <span className="text-xs pr-1">تومان</span>
              </div>
            </span>
            <button className="flex items-center justify-center mt-5 mb-2 gap-x-1 text-white bg-emerald-700 rounded-2xl text-xs px-2 py-2">
              <span className="text-sm">افزودن به</span>
              <img src={cart} alt="Add to cart" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialCard;
