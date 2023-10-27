import React, { useState } from 'react';
import { Clientregister } from './Clientregister';
import { Clientlogin } from './Clientlogin';
import "./ClientApp.css";
function ClientApp() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <div className="ClientApp">
        {
            currentForm === "login" ? <Clientlogin onFormSwitch={toggleForm} /> : <Clientregister onFormSwitch={toggleForm}/>
        }
        </div>
    );
}
export default ClientApp;