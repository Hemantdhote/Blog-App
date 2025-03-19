import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

  const [user, setUser] = useState({
    
  });

  const submitHandler=(e)=>{
    e.preventDefault();


  }

  return (
    <div>
      
      <form onSubmit={submitHandler}>
        
        <div className='flex flex-col items-center gap-4 px-3 py-5 h-screen w-full justify-center '>
        <h1 className='font-bold text-xl'>Register User</h1>
        <input className='px-6 py-3 bg-neutral-200 rounded-md outline-none' type="text" placeholder='Enter the name' />
        <input className='px-6 py-3 bg-neutral-200 rounded-md outline-none' type="text" placeholder='Enter the email' />
        <input className='px-6 py-3 bg-neutral-200 rounded-md outline-none' type="password" placeholder='Enter the password' />
        <input className='px-6 py-3 bg-neutral-200 rounded-md outline-none' type="text" placeholder='Enter the contact number' />
        <button className='px-21 py-2 bg-green-500 rounded-md text-white mt-1'>Register</button>
         <h4>if you have already account ? <Link className='text-blue-900'>please login</Link> </h4> 
        </div>
      </form>
      
    </div>
  )
}

export default Register