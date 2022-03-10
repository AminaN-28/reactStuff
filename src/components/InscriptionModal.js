import React , {useContext} from 'react'
import { UserContext } from '../context/userContext';
const InscriptionModal  = () => {


    const {modalState, toggleModal} = useContext(UserContext)
  return (
    <>
    {
        modalState.signUpModal && (
        <div className='position-fixed top-0 vw-100 vh-100'> 
            <div  className="w-100 h100 bg-dark bg-opacity-75">
                <div className="position-absolute top-50 start-50 translate-middle" style={{minWidth:"400px"}}>
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">

                                 <h5 className="modal-title">Inscription</h5>
                                 <button onClick={()=> toggleModal("close")} className="btn-close"></button>
                            </div>   
                            <div className="modal-body">
                                <form className="sign-up-form">
                                    <div className="mb-3">
                                         <label htmlFor="signUpMail" className="form-label">Email</label>
                                        <input name="email" required type="email" className="form-control" id= "signUpMail"/>
                                    </div>



                                    <div className="mb-3">

                                         <label htmlFor="signUpPwd" className="form-label">Password</label>
                                        <input name="pwd" required type="password" className="form-control" id= "signUpPwd"/>
                                    </div>




                                    <div className="mb-3">
                                         <label htmlFor="repeatPwd" className="form-label">Repeat Password</label>
                                        <input name="pwd" required type="password" className="form-control" id= "repeatPwd"/>
                                        <p>Validation</p>
                                    </div>

                                    <button className="btn btn-primary">S'inscrire</button>
                                </form>    
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        )
    }

    </>
  );
}

export default InscriptionModal