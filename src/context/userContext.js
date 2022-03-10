import { createContext, useEffect, useState } from "react";

import {signInWithEmailAndPassword,createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"

import{auth} from "../firebase-config"
export const  UserContext = createContext()

export function UserContextProvider(props){


const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd);

//User login
const [currentUser, setCurrentUser] = useState();

//temps de reponse de firebase
const [loadingData, setLoadingData]  = useState(true);

const [modalState , setModalState] = useState({
    signUpModal : false,
    signInModal : false
})

const toggleModal = modal =>{
    if (modal === "signIn"){
        setModalState({
            signInModal:true,
            signUpModal:false
        })
    }
    if (modal === "signUp"){
        setModalState({
            signInModal:false,
            signUpModal:true
        })
    }
    if (modal === "close"){
        setModalState({
            signInModal:false,
            signUpModal:false
        })
    }


}
return(
    <UserContext.Provider value={{modalState, toggleModal, signUp}}>
        {props.children}
    </UserContext.Provider>
)
}