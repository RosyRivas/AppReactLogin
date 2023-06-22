import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import {Alert,  Box, Button, Container, TextField, Link, Typography} from "@mui/material";
import { auth, createUserWithEmailAndPassword } from '../firebase';

export default function Register(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleRegister = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Porfavor introduzca su nombre de usuario y contraseña.");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login'); 
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Container maxWidth="xs" sx={{mt: 2}}>

        <Typography variant="h5" component="h1" gutterBottom textAlign="center">Registro de Usuario</Typography>
        {error && <Alert severity="error" sx={{my: 2}}>{error}</Alert>}
        <Box component="form" onSubmit={handleRegister}>
          <TextField
            type="email"
            label="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{mt: 3}}
            fullWidth
          />
          <TextField
            type="password"
            label="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{mt: 3}}
            fullWidth
          />
          <Button variant="contained"sx={{mt: 3}} fullWidth type='submit' color="primary" onClick={handleRegister}>Registrarse</Button>
          {setError && <Typography variant="body2" color="error">{setError}</Typography>}
          <Box sx={{mt: 2}}textAlign="center"> <Link href="/login" >Login</Link>
        </Box>
        </Box> 
       </Container> 
    </div>
  );
};
