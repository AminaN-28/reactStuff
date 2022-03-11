import {Routes , Route} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import InscriptionModal from "./components/InscriptionModal";
import Private from "./pages/private/Private";
import PrivateHome from "./pages/private/privateHome/PrivateHome";

 


function App() {
  return (
    <>
    <InscriptionModal/>
    <Navbar/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        {/* Creation de route privée  */}

        <Route path="/private" element={<Private/>} >
          {/* Route imbriquée */}
          <Route path="/private/private-home" element={<PrivateHome/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
