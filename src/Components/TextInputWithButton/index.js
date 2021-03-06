import React, { useState } from 'react';

import TextInput from '../TextInput';
import { ApiHandler } from '../../Utils/requestManager.js';
import Style from './textInputWithButton.css'


const ValidateEmail = (mail) => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
        return true;
    }
    return false;
}

const TextInputWithButton = props => {
    const [value, setValue] = useState("");
    const [info, setInfo] = useState("");
    const [error, setError] = useState(false);

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onClick = e => {
        if (ValidateEmail(value)) {
            ApiHandler.subscribe({ email: value }, () => {
                setInfo("We'll let you know when we are online.");
                setError(false);
            });
        } else {
            setInfo("Please enter a valid email address");
            setError(true);
        }
    };

    return <>
        <div className={Style.container}>
            <TextInput
                placeholder={props.placeholder}
                onChange={onChange}
                value={value}
            />
            <button
                onClick={onClick}
                className={Style.buttonContainer}>
                {props.buttonText}
            </button>
        </div>
        <div className={error ? Style.error : Style.info}>{info}</div>
    </>
};

export default TextInputWithButton;