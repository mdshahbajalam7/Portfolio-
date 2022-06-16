import React, { useState } from 'react'
import styled from './data.module.css'
import axios from "axios"

const Login=()=> {
    const [data,setdata]=useState({})
    const handlechange =(e)=>{
        const Inputname=e.target.name
        setdata({
            ...data,
            [Inputname]:e.target.value
       })    
    }
    const handlelogin= async ()=>{
        console.log(data)
        // console.log("hello");
        const {alldata}= await axios.post("http://localhost:8080/auth/login",data);
        console.log(alldata);
    }
  return (
    <div className={styled.maindiv}>
        <h1>Login..</h1>
        <input type="text" className={styled.username} name="username" placeholder='Enter Usernsme' onChange={handlechange} />
        <br />
        <input type="text" name="password" className={styled.username} placeholder='Enter password' onChange={handlechange}  />
        <br />
        <button className={styled.btn} onClick={handlelogin}>login</button>
        
    </div>
  )
}

export default Login