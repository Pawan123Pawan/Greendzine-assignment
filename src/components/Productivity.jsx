import React from "react";
import user from "../assets/Group-user.png";
import moptro from "../assets/moptro-logo.png";
import ButtomNav from "./ButtomNav";
function Productivity() {
  const data = [
    {
      title: "Productivity on Monday",
      per: "4",
    },
    {
      title: "Productivity on Tuesday",
      per: "92",
    },
    {
      title: "Productivity on Wednesday",
      per: "75",
    },
    {
      title: "Productivity on Thursday",
      per: "93",
    },
    {
      title: "Productivity on Friday",
      per: "89",
    },
    {
      title: "Productivity on Saturday",
      per: "98",
    },
  ];
  return (
    <>
      <div className="flex sm:w-96 md:w-2/5 mx-auto flex-col justify-center items-center  productivity px-5">
        <div className="w-full  mt-6">
          <img src={user} alt="user" className="w-18 h-18 float-right" />
        </div>
        <div className=" relative mt-2 mb-10">
          <img src={moptro} alt="" />
          <div className=" absolute w-10 h-10  bg-[#1b1c1c] text-mytext flex justify-center items-center number rounded-full   ">
            4
          </div>
        </div>
        <div className="overflow-x-hidden w-full bg-[#5E5E5E82] rounded-3xl pb-16 myshadow  myheight">
          <div className="bg-[#1A2C2C99] text-1xl px-5 py-3 rounded-full text-[#FFFFFFB3]  ">
            Employee Productivity Dashboard
          </div>
          <div className="mt-10 ">
            {data?.map((data) => (
              <ProductivityContent data={data} />
            ))}
          </div>
        </div>
      </div>
      <ButtomNav/>
    </>
  );
}

export default Productivity;

function ProductivityContent({ data }) {
  return (
    <div className="mt-6 px-5">
      <div className="flex justify-between mb-1">
        <div className=" text-sm">{data.title}</div>
        <div className="text-mygreen opacity-100">{data.per}%</div>
      </div>
      <div
        class="bg-[#36A54680] line h-3 rounded-md"
        style={{ width: `${data.per}%` }}
      ></div>
    </div>
  );
}
