import React, { useState } from 'react';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";

function App() {
  const [currentForm, setCurrentForm]= useState('login');

  const toggleForm = (forName) => {
    setCurrentForm(forName);

  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch = {toggleForm} /> : <Register onFormSwitch = {toggleForm}/>
      }
       <Navbar />
       <Routes>
       <Route exact path="/" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
     </Routes>
        
    </div>
    
  )
}

export default App;
