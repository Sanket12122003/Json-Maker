import React from 'react'
import {Box, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
    width={"100%"}
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Box display="flex" alignItems="center" padding={["0px", "20px"]} justifyContent="center" gap="12px">
      <Text fontSize={["2xl", '4xl']}>Form Maker</Text>
    </Box>
  </Box>
  
  )
}

export default Header