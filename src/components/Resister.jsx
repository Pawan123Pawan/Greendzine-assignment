import React, { useState } from "react";
import group from "../assets/Group.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Resister() {
  const navigation = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleForm(e) {
    e.preventDefault();
    if (name.length < 4) {
      toast.error("Name must be at least 4 characters");
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
    }
    const user = {
      name: name,
      email: email,
      password: password,
    };
    localStorage.setItem("user", JSON.stringify(user));
    toast.success("User has been successfully resised.");
    setName("");
    setEmail("");
    setPassword("");
    navigation("/login");
    console.log(user);
  }
  return (
    <div className=" flex sm:w-96 md:w-2/5 mx-auto flex-col justify-center items-center mt-28">
      <img src={group} alt="group" className="w-28 h-28 " />

      <div className="mt-10 title text-center">#We are Electric R</div>
      <form
        className=" w-80 flex flex-col px-5  md:w-96 mt-16"
        onSubmit={handleForm}
      >
        <input
          className="myinput focus:outline-none border-none rounded-full"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
          required
        />
        <br />
        <input
          className="myinput focus:outline-none border-none rounded-full"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="E-mail"
          required
        />
        <br />
        <input
          className=" myinput rounded-full focus:outline-none border-none"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit" className="mybutton px-5 rounded-full py-3 mt-8">
          Resister
        </button>
      </form>
      <div className="custom-height"></div>
    </div>
  );
}

export default Resister;
