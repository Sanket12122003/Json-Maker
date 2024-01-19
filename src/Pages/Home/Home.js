import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Textarea,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import DynamicForm from "./DynamicForm";

const Home = () => {
  const [inputValue, setInputValue] = useState();
  const [formSchema, setFormSchema] = useState([]);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const leftSideStyles = isMobile
    ? { height: "50vh", overflowY: "scroll" }
    : { height: "100vh", overflowY: "scroll" };

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

  //   const handleResetField = () => {
  //     setInputValue("");
  //     setFormSchema([]);
  //   };

  return (
    <>
      <Grid templateColumns={isMobile ? "1fr" : "repeat(2, 1fr)"} gap={6}>
        <GridItem {...leftSideStyles}>
          {/* <VStack spacing={4}> */}
          <Textarea
            value={inputValue}
            placeholder="Paste UI schema here"
            onChange={handleInputChange}
            height="100vh"
            resize="none"
            overflowY="scroll"
            color="gray.100"
            bg="gray.700"
            fontSize={"20px"}
          />
          {/* <HStack>
              <Button onClick={handleSubmitField} colorScheme="green">
                Submit
              </Button>
              <Button onClick={handleResetField} colorScheme="green">
                Reset
              </Button>
            </HStack> */}
          {/* </VStack> */}
        </GridItem>

        <GridItem {...rightSideStyles}>
          <Box borderWidth="1px" borderRadius="lg" p={4}>
            <DynamicForm formSchema={formSchema} />
            {/* <HStack>
              <Button>Cancel</Button>
              <Button>Submit</Button>
            </HStack> */}
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;