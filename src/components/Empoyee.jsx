import React from "react";


function Empoyee({user}) {
  
  return (
    <div className={`w-full flex ${user.emp%2===0 ? 'justify-end':"" }`}>
      <div className="overflow-x-hiddenbg-[#131816] rounded-3xl py-3 px-5 mt-8  myshadow text-12 my-width">
        <div className="flex">
          <div className="flex w-1/4 items-center justify-between">
            <div>EMP ID</div>
            <div>:</div>
          </div>
          <div className="ml-5">{user.emp}</div>
        </div>
        <div className="flex my-5">
          <div className="flex w-1/4 items-center justify-between">
            <div>Name</div>
            <div>:</div>
          </div>
          <div className="ml-5">{user.name}</div>
        </div>
        <div className="flex">
          <div className="flex w-1/4 items-center justify-between">
            <div>DOB</div>
            <div>:</div>
          </div>
          <div className="ml-5 text-orange-400">{user.dob}</div>
        </div>
        <div className="flex mt-5">
          <div className="flex w-1/4 items-center justify-between">
            <div>Role</div>
            <div>:</div>
          </div>
          <div className="ml-5 text-mytext">{user.role}</div>
        </div>
      </div>
    </div>
  );
}

export default Empoyee;
