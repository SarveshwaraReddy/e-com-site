import React, { useContext } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { useState } from "react";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [Method, setMethod] = useState("cod");


  const {navigate} = useContext(ShopContext)
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t" style={{borderColor: '#E8DFD5', color: '#45413E'}}>
      {/* =================================Left Side============================================== */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            className="border py-1.5 px-3.5 w-full transition-all duration-600 focus:border-[#9C9B7A] focus:outline-none"
            style={{borderColor: '#E8DFD5', color: '#45413E'}}
            type="text"
            placeholder="First name"
          />
          <input
            className="border py-1.5 px-3.5 w-full transition-all duration-600 focus:border-[#9C9B7A] focus:outline-none"
            style={{borderColor: '#E8DFD5', color: '#45413E'}}
            type="text"
            placeholder="Last name"
          />
        </div>

        <input
          className="border py-1.5 px-3.5 w-full transition-all duration-600 focus:border-[#9C9B7A] focus:outline-none"
          style={{borderColor: '#E8DFD5', color: '#45413E'}}
          type="email"
          placeholder="Enter email address"
        />
        <input
          className="border py-1.5 px-3.5 w-full transition-all duration-600 focus:border-[#9C9B7A] focus:outline-none"
          style={{borderColor: '#E8DFD5', color: '#45413E'}}
          type="text"
          placeholder="Street line"
        />
        <div className="flex gap-3">
          <input
            className="border py-1.5 px-3.5 w-full transition-all duration-600 focus:border-[#9C9B7A] focus:outline-none"
            style={{borderColor: '#E8DFD5', color: '#45413E'}}
            type="text"
            placeholder="City"
          />
          <input
            className="border py-1.5 px-3.5 w-full transition-all duration-600 focus:border-[#9C9B7A] focus:outline-none"
            style={{borderColor: '#E8DFD5', color: '#45413E'}}
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border py-1.5 px-3.5 w-full transition-all duration-600 focus:border-[#9C9B7A] focus:outline-none"
            style={{borderColor: '#E8DFD5', color: '#45413E'}}
            type="number"
            placeholder="Zip-Code"
          />
          <input
            className="border py-1.5 px-3.5 w-full transition-all duration-600 focus:border-[#9C9B7A] focus:outline-none"
            style={{borderColor: '#E8DFD5', color: '#45413E'}}
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="border py-1.5 px-3.5 w-full transition-all duration-600 focus:border-[#9C9B7A] focus:outline-none"
          style={{borderColor: '#E8DFD5', color: '#45413E'}}
          type="number"
          placeholder="Phone"
        />
      </div>

      {/* --------------Right Side-------------------- */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />

          {/* ============payment method selection============== */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p2 px-3 cursor-pointer transition-all duration-600 hover:bg-[#F5F0E8]"
              style={{borderColor: '#E8DFD5'}}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full transition-all duration-600 ${Method === "stripe" ? "bg-[#9C9B7A]" : ""}`}
                style={{borderColor: '#9C9B7A'}}
              ></p>
              <img src={assets.stripe_logo} className="h-5 mx-4" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p2 px-3 cursor-pointer transition-all duration-600 hover:bg-[#F5F0E8]"
              style={{borderColor: '#E8DFD5'}}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full transition-all duration-600 ${Method === "razorpay" ? "bg-[#9C9B7A]" : ""}`}
                style={{borderColor: '#9C9B7A'}}
              ></p>
              <img src={assets.razorpay_logo} className="h-5 mx-4" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p2 px-3 cursor-pointer transition-all duration-600 hover:bg-[#F5F0E8]"
              style={{borderColor: '#E8DFD5'}}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full transition-all duration-600 ${Method === "cod" ? "bg-[#9C9B7A]" : ""}`}
                style={{borderColor: '#9C9B7A'}}
              ></p>
              <p className="text-sm font-medium py-2 mx-4" style={{color: '#8B8680'}}>
                CASH ON DELIVERY{" "}
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
              <button onClick={()=>navigate('/orders')} className="text-white cursor-pointer text-sm px-16 py-2 transition-all duration-600 hover:opacity-80" style={{backgroundColor: '#9C9B7A'}}> PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
