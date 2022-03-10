import {Routes , Route} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import InscriptionModal from "./components/InscriptionModal";



function App() {
  return (
    <>
    <InscriptionModal/>
    <Navbar/>
     <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
