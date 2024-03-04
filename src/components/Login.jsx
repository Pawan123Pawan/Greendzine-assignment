import React, { useState } from "react";
import group from "../assets/Group.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleForm(e) {
    e.preventDefault();
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
    }
    const data = localStorage.getItem("user");
    const user = JSON.parse(data)
    if(user.password === password && email === user.email) {
        toast.success("User has been successfully logged.");
        setEmail("")
        setPassword("")
        navigation("/home")
    }
  }
  return (
    <div className=" flex sm:w-96 md:w-2/5 mx-auto flex-col justify-center items-center mt-28">
      <img src={group} alt="group" />
      <div className="mt-10 title">#We are Electric</div>
      <form
        className=" w-80 flex flex-col px-5 mt-16 md:w-96"
        onSubmit={handleForm}
      >
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
        <button type="submit" className="mybutton px-5 rounded-full py-3 mt-12">
          Login
        </button>
        <div
          className=" text-center text-mytext text-12 mt-6 cursor-pointer hover:opacity-70"
          onClick={() => navigation("/forgot-password")}
        >
          Forgat Password ?
        </div>
      </form>
      <div className="custom-height"></div>
    </div>
  );
}

export default Login;
