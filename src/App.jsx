import React from "react";
import Header from "./components/layout/header/Header.jsx"
import Main from "./components/layout/main/Main.jsx"
import Footer from "./components/layout/footer/Footer.jsx";


 const App = () => {
  return ( 
    <React.StrictMode>
      <Header /> 
      <Main />
      <Footer />   
    </React.StrictMode>
  )
}

export default App;