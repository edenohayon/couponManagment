import React from 'react'
// import { motion } from 'framer-motion'

import './input.css'

// should be like the next form:
// {
//     elementType: 'input',
//     elementConfig: {
//         type: 'email',
//         placeholder: 'your E-mail'
//     },
//     value: '',
//     changed
// }

const Input = (props) => {
    let inputElement = null;

    let notValid = props.invalid && props.shouldValidate && props.touched;

    let validationError = null;

    // const colourStyles = {
    //     control: styles => ({ ...styles, backgroundColor: 'white', borderColor: 'grey' })
    // }


    switch (props.elementType) {
        case ('input'):
            inputElement = <input className={`InputElement rounded ${notValid ? 'Invalid' : ''}`} {...props.elementConfig} value={props.value} onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea className={`InputElement rounded`} {...props.elementConfig} value={props.value} onChange={props.changed} />;
            break;
        case ('checkbox'):
            inputElement = <label className="inline-flex items-center mt-3 font-medium text-primary">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" checked={props.value} onChange={props.changed} />
                <span className="ml-2 text-gray-700">{props.elementConfig.placeholder}</span>
            </label>
            break;

        default:
            inputElement = <input className={`InputElement`} {...props.elementConfig} value={props.value} onChange={props.changed} />
    }
    return (
        <div className={`Input`}>
            <label className={`Label text-primary`}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    )
}

export default Input
