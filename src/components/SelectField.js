import React, { useEffect } from "react";
import {  Select, FormControl, FormLabel } from "@chakra-ui/react";

const SelectField = ({ schema, updateFormData  }) => {
  const [selectedValue, setSelectedValue] = React.useState(
    schema.validate.defaultValue
  );

// console.log(typeof(updateFormData))

// console.log(updateFormData(schema.jsonKey, 2))

  const handleChange = (event) => {
    // const newValue = event.target.value;
    setSelectedValue(event.target.value);
    console.log(typeof(updateFormData))
    // await onValueChange;
    // updateFormData(schema.jsonKey, event.target.value);
    console.log("updateFormData in SelectField:", updateFormData);
  };



  return (
    <FormControl isRequired={schema.validate.required} marginTop={"5"}>
      {/* <HStack gap={"12px"}> */}
        <FormLabel htmlFor={schema.jsonKey}>{schema.label}</FormLabel>

        <Select
          id={schema.jsonKey}
          value={selectedValue}
          onChange={handleChange}
        //   isDisabled={schema.validate.immutable}
          placeholder={schema.placeholder}
        >
          {schema.validate.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      {/* </HStack> */}
    </FormControl>
  );
};

export default SelectField;