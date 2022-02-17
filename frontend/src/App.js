import React, { useState, useEffect } from 'react'
import './App.css';
import Card from './components/card/Card';
import IconAdd from './assetsApp/IconAdd.png';
import Form from './components/form/Form';
import InputGroup from './components/inputGroup/InputGroup';
import ButtonForm from './components/buttonForm/buttonForm';
import Alert from './components/alert/Alert';
import { addUser } from './api/addUser';
import { lookClients } from './api/lookClients';
import { deleteClientAPi } from './api/deleteClient';
import { lookClient, updateClient } from './api/updateClient';
const App = () => {
  const [ form, setForm ] = useState({ visible:false, type:'', textButtonForm:''});
  const [ alert, setAlert ] = useState({ visible:false, message:'' });
  const [ alertDelete, setAlertDelete ] = useState({ visible:false, message:'' })
  const [ name, setName ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ clientsApi, setClientsApi ] = useState([]);
  const [ idClient, setIdClient ] = useState(0);

  useEffect(() => {
    paintClients();
  },[]);
  const openFormAdd = () => setForm({visible:true, type:'Nuevo cliente', textButtonForm:'Crear'});
  const closeForm = () => { 
    resetInputs();
    setForm({visible:false, type:''});
  }
  const paintClients = async () => {
    const result = await lookClients();
    setClientsApi(result.rows);
  }
  const add = async e => {
    e.preventDefault();
    if([name, phone, email].includes('')) {
      setAlert({visible:true, message:'No puede aver ningún campo vacío!!'});
      return;
    }
    const data = { name, phone, email };
    if(form.textButtonForm === "Crear") {
      const result = await addUser(data);
      if(result.status === 200) {
        paintClients();
        resetInputs();
        setAlert({visible:true, message:"Cliente creado"});
        closeForm();
      } else {
        result.json()
        .then(result => {
          setAlert({visible:true, message:result.message});
        });
      }
    } else {
      updateClient(idClient, data)
      .then(res => {
        paintClients();
        setAlert({visible:true, message:res.message});
        closeForm();
      });
    }
  }
  const lookClientUpdate = async () => {
    const result = await lookClient(idClient);
    const {name, phone, email} = result.rows[0];
    setName(name);
    setPhone(phone);
    setEmail(email);
  }
  const deleteClient = () => {
    deleteClientAPi(idClient)
    .then(res => {
      setAlert({visible:true, message:res.message});
      paintClients();
    })
    setAlertDelete({ visible:false, message:'' });
  }
  const resetInputs = () => {
    setName('');
    setPhone('');
    setEmail('');
  }
  return (
    <div className="container">
      <Form submit={add} form={form.visible} title={form.type}>
        <InputGroup state={name} setState={setName} label="Nombre" name="name" type="text"/>
        <InputGroup state={phone} setState={setPhone} label="Teléfono" name="phone" type="number"/>
        <InputGroup state={email} setState={setEmail} label="Email" name="email" type="email"/>
        <ButtonForm styleUnic="buttonFormCreate" value={form.textButtonForm} type="submit"/>
        <ButtonForm styleUnic="buttonFormCancel" value="Cancelar" action={closeForm} type="button"/>
      </Form>
      <Alert alert={alert}>
        <button 
          className='buttonAlert' 
          type="button" 
          onClick={() => setAlert({visible:false, message:''})}
        >
          Aceptar
        </button>
      </Alert>
      <Alert alert={alertDelete}>
        <div className='butonsConfirm'>
          <button 
            className='buttonYes' 
            type="button" 
            onClick={deleteClient}
          >
            Si
          </button>
          <button 
            className='buttonNot' 
            type="button" 
            onClick={() => setAlertDelete({visible:false, message:''})}
          >
            No
          </button>
        </div>
      </Alert>
      <header>
        <p className="title">Crud</p>
      </header>
      <main className='content-cards'> 
        <button className='button__add-user' type="button" onClick={openFormAdd}>
          <img src={IconAdd} alt="icon more"/>
        </button>
        {clientsApi.length <= 0 ?
          <div className='messageNotData'>
            <p>No hay datos, agrega uno dando clic en el botón gris con el signo de mas.</p>
          </div>
          : 
          clientsApi.map((item, index) => {
            return (
              <Card 
                key={index} 
                item={item} 
                setAlertDelete={setAlertDelete} 
                setIdClient={setIdClient}
                setForm={setForm}
                lookClientUpdate={lookClientUpdate}
              />
            );
          })
        }
      </main>
    </div>
  );
}

export default App;