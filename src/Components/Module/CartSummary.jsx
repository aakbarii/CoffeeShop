const CartSummary = () => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        {/* عنوان */}
        <h2 className="text-lg font-bold text-right mb-4">جمع کل سبد خرید</h2>
  
        {/* جمع جزء */}
        <div className="flex justify-between items-center text-gray-700 mb-2">
          <span className="text-sm">جمع جزء:</span>
          <span className="text-sm font-semibold">۲۸۰,۰۰۰ تومان</span>
        </div>
  
        {/* خط جداکننده */}
        <hr className="my-2 border-gray-300" />
  
        {/* جمع کل */}
        <div className="flex justify-between items-center text-gray-700 mb-6">
          <span className="text-sm">مجموع:</span>
          <span className="text-sm font-semibold">۲۸۰,۰۰۰ تومان</span>
        </div>
  
        {/* دکمه تسویه حساب */}
        <button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white text-sm py-2 rounded-md transition-all">
          ادامه جهت تسویه حساب
        </button>
      </div>
    );
  };
  
  export default CartSummary;
  