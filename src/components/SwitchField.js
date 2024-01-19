import React from "react";
import {
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Tooltip,
} from "@chakra-ui/react";

const SwitchField = ({ schema, updateFormData }) => {
  const [isChecked, setIsChecked] = React.useState(
    schema.validate.defaultValue
  );

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
    updateFormData(schema.jsonKey, event.target.checked);

  };
  return (
    <>
      <FormControl isRequired={schema.validate.required} marginTop={"5"}>
        <HStack>
          <Checkbox
            id={schema.jsonKey}
            isChecked={isChecked}
            onChange={handleChange}
            isDisabled={schema.validate.immutable}
          />
          <FormLabel>
            {schema.label}
            {schema.description.length > 0 && (
              <Tooltip label={schema.description}>
                <span
                  style={{
                    marginLeft: "6px",
                    backgroundColor: "#a6a6e6",
                    fontSize: "12px",
                    padding: "2px 8px",
                    borderRadius: "25px",
                  }}
                >
                  i
                </span>
              </Tooltip>
            )}
          </FormLabel>
        </HStack>
      </FormControl>
    </>
  );
};

export default SwitchField;