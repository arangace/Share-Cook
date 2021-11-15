import React, { useContext } from "react";
import Confetti from 'react-confetti';
import { AppContext } from "./AppContextProvider";
import Button from './components/Button';
function App() {
  const { buttonPressed } = useContext(AppContext);
  return (
    <>
      <p>Test Finished!</p>
      <p>Press the button below</p>
      <div className={buttonPressed ? "confettiShow" : "confettiHide"}>
        <Confetti
          width={500}
          height={500}
        />
      </div>
      <Button></Button>
    </>
  );
}

export default App;
