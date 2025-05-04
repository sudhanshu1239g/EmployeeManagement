import { useState } from 'react'
import styles from './loginPage.module.css'
function LoginPage({handleLogin}){

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    function handleSubmit(e){
        e.preventDefault()
        handleLogin(email,password)
        setEmail('')
        setPassword('')


    }

    return(
        <div className={styles.container}> 
            <input 
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            className={styles.emailbox} type="email" placeholder="Enter your email id"/>
            <br />
            <input 
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            className={styles.passwordbox} type="text" placeholder="Enter password"/>
            <br />
            <button onClick={(e)=>{
                handleSubmit(e)

            }}
            className={styles.Loginbutton}>Log in</button>


        </div>
    )

}
export default LoginPage
