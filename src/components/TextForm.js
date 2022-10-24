import React, { useState } from 'react'

// 1 usestate hook
// => allow to create state variable

export default function TextForm(props) {
    const convertToUpper = () => {
        setText(userInput.toUpperCase());
    };
    const convertToLower = () => {
        setText(userInput.toLowerCase());
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const copyText = () => {
        let text = document.getElementById('ta_Text');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const removeSpace = () => {
        let newUserInput = userInput.split(/[ ]+/);
        setText(newUserInput.join(' '));
    }
    const removeAllText = () => {
        setText('');
    }

    const [userInput, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={userInput} onChange={handleOnChange} id="ta_Text" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={convertToUpper}>Upper Case</button>
                <button className="btn btn-primary mx-2" onClick={convertToLower}>Lower Case</button>
                <button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={removeSpace}>remove space</button>
                <button className="btn btn-primary mx-2" onClick={removeAllText}>remove Text</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Word Summary</h1>
                <p><b>{userInput.split(' ').length}</b> word in your summary and <b>{userInput.length}</b> Character in your summary</p>
                <p>{userInput.length > 0 ? (0.008 * userInput.split(' ').length).toFixed(2) + 'Minutes Read' : 'Enter Text to get estimate read time'}</p>
                <h2>Priview</h2>
                <p className='preview'>{userInput.length > 0 ? userInput : "Enter Text to preview it here"}</p>
            </div>
        </>
    )
}

TextForm.prototype = {
    heading: 'Enter Your Text Here.'
}