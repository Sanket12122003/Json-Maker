import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Textarea,
  useMediaQuery,
} from "@chakra-ui/react";
import DynamicForm from "./DynamicForm";

const Home = () => {
  const [inputValue, setInputValue] = useState();
  const [formSchema, setFormSchema] = useState([]);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const leftSideStyles = isMobile
    ? { height: "50vh", overflowY: "scroll" }
    :  { height: "100vh" };

  const rightSideStyles = isMobile
    ? { height: "50vh", overflowY: "scroll" }
    : { height: "100vh", overflowY: "scroll" };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    try {
      const parsedFields = JSON.parse(e.target.value);
      if (Array.isArray(parsedFields)) {
        setFormSchema(parsedFields);
      }
    } catch (error) {
      console.error("Invalid JSON input");
    }
  };

  const handleReset = () => {
    setFormSchema([]);
    setInputValue("");

  };

  return (
    <>
      <Grid templateColumns={isMobile ? "1fr" : "repeat(2, 1fr)"} gap={6}>
        <GridItem {...leftSideStyles}>
          <Textarea
            value={inputValue}
            placeholder="Paste UI schema here"
            onChange={handleInputChange}
            height="100vh"
            resize="none"
           // overflowY="scroll"
            color="gray.100"
            bg="gray.700"
            fontSize={"20px"}
          />
      
        </GridItem>

        <GridItem {...rightSideStyles}>
          <Box borderWidth="1px" borderRadius="lg" p={4}>
            <DynamicForm formSchema={formSchema} />
            {formSchema.length > 0 && (
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  Button
                  colorScheme="blue"
                  marginTop={"10px"}
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </Box>
            )}
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;