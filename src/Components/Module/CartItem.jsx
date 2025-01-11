function CartItem() {
  return (
    <div className="border-b border-gray-200 py-6 bg-white rounded-lg shadow-md p-4">
      {/* عنوان محصول */}
      <div className="flex items-center justify-between mb-4">
      <img
          src="https://halochin.ir/coffee-store/wp-content/uploads/2023/11/product-6-min.png"
          alt="محصول"
          className="w-14 h-14 object-cover rounded"
          width={56}
          height={56}
        />
        <h3 className="text-gray-800 font-semibold text-base">
          پودر قهوه ترک ویژه عربیکا 70 درصد مقدار 450 گرم
        </h3>
        <button
          className="text-red-500 text-xl hover:text-red-600 transition-transform transform hover:scale-110"
          aria-label="حذف"
        >
          &times;
        </button>
      </div>

      {/* اطلاعات محصول */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {/* قیمت */}
        <div className="flex flex-col items-start md:items-center">
          <span className="text-sm text-gray-500">قیمت:</span>
          <span className="text-green-700 font-bold text-base">
            ۱۴۰,۰۰۰ تومان
          </span>
        </div>

        {/* تعداد */}
        <div className="flex flex-col items-start md:items-center">
          <span className="text-sm text-gray-500">تعداد:</span>
          <input
            type="number"
            defaultValue={1}
            min={1}
            className="w-16 text-center border border-gray-300 rounded-md focus:ring-green-400 focus:border-green-400"
          />
        </div>

        {/* جمع جزء */}
        <div className="flex flex-col items-start md:items-center">
          <span className="text-sm text-gray-500">جمع جزء:</span>
          <span className="text-green-700 font-bold text-base">
            ۱۴۰,۰۰۰ تومان
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
