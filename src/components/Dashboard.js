import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [dta,setDta] = useState({})
  useEffect(()=>{
    async function fetchData ()
    {
      try{
        const response = await axios.get("http://localhost:8000/data")
        console.log(response.data)
      }
      catch(err){
        console.log("error",err)
      }
     
    }
    fetchData()
  },[])
  return (
    <div>
        user profile
        <button>logout</button>
    </div>
  )
}

export default Dashboard