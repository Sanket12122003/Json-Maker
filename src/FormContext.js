import { createContext, useContext, useState } from "react";


const FormContext = createContext();


export const useFormContext = () => {

  const context = useContext(FormContext);

  if (!context) {
    throw new Error("useFormContext must be used within a FormContextProvider");
  }
  return context;
};


export const FormContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  const updateFormData = (jsonKey, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [jsonKey]: value,
    }));
  };

  const handleResetData = () => {
    setFormData({});
  };


  const contextValue = {
    formData,
    setFormData,
    updateFormData,
    handleResetData,
  };

  return (
    <FormContext.Provider value={contextValue}>
      {children}
    </FormContext.Provider>
  );
};