import e from 'express'
import React, { useState } from 'react'

const Feed = () => {
    const [filesdata,setfilesdata]=useState({})
    const handlechange=(e)=>{
        const Inputname = e.target.name;
        setfilesdata({
          ...filesdata,
          [Inputname]: e.target.value,
        });
    }
    const handlesubmit=(e)=>{
        e.preventDefault()

    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input type="text" name="" onChange={handlechange} placeholder='Enter Title' />
            <input type="text" name="" onChange={handlechange} placeholder='Description' />
            <input type="text" name="" onChange={handlechange} placeholder='tags' />
            <input type="file"   />
        </form>
    </div>
  )
}

export default Feed