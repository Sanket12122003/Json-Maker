
import React from "react";
import Home from "./Pages/Home/Home";
import { FormContextProvider } from "./FormContext.js";

const App = () => {
  return (
    
    <>
      <FormContextProvider>
        <Home />
      </FormContextProvider>
    </>
  );
};

export default App;
