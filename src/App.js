import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import Home from "./views/Home";
import Error from "./views/Error";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          {/* public routes */}
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="*" exact element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
