import React from "react";

export default function index() {
  const menuList = ["Home", "Pricing", "Docs", "Contact"];

  return (
    <div className="w-auto">
      <div className="w-[100px] bg-slate-500">
        <div className=" flex flex-col justify-between items-center mx-8">
          <div className=" w-[100px]">
            <div className="h-[10px] bg-blue-700"></div>
            <div className="text-lg px-[10px] flex items-center">Home</div>
            {/* <div className="h-[10px] bg-blue-700"></div> */}
          </div>

          <div className=" w-[100px]">
            <div className="h-[10px] bg-blue-700"></div>
            <div className="text-lg px-[10px] flex items-center">Pricing</div>
            {/* <div className="h-[10px] bg-blue-700"></div> */}
          </div>

          <div className=" w-[100px]">
            <div className="h-[10px] bg-blue-700"></div>
            <div className="text-lg px-[10px] flex items-center">Docs</div>
            {/* <div className="h-[10px] bg-blue-700"></div> */}
          </div>

          <div className=" w-[100px]">
            <div className="h-[10px] bg-blue-700"></div>
            <div className="text-lg px-[10px] flex items-center">Contact</div>
            <div className="h-[10px] bg-blue-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
