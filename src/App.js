import React, { useState } from "react";
import axios from "axios";
import Weather from "./Components/Weather";
const App = () => {

  const[data,setData] = useState({});
  const[location,setLocation] = useState('');

  const API_KEY = "fd944a073b875fb4764213153effd49b";
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
 

  function searchLocation(event){
     if(event.key ==="Enter"){
       axios.get(url)
       .then((res)=>{
        console.log(res.data)
        setData(res.data)
        console.log(res.data)
       })
       .catch((err)=>{
        console.log(err);
       })
       setLocation("");
     }
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-blue-100">
    <div className="text-center p-4 w-full">
      <input
        type="text"
        className="py-3 px-6 w-full max-w-md text-lg rounded-3xl border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white shadow-md"
        placeholder="Enter Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={searchLocation}
      />
    </div>
    <Weather weatherData={data} />
  </div>
);
};

export default App;
