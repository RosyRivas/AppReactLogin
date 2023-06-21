import {Button, Container, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {endSession, getSession, isLoggedIn} from "../services/sessionService";

export default function User() {

  let navigate = useNavigate();

  let [email, setEmail] = useState("");

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/login");
    }

    let session = getSession();
    setEmail(session.email);

    console.log("Your access token is: " + session.accessToken);
  }, [navigate]);

  const onLogout = () => {
    endSession();
    navigate("/login");
  }

  return (
    <Container maxWidth="xs" sx={{mt: 2}}>
      <Typography variant="h6" component="h1" textAlign="center" gutterBottom>
        Bienvenido a su session:
      </Typography>
      <Typography variant="h5" component="h1" textAlign="center" gutterBottom>
        {email}
      </Typography>
      <Button variant="contained" color="error" onClick={onLogout} sx={{mt: 3}} fullWidth>
        Log out
      </Button>
    </Container>
  )
}