import React from 'react'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import  {CaptainDataContext}  from '../context/captainContext.jsx';

const CaptainSignup = () => {

    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState({});
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState(''); 
    const [vehicleCapacity, setVehicleCapacity] = useState(''); 
    const [vehicleType, setVehicleType] = useState(''); 

   const {captain,setcaptain} = useContext(CaptainDataContext);
  
    const submitHandler = (e) => {
      e.preventDefault();
      const captainData = {
        fullname: {
          firstname: firstname,
          lastname: lastname,
        },
        email: email,
        password: password,
        vehicle: {
          color: vehicleColor,
          plate: vehiclePlate,
          capacity: vehicleCapacity,
          vehicleType: vehicleType,
        },
      };
  
      console.log(captainData);
      
    setEmail('');
    setPassword('');
    setfirstname('');
    setlastname('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
    };

  return (
    <div className="bg-black overflow-x-auto h-screen text-white flex flex-col justify-between ">
    <img
      className="h-11 w-20 pt-5 ml-5"
      src="https://imgs.search.brave.com/xSouFCjJwA-xBPlyrPOhUefqGqtl9NwZlH7Th1Q7KaU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jb21w/YW5pZXNsb2dvLmNv/bS9pbWcvb3JpZy9V/QkVSLkQtZjIzZDRi/MWMucG5nP3Q9MTcy/MDI0NDQ5NA"
    />
    <form
      onSubmit={(e) => {
        submitHandler(e);
      }}
      className="p-3"
      action=""
    >
      <h3 className="tetx-xl mb-2 text-base ">What's Your Name ?</h3>
      <div className="flex justify-between gap-4 mb-2">
        <input
          required
          value={firstname}
          onChange={(e)=>{
           
              setfirstname(e.target.value)

          }}
          className="bg-[#eeeee] w-1/2 rounded-xl px-4 py-2 mb-2 border  text-lg placeholder:text-base"
          type="text"
          placeholder="firstname"
        />
        <input
          required
          value={lastname}
          className="bg-[#eeeee] rounded-xl w-1/2 px-4 py-2 mb-2 border  text-lg placeholder:text-base"
          type="text"
          onChange={(e)=>{
             
              setlastname(e.target.value)

          }}
          placeholder="lastname"
        />
      </div>
      <h3 className="tetx-xl mb-2 text-base ">What's Your email</h3>
      <input
        required
        value={email}
        onChange={(e)=>{
       
          setEmail(e.target.value)

      }}
        className="bg-[#eeeee] rounded-xl px-4 py-2 mb-2 border w-full text-lg placeholder:text-base"
        type="email"
        placeholder="uber@example.com"
      />

      <h3 className="tetx-xl mb-2  text-base">Enter Password</h3>
      <input
        required
        onChange={(e)=>{
         
          setPassword(e.target.value)
        }}
        value={password}
        className="bg-[#eeeee] rounded-xl px-4 py-2 border w-full text-lg placeholder:text-base"
        type="password"
        placeholder="********"
      />
     <h3 className="tetx-xl mb-2 text-base ">Vehicle Details</h3>
        <input
          required
          value={vehicleColor}
          onChange={(e) => {
            setVehicleColor(e.target.value);
          }}
          className="bg-[#eeeee] rounded-xl px-4 py-2 mb-2 border w-full text-lg placeholder:text-base"
          type="text"
          placeholder="Vehicle Color"
        />
        <input
          required
          value={vehiclePlate}
          onChange={(e) => {
            setVehiclePlate(e.target.value);
          }}
          className="bg-[#eeeee] rounded-xl px-4 py-2 mb-2 border w-full text-lg placeholder:text-base"
          type="text"
          placeholder="Vehicle Plate"
        />
        <input
          required
          value={vehicleCapacity}
          onChange={(e) => {
            setVehicleCapacity(e.target.value);
          }}
          className="bg-[#eeeee] rounded-xl px-4 py-2 mb-2 border w-full text-lg placeholder:text-base"
          type="number"
          placeholder="Vehicle Capacity"
        />
        <select
          required
          value={vehicleType}
          onChange={(e) => {
            setVehicleType(e.target.value);
          }}
          className="bg-[#eeeee] rounded-xl px-4 py-2 mb-2 border w-full text-lg placeholder:text-base"
        >
          <option className='text-purple-950' value="" disabled>
            Select Vehicle Type
          </option>
          <option className='text-purple-950' value="car">Car</option>
          <option className='text-purple-950' value="motorcycle">Motorcycle</option>
          <option className='text-purple-950' value="auto">Auto</option>
        </select>

        <button
          className="bg-white  text-black py-3 px-8 text-sm  font-bold rounded-full mt-3 mb-4"
          type="submit"
        >
          Create Captain Account
        </button>
       <div className="flex justify-center items-center gap-2 mb-4">
                  <p className="text-blue-600">
                    Don't have an account? <Link className="text-white" to={"/users/login"}>login</Link>
                  </p>
   </div>
    </form>
    <div className="text-center px-3 ml-22 w-50 py-4 rounded-2xl mb-8">
     <p className="text-white text-[7px]">By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.</p>  
    </div>
  </div>
  )
}

export default CaptainSignup
