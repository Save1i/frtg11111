import { createElement, JSX, useState } from "react";
import React from 'react';
import styles from "../styles/newForm.module.css"

const Form = () => {

    const [generatedForm, setGeneratedForm] = useState<JSX.Element | null>(null);


    interface Props {
        inputs: string,
        textareas: string,
        checkboxes: string,
    }

    const [formData, setFormData] = useState<Props>({
        inputs: '',
        textareas: '',
        checkboxes: '',
    });

    const handleChange = (event: any) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const createForm = (props: Props) => {
        const {inputs, textareas, checkboxes} = props
        const numOfInputs = Number(inputs)
        const numOftextareas = Number(textareas)
        const numOfcheckboxes = Number(checkboxes)

        let input = [];
        let textarea = [];
        let checkbox = [];

        for (let i = 0; i < numOfInputs; i++) {
            input.push(createElement('input', {className: "new-input", key:`input-${i}`}))
        }

        for (let i = 0; i < numOftextareas; i++) {
            textarea.push(createElement('textarea', {className: "new-textarea", key:`textarea-${i}`}))
        }

        for (let i = 0; i < numOfcheckboxes; i++) {
            checkbox.push(createElement("input", { type: "checkbox", className: "new-checkbox", key: `checkbox-${i}`}))
        }

        const form = createElement('form', {className: styles['new-form']}, ...input, ...textarea, ...checkbox)
        return form;
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setFormData({
            inputs: '',
            textareas: '',
            checkboxes: '',
        })
        setGeneratedForm(createForm(formData))
        console.log(formData);
  };

    return (
        <div>
        <form onSubmit={handleSubmit} className="form" id="form">
            <div className="form__inputs">
                <label htmlFor="inputs" id="inputs">input</label>
                <input type="number" name="inputs" id="inputs" value={formData.inputs} onChange={handleChange}/>
            </div>
            <div className="form__textareas">
                <label htmlFor="textareas" id="textareas">textarea</label>
                <input type="number" name="textareas" id="textareas" value={formData.textareas} onChange={handleChange}/>
            </div>
            <div className="form__checkboxes">
                <label htmlFor="checkboxes" id="checkboxes">checkbox</label>
                <input type="number" name="checkboxes" id="checkboxes" value={formData.checkboxes} onChange={handleChange}/>
            </div>
            <button type="submit">Build</button>
        </form>
        <div className={styles.container}>
            {generatedForm}
        </div>
        </div>
    )
}

export default Form