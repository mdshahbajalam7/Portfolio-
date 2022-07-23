import React, { useState } from "react";
import styled from "./data.module.css";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [fromall, setfromall] = useState({});
  const navigate =useNavigate()
  const handlechange = (e) => {
    const Inputname = e.target.name;
    setfromall({
      ...fromall,
      [Inputname]: e.target.value,
    });
  };
  const handlelogin = async () => {
    console.log(fromall);
    // console.log("hello");
   try {
    const { data } = await axios.post(
      "http://localhost:8080/auth/login",
      fromall
    );
    const  user =data[0]
    localStorage.setItem("userid",user["-id"])
    navigate("/feed")
    console.log(data[0]);
    // if()
   } catch (error) {
    // console.log(error.res)
    if(error.respones.status===401){
      alert("invalid credentails")
    }
    
   }
  };
  return (
    <div className={styled.maindiv}>
      <h1>Login..</h1>
      <input
        type="text"
        className={styled.username}
        name="username"
        placeholder="Enter Usernsme"
        onChange={handlechange}
        required
      />
      <br />
      <input
        type="text"
        name="password"
        className={styled.username}
        placeholder="Enter password"
        onChange={handlechange}
        required
      />
      <br />
      <button className={styled.btn} onClick={handlelogin}>
        login
      </button>
    </div>
  );
};

export default Login;
