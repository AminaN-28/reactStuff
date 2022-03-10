import React , {useRef,useState, useContext} from 'react'
import { UserContext } from '../context/userContext';
const InscriptionModal  = () => {


    const {modalState, toggleModal , signUp} = useContext(UserContext)
    console.log(signUp);

    const inputs = useRef([])
  
    //ajout de tous les elements qu'on veut a la place de rajouter des elements de ref
    const addInputs = el =>{
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }
    }

    const [validation, setValidation] = useState("");

    const formRef = useRef();


    const handleForm =  async (e) =>{
        e.preventDefault()

        if((inputs.current[1].value.length || inputs.current[2].value.length)< 6){
            setValidation("Type at least 6 characters !!!")

            return ;
        }
        else if (inputs.current[1].value !== inputs.current[2].value)
        {
            setValidation("Passwords don't match")
            return;
        }




        try{
            const cred = await signUp(
                inputs.current[0].value,
                inputs.current[1].value
            )

            formRef.current.reset();
            setValidation("");
            console.log(cred);
        }
        catch(err){
            if(err.code === 'auth/invalid-email'){
                setValidation("Email format invalid");
            }

            if(err.code ==="auth/email-already-in-use"){
                setValidation("Email already in use");
            }
        }
    }


    const closeModal=() =>{
        setValidation("");
        toggleModal("close");
    }


  return (
    <>
    {
        modalState.signUpModal && (
        <div className='position-fixed top-0 vw-100 vh-100'> 
            <div onClick={closeModal} className="w-100 h100 bg-dark bg-opacity-75">
                <div className="position-absolute top-50 start-50 translate-middle" style={{minWidth:"400px"}}>
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">

                                 <h5 className="modal-title">Inscription</h5>
                                 <button onClick={()=> closeModal} className="btn-close"></button>
                            </div>   
                            <div className="modal-body">
                                <form onSubmit={handleForm} className="sign-up-form">
                                    <div className="mb-3">
                                         <label htmlFor="signUpMail" className="form-label">Email</label>
                                        <input ref ={addInputs} name="email" required type="email" className="form-control" id= "signUpMail"/>
                                    </div>



                                    <div className="mb-3">

                                         <label htmlFor="signUpPwd" className="form-label">Password</label>
                                        <input ref ={addInputs} name="pwd" required type="password" className="form-control" id= "signUpPwd"/>
                                    </div>




                                    <div className="mb-3">
                                         <label htmlFor="repeatPwd" className="form-label">Repeat Password</label>
                                        <input ref ={addInputs} name="pwd" required type="password" className="form-control" id= "repeatPwd"/>
                                        <p className="text-danger mt-1">{validation}</p>
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