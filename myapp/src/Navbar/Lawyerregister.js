import React, { useState } from "react";

export const Lawyerregister = (props) =>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <h2>Lawyer Register</h2> 
                <label htmlFor="name">Full Name</label>
                <input value = {name} onChange={(e) => setName(e.target.value)} id = "name" name = "name"/> 
                <label htmlFor="email">Email</label>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type = "email" placeholder = "example@anymail.com" id = "email" name ="email"/>
                <label htmlFor="password">Password</label>
                <input value = {pass} onChange={(e) => setPass(e.target.value)} type = "password" id = "password" name ="password" />
                <button className="login-btn" type="submit"> Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>already have an account?</button>
        </div>
    );
}