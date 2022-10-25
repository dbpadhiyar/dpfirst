import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../index.css';

export default function About(props) {

    let myStyle = {
        color: props.mode === "dark" ? "white" : "#042743",
        backgroundColor: props.mode === "dark" ? "#042743" : "white"
    }

    return (
        <div className="container my-3">
            <div className="container" style={myStyle}>
                <h1 className='centerText'>ABOUT {props.header}</h1>
                <div className="accordion" id="accordionFlushExample" style={myStyle}>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                <strong>Analyze your text</strong>
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Use Modern technology and functionality provide by "DPFIRST" to maintain and bueatify your text. Convert your text to <code>UPPERCASE,LOWERCASE,</code> Remove unwanted space, copy text and lot more.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                <strong>Free to use</strong>
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">"DPFIRST" will be always free and without any hidden charge. maybe requird to login use some functionality like <code>"store your text file",</code></div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                <strong>Privacy Policy</strong>
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">We Will not collect any kind of data whether is about your device health, IP address or location or your using pattern and which you put to change it or store it for further process.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

About.propTypes = {
    header: PropTypes.string.isRequired //isRequired make sure we receive props & if we not receive it will throw error
}