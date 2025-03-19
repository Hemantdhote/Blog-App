import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  
  return (
    <div className="p-6">
      <h2 className="text-xl">Login</h2>
      <input className="border p-2 w-full" type="email" placeholder="Email"  />
      <input className="border p-2 w-full mt-2" type="password" placeholder="Password" />
      <button className="bg-blue-500 text-white px-4 py-2 mt-4" >Login</button>
    </div>
  );
}

export default Login;