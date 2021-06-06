import React, { useState } from 'react'
import PrimaryButton from '../../buttons/primaryButton';
import Input from '../input/input'
/*
form elements should look like this:
    {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'your name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            ....
    }

notes:
1. validation is not mandatory

*/

const Form = ({ formElements, submitBtnTitle, onSubmit, showSubmitBtn = true }) => {


    const [form, setForm] = useState(formElements);

    const formElementArray = [];
    for (let key in form) {
        formElementArray.push({
            id: key,
            config: form[key]
        })
    }

    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...form
        }

        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        }

        if (updatedFormElement.elementType === "checkbox")
            updatedFormElement.value = event.target.checked ? true : false;
        else
            updatedFormElement.value = event.target.value;
        updatedFormElement.valid = isValid(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        setForm(updatedOrderForm)
    }

    const submitFormHandler = (event) => {
        event.preventDefault();
        if (!isFormValid())
            return;

        //create a key value object of entered data for example: {name: 'eden', street: ''jabotinski'}
        const formData = {}
        for (let elementIdentifier in form) {
            formData[elementIdentifier] = form[elementIdentifier].value
        }
        if (onSubmit)
            onSubmit(formData)

    }

    const isFormValid = () => {

        let isValidForm = true;

        const updatedOrderForm = {
            ...form
        }

        for (let elementIdentifier in form) {
            const updatedFormElement = {
                ...updatedOrderForm[elementIdentifier]
            }

            if (updatedFormElement.validation) {
                updatedFormElement.valid = isValid(updatedFormElement.value, updatedFormElement.validation)
                updatedFormElement.touched = true;
                updatedOrderForm[elementIdentifier] = updatedFormElement
            }

            if (!updatedFormElement.valid)
                isValidForm = false;
        }

        setForm(updatedOrderForm)
        return isValidForm;

    }

    const isValid = (value, rules) => {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        return isValid;
    }
    return (
        <div className="w-full">
            <form onSubmit={submitFormHandler}>
                {formElementArray.map(el => (
                    <Input
                        key={el.id}
                        elementType={el.config.elementType}
                        elementConfig={el.config.elementConfig}
                        value={el.config.value}
                        invalid={!el.config.valid}
                        shouldValidate={el.config.validation}
                        touched={el.config.touched}
                        label={el.config.label}
                        width={el.config.width}
                        changed={(event) => inputChangedHandler(event, el.id)}
                    ></Input>
                ))}

                {showSubmitBtn && <div className="flex justify-center mb-2">
                    <PrimaryButton title={submitBtnTitle ? submitBtnTitle : 'Submit'}></PrimaryButton>
                </div>}

            </form>

        </div>
    )
}

export default Form
