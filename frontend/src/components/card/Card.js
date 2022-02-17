import React, { useState } from 'react';
import './cardStyle.css';
import iconOptions from './assets/iconOptions.png';

const Card = ({ item, setAlertDelete, setIdClient, setForm, lookClientUpdate }) => {
    const [ option, setOption ] = useState(false);
    const { idClient, name, phone, email } = item;

    const opeClosOption = () => {
        setOption(!option);
        setIdClient(idClient);
    }
    const openFormUpdate = () => {
        setOption(!option);
        lookClientUpdate();
        setForm({visible:true, type:'Editar cliente', textButtonForm:'Editar'});
    }

    const confirmDelete = () => {
        setOption(!option);
        setAlertDelete({visible:true, message:"¿Seguro que quieres eliminar este cliente?"});
    }
    return (
        <div className='card'>
            <div className='header'>
                <div className='header--name'>
                    <p>{name}</p>
                </div>
                <div className='header--options'>
                    <img src={iconOptions} onClick={opeClosOption} className="imgOptions" alt="icon options" />
                    {option &&
                        <div className='options'>
                            <button type="button" onClick={openFormUpdate}>Editar</button>
                            <button type="button" onClick={confirmDelete}>Eliminar</button>
                        </div>
                    }
                </div>
            </div>
            <div className='content'>
               <div className='content__phone'>
                    <p className='content__phone--title'>Teléfono</p>
                    <p className='content__phone--value'>{phone}</p>
               </div>
               <div className='content__email'>
                    <p className='content__email--title'>Email</p>
                    <p className='content__email--value'>{email}</p>
               </div>
            </div>
        </div>
    );
}

export default Card;