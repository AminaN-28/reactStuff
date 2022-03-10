import React , {useContext} from "react";
import { UserContext } from "../context/userContext";
import { Link } from "react-router-dom";

const Navbar = () =>{
    

    const{toggleModal} = useContext(UserContext)

    return(
       
        <nav className="navbar navbar-light bg-light px-4">
            <Link to="/" className="navbar-brand text-dark">Authentification_REACT_JS</Link>

            <div>
                <button onClick={() =>toggleModal("signIn")} className="btn btn-outline border border-dark"  >Se connecter</button>
                <button onClick={() =>toggleModal("signUp")} className="btn btn-colour-1 ms-2 border-dark ">S'inscrire</button> 
                <button className="btn btn-danger ms-2">Se déconnecter</button>
            </div>
        </nav>
    );
}


export default Navbar;
// style={"color:#4fbfa8;background-color: #ffffff;border-color: #4fbfa8;  font-weight: bold; letter-spacing: 0.05em; //rounded-circle"}
// style={"color: #fff; background-color: #004E64;  border-color: #004E64;font-weight: bold;letter-spacing: 0.05em;  border-radius: 0;"}