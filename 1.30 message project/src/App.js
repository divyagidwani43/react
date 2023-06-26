import React, { useState } from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    const [text, textedit] = React.useState('Invalid');
    function a(event) {
        const value = event.target.value;                    //value assigned to output of entered msg 
        if (value.trim().length < 3) {                       //value.trim will see if the value added has <than 3 characters or not
            textedit("Invalid")
        } else {
            textedit("Valid")
        }
    }
    return (
        <form>
            <label>Your message</label>
            <input type="text" onChange={a} />
            <p>{text}</p>
        </form>
    );
}
