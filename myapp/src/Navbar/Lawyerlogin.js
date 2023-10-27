import React, { useState } from "react";

export const Lawyerlogin = (props) =>{
    const [email, setEmail] = useState('');
    const[pass, setPass] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(email);
    }
    
    return (
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Lawyer Login</h2> 
                <label htmlFor="email">Email</label>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type = "email" placeholder = "example@anymail.com" id = "email" name ="email"/>
                <label htmlFor="password">Password</label>
                <input value = {pass} onChange={(e) => setPass(e.target.value)} type = "password" id = "password" name ="password" />
                <button className="login-btn" type="submit">Log in</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have a account? Register here.</button>
        </div>
    );
}
