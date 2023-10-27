import React, { useState } from 'react';
import { Lawyerregister } from './Lawyerregister';
import { Lawyerlogin } from './Lawyerlogin';
import "./LawyerApp.css";
function LawyerApp() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <div className="LawyerApp">
        {
            currentForm === "login" ? <Lawyerlogin onFormSwitch={toggleForm} /> : <Lawyerregister onFormSwitch={toggleForm}/>
        }
        </div>
    );
}
export default LawyerApp;