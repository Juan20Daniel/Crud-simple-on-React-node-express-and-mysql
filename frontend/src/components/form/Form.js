import React from 'react';
import './formStyle.css';
const Form = ({ submit, form, title, children }) => {
    return (
        <div className={`containerForm ${form && "openForm"}`}>
            <form className='form' onSubmit={submit}>
                <p className='titleForm'>{title}</p>
                { children }
            </form>
        </div>
    );
}

export default Form;