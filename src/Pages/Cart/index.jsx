import CartItem from "../../Components/Module/CartItem";
import React from "react";
import CartSummary from "../../Components/Module/CartSummary";

function Page() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto pt-32">
        {/* چیدمان سبد خرید */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* لیست محصولات */}
          <div className="lg:col-span-2 bg-white p-4 rounded-lg">
            <CartItem />
          </div>

          {/* خلاصه خرید */}
          <div className="lg:col-span-1 bg-white p-4 rounded-lg">
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
