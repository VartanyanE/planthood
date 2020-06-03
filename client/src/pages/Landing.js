import React from "react";
import { Button, Container } from "@material-ui/core";

function Landing() {
  return (
    <div>
      <Container>
        <img src={"logo.png"} />
        <h1>Landing</h1>
        <Button variant="outlined" href="/signup">
          Sign Up
        </Button>
        <Button variant="outlined" href="./login">
          Log In
        </Button>
      </Container>
    </div>
  );
}

export default Landing;
