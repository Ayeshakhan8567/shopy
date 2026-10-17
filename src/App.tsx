import Navbar from "./components/Navbar.tsx";
import Sidebar from "./components/Sidebar.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./Pages/Home.tsx";
import ReadyToWear from "./Pages/ReadyToWear.tsx";
import Newin from "./Pages/Newin.tsx";
import Unstitch from "./Pages/Unstitch.tsx";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
       <Navbar />
       <Home/>
       <Sidebar/>
         <Routes>

        <Route path="/" 
        element={<Home/>} />

        <Route
          path="/ready-to-wear"
          element={<ReadyToWear />}
        />
        
        <Route
          path="/new-in"
          element={<Newin />}
        />
        
        <Route
          path="/unstitch"
          element={<Unstitch />}
        />


    </Routes>
       <Footer/>

    </>
     
  )
}

export default App
