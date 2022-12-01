import React,{useState} from 'react';
import background from './bg_regis.jpg';
import { Link } from 'react-router-dom';

function Daftar() {
    const[username,setusername]=useState('')
    const[nama,setnama]=useState('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const[repassword,setrepass]=useState('')
    
    const handleClick=(e)=>{
      e.preventDefault()
      const user={username,nama,email,password,repassword}
      console.log(user)
      fetch("http://localhost:8080/user/register",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)
  
    }).then(()=>{
      alert('Data berhasil ditambahkan');
      console.log("New User added")
    })
  }
  return (
    <form onSubmit={handleClick}>
     <img className='bg-cover bg-no-repeat bg-center fixed w-full h-full' src={background} alt="Background"></img> 
    <div className="flex flex-col text-center gap-4 max-sm:gap-2 bg-[#5a162e] p-10 max-sm:p-5 w-[25rem] max-sm:w-[18rem] h-[30rem] max-sm:h-[23rem] rounded-lg fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <h1 className='font-bold text-4xl max-sm:text-2xl pb-10 max-sm:pb-5 text-white'>Register!</h1> 
        <input className='bg-white h-10 rounded-xl outline-0 text-center' type="text" name="username" id="1" placeholder="Masukkan Username"  value={username}
        onChange={(e)=>setusername(e.target.value)}></input>
       
        <input className='bg-white h-10 rounded-xl outline-0 text-center' type="text" name="name" id="2" placeholder="Masukkan Nama" value={nama}
        onChange={(e)=>setnama(e.target.value)}></input>
        
        <input className='bg-white h-10 rounded-xl outline-0 text-center' type="text" name="email" id="3" placeholder="Masukkan Email"  value={email}
        onChange={(e)=>setemail(e.target.value)} ></input>
              
        <input className='bg-white h-10 rounded-xl outline-0 text-center' type="password" name="password" id="4" placeholder="Masukkan Password" value={password}
        onChange={(e)=>setpassword(e.target.value)}></input>
        
        <input className='bg-white h-10 rounded-xl outline-0 text-center' type="password" name="repassword" id="5" placeholder="Confirm Password"  value={repassword}
        onChange={(e)=>setrepass(e.target.value)}></input>
       
        <button type='submit' className='bg-[#ee4238] rounded-full font-bold text-white h-10 mt-5 hover:bg-[#f47e4c]'> Daftar</button>
        <p>Sudah Memiliki Akun?<a className='underline underline-offside-2 text-white cursor-pointer' >
        <Link to="/login">
          Login Disini
          </Link>
          </a></p>
    </div>
    </form>


  );

}

export default Daftar;