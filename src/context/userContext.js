import { createContext, useEffect, useState } from "react";


export const  UserContext = createContext()


export function UserContextProvider(props){

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
    <UserContext.Provider value={{modalState, toggleModal}}>
        {props.children}
    </UserContext.Provider>
)
}