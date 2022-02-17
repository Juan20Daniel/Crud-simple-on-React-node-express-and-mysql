import React from 'react';
import './alertStyle.css';
const Alert = ({ alert, children }) => {
    return (
        <div className={`container-alert ${alert.visible && "openAlert"}`}>
            <div className='content-alert'>
                <p className='message'>{alert.message}</p>
                <div className='action'>
                    { children }
                </div>
            </div>
        </div>
    );
}

export default Alert;