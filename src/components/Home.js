import React, { useState } from "react";
import { Button, Fade } from "reactstrap";

export const Home = props => {
  const [fadeIn, setFadeIn] = useState(true);

  const toggle = () => setFadeIn(!fadeIn);

  return (
    <div>
      <h1>Welcome</h1>
      <Button color="secondary" onClick={toggle}>
        Toggle Fade
      </Button>
      <Fade in={fadeIn} tag="h5" className="mt-3">
        testing toggle
      </Fade>
    </div>
  );
};

export default Home;
