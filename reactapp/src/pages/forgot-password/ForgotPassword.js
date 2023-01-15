import React, {useState} from 'react'

const ForgotPassword = () => {


    const hnadleForgot = async() =>{

        
        // const [userPassword, setUserPassword] = useState({
        //     password:"",
        // });

        // const {password} = userPassword;

        // const res = await fetch('/forgetpassword', {
        //     method:"POST",
        //     headers:{
        //         "Content-Type":"application/json"
        //     },
        //     body:JSON.stringify({
        //         password
        //     })
        // })


            }

    

  return (
    <>
    <div style={{width:"40rem", marginLeft:"20rem",backgroundColor:"#ddd", display:"flex", justifyContent:"center", alignItems:"center"}}>
    <form style={{width:"100%"}}>
        <input type="password" name="password" placeholder='password'/>
        <input type="password" name="cpassword" placeholder='confim password'/>
        <button onClick={hnadleForgot}>forgot</button>

    </form>
    </div>
    </>
  )
}

export default ForgotPassword
