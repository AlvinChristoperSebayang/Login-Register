import React from 'react';
import background from './bg_regis.jpg';
import { Link } from 'react-router-dom';
// http://localhost:8080/user/login
function Login() {
  const loginClick = async(e) => {
    e.preventDefault();
    let u = e.target.username.value;
    let p = e.target.password.value;
    let cek_login = await fetch('http://localhost:8080/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        
        username: u,
        password: p,
      })
    })
    .then(res => res.json())
    .then(hasil => {return hasil});

  if(cek_login.username === undefined)
    alert('Login gagal. Username atau password salah!');
  else
    alert('Login Sukses, username : '+cek_login.username);
  }

  return (
    <form onSubmit={loginClick}>
      <img src={background} alt="Background" className="bg-cover bg-no-repeat bg-center fixed w-full h-full" />
      <div className='flex flex-col w-[25rem] h-[30rem] gap-4 py-3 px-6 my-32 fixed left-1/2 -translate-x-1/2 bg-[#5a162e]'>
        <h1 className='text-white text-center font-bold text-4xl pb-10'> Welcome</h1>
        <input name='username' className='w-full h-10 rounded-xl text-center' type="text" placeholder='Username'></input>
        <input name='password' className='w-full h-10 rounded-xl text-center' type="password" placeholder='Password'></input>
        <div>
          <a className='float-right text-white hover:text-cyan-300 hover:underline' href='#'> Lupa Password ?</a>
        </div>
        <button type='submit' className='text-white text-sm font-bold py-2 px-4 h-10 mt-5 bg-red-500 hover:bg-[#ff3b07] rounded-3xl'>Login</button>
        <h1 className='text-white text-sm text-center mt-5'> Belum punya akun ? <a className='text-cyan-300 underline hover:text-cyan-500'><Link to="/daftar">
        Register
        </Link>
        </a></h1>
      </div>

    </form>

  );
}

export default Login;