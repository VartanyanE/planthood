import React from "react";
import { Button, Container, ThemeProvider } from "@material-ui/core";

function Landing() {
  return (
    <div>
      <Container>
        <img src={"logo.png"} />
        <h1>Landing</h1>

        <Button color="primary" variant="outlined" href="/signup">
          Sign Up
        </Button>
        <Button color="primary" variant="outlined" href="./login">

          Log In
        </Button>
      </Container>
    </div>
  );
}

export default Landing;
