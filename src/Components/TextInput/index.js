import React from 'react';

import Style from './textInput.css';

const TextInput = ({ value, onChange, placeholder }) => {

    return (<div className={Style.container}>
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={Style.inputContainer} />
    </div>)
}

export default TextInput;