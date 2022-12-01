import React,{useState} from 'react';
import background from './component/bg_regis.jpg';
import { BrowserRouter as Router, Switch,Route, Routes } from 'react-router-dom';
import Login from './component/login';
import Daftar from './component/daftar';
function App() {
  return (
    <div className="App">
     <Login />
     <Routes>
      {/* <Login /> */}
     
     <Route path="/" element={<Login />} />
       <Route path='/daftar' element={<Daftar />} />
       
     </Routes>
    </div>
  );

}

export default App;