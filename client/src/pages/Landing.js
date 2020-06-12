import React, {useState} from "react";
import { Button, Container, ThemeProvider } from "@material-ui/core";
import Login from './Login';
import SignUp from './Signup';

function Landing() {
  const [login,setLogin] = useState(0);

  return (
    <div style={{textAlign:"center"}}>
      <img src={"logo.png"} style={{marginTop:"10%"}}/>
        {login ? <Login/> : <SignUp/> }
        <h1>Landing</h1>
        <Button color="primary" variant="outlined" onClick={()=>setLogin(0)}>
          Sign Up
        </Button>
        <Button color="primary" variant="outlined" onClick={()=>setLogin(1)}>
          Log In
        </Button>
    </div>
  );
}

export default Landing;
