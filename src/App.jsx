import React, { useEffect } from "react";
import Header from "./components/layout/header/Header.jsx"
import Main from "./components/layout/main/Main.jsx"
import SubFooter from "./components/layout/footer/SubFooter.jsx";
import Footer from "./components/layout/footer/sectionLinks/Footer.jsx";
import {Route, Routes, useLocation} from "react-router-dom"
import Login from "./components/layout/header/Login/Login.jsx";


 const App = () => {
  const location = useLocation();
  
  return ( 
    <React.StrictMode>
      <Header /> 
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
      {(location.pathname == "/login")? <Footer/>: <SubFooter/> }
    </React.StrictMode>
  )
}

export default App;