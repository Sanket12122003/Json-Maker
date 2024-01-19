import React, { useState } from "react";
import InputField from "../../components/InputField";
import GroupField from "../../components/GroupField";
import { Box, Button, VStack } from "@chakra-ui/react";
import FormComponent from "../../components/FormComponent";
import SwitchField from "../../components/SwitchField";
import SelectField from "../../components/SelectField";
import RadioField from "../../components/RadioField";

const arr = [];



const DynamicForm = ({ formSchema }) => {
  const [formData, setFormData] = useState({});

  const updateFormData =  (jsonKey, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [jsonKey]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Send formData to the backend as needed
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
        <Button onClick={handleSubmit}>Submit</Button>
      </form>
    </>
  );
};

export default DynamicForm;