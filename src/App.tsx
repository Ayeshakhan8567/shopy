import Navbar from "./components/Navbar.tsx";
import Herosection from "./components/Herosection.tsx";
import NewinSection from "./components/NewinSection.tsx";
import ThirdSection from "./components/ThirdSection.tsx";
import FourthSection from "./components/FourthSection.tsx";

function App() {

  return (
    <>
       <Navbar />
       <Herosection/>
       <NewinSection/>
       <ThirdSection />
       <FourthSection />
    </>
     
  )
}

export default App
