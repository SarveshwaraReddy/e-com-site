import React from "react";
import { useState } from "react";
const Login = () => {
  const [currentState, setcurrentState] = useState("Sign Up");
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-5" style={{color: '#45413E'}}>
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl" style={{color: '#45413E'}}> {currentState} </p>
        <hr className="border-none h-[1.5px] w-8" style={{backgroundColor: '#45413E'}} />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-full px-3 py-2 border"
          placeholder="Name "
          style={{borderColor: '#45413E', color: '#45413E'}}
          required
        />
      )}
      <input
        type="email"
        className="w-full px-3 py-2 border"
        placeholder="Email "
        style={{borderColor: '#45413E', color: '#45413E'}}
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border"
        placeholder="Password "
        style={{borderColor: '#45413E', color: '#45413E'}}
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer hover:text-[#9C9B7A] transition-all duration-600" style={{color: '#45413E'}}>Forgot Your Password ?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setcurrentState("Sign Up")}
            className="cursor-pointer hover:text-[#9C9B7A] transition-all duration-600"
            style={{color: '#45413E'}}
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setcurrentState("Login")}
            className="cursor-pointer hover:text-[#9C9B7A] transition-all duration-600"
            style={{color: '#45413E'}}
          >
            Login Here
          </p>
        )}
      </div>
      <button className="text-white px-12 py-2 mt-5 cursor-pointer font-light transition-all duration-600 hover:opacity-80" style={{backgroundColor: '#9C9B7A'}}>
        {" "}
        {currentState === "Login" ? "Sign In" : "Sign Up"}{" "}
      </button>
    </form>
  );
};

export default Login;
