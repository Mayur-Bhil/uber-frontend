import React, { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {CaptainDataContext} from "../context/captainContext";

const CaptainLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const {captain, setcaptain} = useContext(CaptainDataContext);

    const submitHandler = async(event) => {
        event.preventDefault();
        const captaindata = {
            email: email,
            password: password,
        }

        const responce = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captaindata)  
        if(responce.status === 200){
          const data = responce.data;
            setcaptain(data.captain); 
            localStorage.setItem("token",data.token);
            alert("Captain Logged in Successfully")
            navigate("/captains/home")
        }else{
            alert("Invalid Credentials")
        }
        setEmail("");
        setPassword("");
        
    }
  return (
    <div className="bg-black h-screen text-white flex flex-col justify-between ">
    <img className='h-32 w-40 pt-5 ' src='https://tse3.mm.bing.net/th?id=OIP.HZ9SuGYUlFQCB5dqiPbU2gHaEe&pid=Api&P=0&h=180'/>    
      <form onSubmit={(event)=>{
        event.preventDefault();
        
        submitHandler(event)
      }} className="p-3" action="">
        <h3 className="tetx-xl mb-2 font-medium ">What's Your email</h3>
            <input required value={email} onChange={(event)=>{
              
                setEmail(event.target.value)
            }} className="bg-[#eeeee] rounded-xl px-4 py-2 mb-2 border w-full text-lg placeholder:text-base" type="email"  placeholder="uber@example.com" />
        <h3 className="tetx-xl mb-2  font-medium">Enter Password</h3>
            <input required value={password}
            onChange={(event)=>{
          
                setPassword(event.target.value)
            }} className="bg-[#eeeee] rounded-xl px-4 py-2 border w-full text-lg placeholder:text-base" type="password"  placeholder="********" />
        <button className="bg-white text-black py-3 px-8 text-sm  font-bold rounded-full mt-3 mb-4" type="submit">Login</button>
        <div className="flex justify-center items-center gap-2 mb-4">
          <p className="text-blue-600">
          Don't have an account? <Link className="text-white" to={"/captains/register"}>Register as Captain</Link>
        </p>
      </div>
      </form>
      <div className="text-center bg-green-400 px-3 ml-22 w-50 py-4 rounded-2xl mb-12">

         
          <Link to={"/users/login"}>Login as User</Link>
    
      </div>
    </div>
  );
};

export default CaptainLogin;
