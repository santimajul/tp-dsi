import React, { useState } from 'react';
import '../estilos/form.css' 

export default function LoginForm({start}) {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');

  const handleNombreChange = event => {
    setNombre(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div className='form-interface'>
    <div className='form'>
    <h2>Iniciar sesion</h2>
        <form onSubmit={handleSubmit}>
        <div>
            <label>Nombre:</label><br/>
            <input type="text" value={nombre} onChange={handleNombreChange} />
        </div>
        <div>
            <label>Password:</label><br/>
            <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit" onClick={start}>Log in</button>
        </form>
    </div>
    </div>
  );
}