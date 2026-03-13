import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);


  useEffect(() => {
    const tempData = [];
    for (let items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div
      className="border-t pt-14"
      style={{ borderColor: "#E8DFD5", color: "#45413E" }}
    >
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      {cartData.map((item, index) => {
        const productData = products.find(
          (product) => product._id === item._id,
        );
        if (!productData) {
          // product might have been removed or data not loaded yet
          return null;
        }
        return (
          <div
            key={index}
            className="py-4 border-t border-b grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 transition-all duration-600"
            style={{ borderColor: "#E8DFD5", color: "#45413E" }}
          >
            <div className="flex items-start gap-6">
              <img
                className="w-16 sm:w-20"
                src={productData.image[0]}
                alt={productData.name}
              />
              <div>
                <p className="text-xs sm:text-lg font-medium">
                  {productData.name}
                </p>
                <div className="flex items-center gap-5 mt-2">
                  <p>
                    {currency}
                    {productData.price * 4}
                  </p>
                  <p
                    className="px-2 sm:px-3 sm:py-1 border"
                    style={{ borderColor: "#E8DFD5", color: "#45413E" }}
                  >
                    {item.size}
                  </p>
                </div>
              </div>
            </div>
            <input
              onChange={(e) =>
                e.target.value === ""
                  ? null
                  : updateQuantity(item._id, item.size, Number(e.target.value))
              }
              className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 transition-all duration-600"
              style={{ borderColor: "#E8DFD5", color: "#45413E" }}
              type="number"
              min={1}
              value={item.quantity}
            />
            <img
              onClick={() => updateQuantity(item._id, item.size, 0)}
              className="w-4 mr-4 sm:w-5 cursor-pointer transition-all duration-600 hover:opacity-60"
              src={assets.bin_icon}
              alt=""
            />
          </div>
        );
      })}
      <div className="flex justify-between  my-20">
        <div>
          <button
            onClick={() => navigate("/collection")}
            className="px-8 py-3 cursor-pointer text-sm text-white transition-all duration-600 hover:opacity-80"
            style={{ backgroundColor: "#9C9B7A" }}
          >
            <i class="ri-add-large-fill"></i> Add More
          </button>
        </div>
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="px-8 py-3 mt-8 cursor-pointer text-sm text-white transition-all duration-600 hover:opacity-80"
              style={{ backgroundColor: "#9C9B7A" }}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
