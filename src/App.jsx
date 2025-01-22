// src/App.js
import React from "react";
//import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Admin from "./components/Admin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./components/User";
import Property from "./components/Property";
import Access from "./components/Access"
import AddField from "./components/AddField";

const App = () => {
  return (
    <Router>
      <div className="w-full h-screen flex">
        <Sidebar />
        <div className="flex flex-col w-[80%]">
          <Header />

          <div className="mt-12">
          <Routes>
            <Route path="/" element={<Admin />} />
            <Route path="/user" element={<User/>} />
            <Route path="/dashboard" element={<Admin/>} />
            <Route path="/property" element={<Property/>}/>
            <Route path="/settings/access" element={<Access/>}/>
            <Route path="/settings/addfield" element={<AddField/>}/>
            <Route path="/settings" />
            {/* Add other routes as needed */}
          </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
