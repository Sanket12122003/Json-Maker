import React, { useState } from "react";
import InputField from "../../components/InputField";
import FormComponent from "../../components/FormComponent";
import SwitchField from "../../components/SwitchField";
import SelectField from "../../components/SelectField";
import RadioField from "../../components/RadioField";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
} from "@chakra-ui/react";
import { useFormContext } from "../../FormContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DynamicForm = ({ formSchema }) => {
  const { formData, updateFormData } = useFormContext();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  const toastOptions = {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  }

  const handleFormSubmit = () => {
    // Perform custom validation here if needed
    const isFormValid = formSchema.every((field) => {
      if (field.validate?.required) {
        return formData[field.jsonKey] !== undefined && formData[field.jsonKey] !== "";
      }
      return true;
    });

    if (isFormValid) {
      handleOpenModal();
    } else {
      // Show error message or perform other actions for invalid form
      toast.error("Please Enter all fields", toastOptions);
    }
  };


  const renderJsonElements = (schema) => {
    return (
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>JSON to be sent to the backend</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
            {Object.entries(schema).map(([key, value]) => (
                <Text key={key} marginTop={2}>
                  <strong>{key}: </strong>
                  {JSON.stringify(value, null, 2)}
                </Text>
              ))}

            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };

  return (
    <>
         
        <form>
          {formSchema.map((schema, index) => {
            return (
              <React.Fragment key={index}>
                {schema.uiType === "Input" && (
                  <InputField
                    schema={schema}
                    key={schema.sort}
                    updateFormData={updateFormData}
                  />
                )}

                {schema.uiType === "Switch" && (
                  <SwitchField
                    schema={schema}
                    key={schema.sort}
                    updateFormData={updateFormData}
                  />
                )}

                {schema.uiType === "Select" && (
                  <SelectField
                    schema={schema}
                    key={schema.sort}
                    updateFormData={updateFormData}
                  />
                )}


                {schema.uiType === "Radio" && (
                  <RadioField
                    schema={schema}
                    key={schema.sort}
                    updateFormData={updateFormData}
                  />
                )}

                {schema.uiType === "Group" && (
                  <FormComponent
                    schema={schema}
                    key={schema.sort}
                    updateFormData={updateFormData}
                  />
                )}
              </React.Fragment>
            );
          })}
          {formSchema.length > 0 && (
            <Box style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Button Button colorScheme='blue' marginTop={"10px"} onClick={handleFormSubmit} >Submit</Button>
              {renderJsonElements(formData)}
            </Box>
          )}
        </form>
    
        <ToastContainer />
    </>
  );
};

export default DynamicForm;