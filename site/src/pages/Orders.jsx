import React, { useContext } from "react"; // React and hooks
import { ShopContext } from "../context/ShopContext"; // context providing shop data
import Title from "../components/Title"; // reusable title component

const Orders = () => {
  // pull products and currency from global shop context
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t py-16">
      {/* page header */}
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      {/* list a few orders as example (slicing the products array) */}
      <div>
        {products.slice(1, 4).map((item, index) => {
          // each order row
          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div className="flex items-start gap-6 text-sm">
                <img className="w-16 sm:w-20 " src={item.image[0]} alt="" />

                {/* product name */}
                <div>
                  <p className="sm:text-base font-medium"> {item.name} </p>

                  {/* price, quantity, size */}
                  <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                    <p className="text-lg">
                      {currency}
                      {item.price * 4}
                    </p>
                    <p>Quantity : 1</p>
                    <p>Size : M</p>
                  </div>

                  {/* static order date */}
                  <p className="mt-2">
                    Date: <span className="text-gray-400">27 , Jan , 2026</span>
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-between">
                <div className="flex items-center gap-2">
                  <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                  <p className="text-sm md:text-base">Ready To Ship</p>

                </div>
                <button className="border px-4 py-2 text-sm rounded ">Track Order</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
