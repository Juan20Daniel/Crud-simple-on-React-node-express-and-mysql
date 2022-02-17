import React from 'react';
import './inputGroup.css';

const InputGroup = ({ state, setState, label, name, type }) => {
    const handleChange = e => {
        const { value } = e.target;
        setState(value);
    }
    return (
        <div className='input-group'>
            <label className='label'>{label}</label>
            <input className='input' value={state} onChange={handleChange} type={type} name={name} id={name} />
        </div>
    );
}

export default InputGroup;