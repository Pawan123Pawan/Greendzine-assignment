import React, { useState } from "react";
import user from "../assets/Group-user.png";
import moptro from "../assets/moptro-logo.png";
import { FaSearch } from "react-icons/fa";
import Empoyee from "./Empoyee";
import ButtomNav from "./ButtomNav";
const data = [
  {
    emp: "1",
    name: "John",
    dob: "16-11-2015",
    role: "Web Developer",
  },
  {
    emp: "2",
    name: "Jane",
    dob: "20-03-1990",
    role: "UX Designer",
  },
  {
    emp: "3",
    name: "Alice",
    dob: "05-09-1985",
    role: "Software Engineer",
  },
  {
    emp: "4",
    name: "Bob",
    dob: "12-07-1998",
    role: "Data Analyst",
  },
];
function UserInformation() {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState(data);

  function serchName(e) {
    setInput(e.target.value);
    const filter = data.filter((user) =>
      user.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setUsers(filter);
  }

  return (
    <>
      <div className="flex sm:w-96 md:w-2/5 mx-auto flex-col justify-center items-center  productivity px-5 ">
        <div className="w-full  mt-6">
          <img src={user} alt="user" className="w-18 h-18 float-right" />
        </div>
        <div className=" relative mt-2 mb-6">
          <img src={moptro} alt="" />
          <div className=" absolute w-10 h-10  bg-[#1b1c1c] text-mytext flex justify-center items-center number rounded-full   ">
            4
          </div>
        </div>
        <div className="w-4/5 flex items-center rounded-full py-3 px-5  bg-[#131615] justify-between text-opacity-85">
          <input
            className=" bg-transparent focus:outline-none border-none rounded-full text-center"
            name="name"
            value={input}
            onChange={serchName}
            type="email"
            placeholder="Seach with name"
          />
          <FaSearch />
        </div>

        <div className="w-full usercard mt-3 pb-24">
          {users?.map((user) => (
            <Empoyee user={user} />
          ))}
        </div>
      </div>
      <div className=" over">
        <ButtomNav />
      </div>
    </>
  );
}

export default UserInformation;
