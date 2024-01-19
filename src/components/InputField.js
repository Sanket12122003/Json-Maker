import React from "react";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,

  Tooltip,

} from "@chakra-ui/react";

const InputField = ({
  schema,
  updateFormData
}) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    console.log("newValue", updateFormData);
    updateFormData(schema.jsonKey, newValue);
  };

  return (
    <>
      <FormControl isRequired={schema.required} isDisabled={schema.disable} key={schema.jsonKey} marginTop={"5"}>
        <FormLabel>
          {schema.label}
          {schema.description.length > 0 && (

            <Tooltip label={schema.description} >
              <span style={{ marginLeft: "6px", backgroundColor: "#a6a6e6", fontSize: "12px", padding: "2px 8px", borderRadius: "25px" }}>i</span>
            </Tooltip>

          )}
        </FormLabel>
        <Input
          value={value}
          onChange={handleChange}
          placeholder={schema.placeholder}
          name={schema.jsonKey ? schema.jsonKey: ""}
        />

      </FormControl>
    </>
  );
};

export default InputField;