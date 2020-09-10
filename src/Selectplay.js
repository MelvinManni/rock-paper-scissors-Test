import React, { useState } from "react";
import App from "./App";
import BonusPlay from "./BonusPlay";

const Selectplay = () => {
  const [mode, setMode] = useState("original");
  
  const updateCom = (param) => {
      setMode(param)
  };

  return mode === "original" ? (
    <App updateCom={updateCom} />
  ) : (
    <BonusPlay updateCom={updateCom} />
  );
};

export default Selectplay;
