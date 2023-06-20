import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import { auth, createUserWithEmailAndPassword } from '../firebase';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); 
  
  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login'); 
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <Typography variant="h5" component="h2">Registro de Usuario</Typography>
      <TextField
        type="email"
        label="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        type="password"
        label="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleRegister}>Registrarse</Button>
      {errorMessage && <Typography variant="body2" color="error">{errorMessage}</Typography>}
    </div>
  );
};

export default Register;
