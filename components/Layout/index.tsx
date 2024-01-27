import React from "react";
import { useRouter } from "next/router";

export default function Layout() {
  const router = useRouter();
  const menuList = ["Home", "Pricing", "Docs", "Contact"];

  return (
    <div className="w-[90]">
      <div className="w-[85px] bg-slate-500 border-[2px] border-black">
        <div className=" flex flex-col justify-between items-center mx-8 ">
          <div className=" w-[85px]">
            <div className="h-[10px] bg-blue-700 border-b-[2px] border-x-[2px] border-black"></div>
            <div className="text-lg px-[10px] flex items-center cursor-pointer">
              Home
            </div>
          </div>
          <div className=" w-[85px]">
            <div className="h-[10px] bg-blue-700 border-[2px] border-black"></div>
            <div
              className="text-lg px-[10px] flex items-center cursor-pointer"
              onClick={() => router.push("/Pricing")}
            >
              Pricing
            </div>
          </div>

          <div className=" w-[85px]">
            <div className="h-[10px] bg-blue-700 border-[2px] border-black"></div>
            <div
              className="text-lg px-[10px] flex items-center cursor-pointer"
              onClick={() => router.push("/Docs")}
            >
              Docs
            </div>
          </div>

          <div className=" w-[85px]">
            <div className="h-[10px] bg-blue-700 border-[2px] border-black"></div>
            <div
              className="text-lg px-[10px] flex items-center cursor-pointer"
              onClick={() => router.push("/Contacts")}
            >
              Contact
            </div>
            <div className="h-[10px] bg-blue-700 border-t-[2px] border-x-[2px] border-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
