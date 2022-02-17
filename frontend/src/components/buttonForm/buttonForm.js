import React from 'react';
import './buttonFormStyle.css';

const ButtonForm = ({ styleUnic, value, action, type }) => {
    return (
        <button onClick={action} type={type} className={`buttonForm ${styleUnic}`}>
            {value}
        </button>
    );
}

export default ButtonForm;