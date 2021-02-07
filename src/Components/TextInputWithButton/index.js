import React, { useState } from 'react';

import Style from './textInputWithButton.css'
import TextInput from '../TextInput';

const TextInputWithButton = props => {
    const [value, setValue] = useState("");
    const onChange = (e) => {
        setValue(e.target.value);
    }
    return <div className={Style.container}>
        <TextInput
            placeholder={props.placeholder}
            onChange={onChange}
            value={value}
        />
        <button className={Style.buttonContainer}>{props.buttonText}</button>
    </div>
};

export default TextInputWithButton;