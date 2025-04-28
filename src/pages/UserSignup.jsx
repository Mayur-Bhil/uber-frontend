import React, { useContext } from "react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

import {UserDataContext} from "../context/userContext";

const UserSignup = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const {user,setUser} = useContext(UserDataContext);

  const submitHandler = async(e) => {
    e.preventDefault();
    const newUSer ={
      fullname:{
          firstname: firstname,
          lastname: lastname,
      },  
      email: email,
      password: password,
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/signup`,newUSer); 
    if(response.status === 201){
      const data = response.data;

      setUser(data.user);
      localStorage.setItem("token",data.token);

      navigate("/home")
      alert("User created successfully")
     } else{
      alert("User already exists")
    }
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };
  return (
    <div className="bg-black h-screen text-white flex flex-col justify-between ">
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
             
                setFirstName(e.target.value)

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
               
                setLastName(e.target.value)

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
        <button
          className="bg-white text-black py-3 px-8 text-sm  font-bold rounded-full mt-3 mb-4"
          type="submit"
        >
          Sign up
        </button>
         <div className="flex justify-center items-center gap-2 mb-4">
                    <p className="text-blue-600">
                     alerady have an account? <Link className="text-white" to={"/users/login"}>login</Link>
                    </p>
     </div>
      </form>
      <div className="text-center px-3 ml-22 w-50 py-4 rounded-2xl mb-8">
       <p className="text-white text-[7px]">By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.</p>  
      </div>
    </div>
  );
};

export default UserSignup;
