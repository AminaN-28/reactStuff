import React , {useContext}from 'react'
import { UserContext } from '../../context/userContext'; 
import{Outlet , Navigate} from "react-router-dom";

const Private = () => {


    const {currentUser} = useContext(UserContext)

    console.log('PRIVATE', currentUser);

    if(!currentUser){
        return<Navigate to="/"/>
    }
  return (
    <div className='container'>
         {/* Preciser là ou on veut mettre le contenu de notre route imbriquée Outlet est la sortie   */}
        <Outlet/> 
    </div>
  )
}

export default Private;