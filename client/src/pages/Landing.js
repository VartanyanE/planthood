import React from "react";
import { Button, Container } from "@material-ui/core";

function Landing() {
  return (
    <div>
      <Container>
        <img src={"logo.png"} />
        <h1>Landing</h1>
        <Button variant="outlined">Sign Up</Button>
        <Button variant="outlined">Log In</Button>
      </Container>
    </div>
  );
}

export default Landing;
