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
        navigator.clipboard.writeText(userInput);
        document.getSelection().removeAllRanges();
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
                    <textarea className="form-control" value={userInput} onChange={handleOnChange}
                        style={{
                            backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                            color: props.mode === 'dark' ? 'white' : '#042743'
                        }}
                        id="ta_Text" rows="8"></textarea>
                </div>
                <button disabled={userInput.length <= 0} className="btn btn-primary mx-1 my-1" onClick={convertToUpper}>Upper Case</button>
                <button disabled={userInput.length <= 0} className="btn btn-primary mx-1 my-1" onClick={convertToLower}>Lower Case</button>
                <button disabled={userInput.length <= 0} className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
                <button disabled={userInput.length <= 0} className="btn btn-primary mx-1 my-1" onClick={removeSpace}>remove space</button>
                <button disabled={userInput.length <= 0} className="btn btn-primary mx-1 my-1" onClick={removeAllText}>remove Text</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Word Summary</h1>
                <p><b>{userInput.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</b> word in your summary and <b>{userInput.length}</b> Character in your summary</p>
                <p>{userInput.length > 0 ? (0.008 * userInput.split(/\s+/).filter((element) => { return element.length !== 0 }).length).toFixed(2) + 'Minutes Read' : 'Enter Text to get estimate read time'}</p >
                <h2>Priview</h2>
                <p className='preview'>{userInput.length > 0 ? userInput : "Nothing to preview."}</p>
            </div>
        </>
    )
}

TextForm.prototype = {
    heading: 'Enter Your Text Here.'
}