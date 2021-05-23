import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export function Header() {
  return (
    <header>
      <Flex
        as="nav"
        bg="blue.500"
        fontWeight="bold"
        h="12"
        color="white"
        justify="center"
        align="center"
      >
        Ouve aí - Araguaína
      </Flex>
      <Box>
        <Text
          fontWeight="bold
        "
          mx="auto"
          w="fit-content"
          lineHeight="1"
          mt="4"
        >
          Araguaína
        </Text>

        <Image src="/bandeira.jpeg" w="50%" maxW="300px" mx="auto" />
        <Text mx="auto" w="fit-content">
          Prefeitura municipal
        </Text>
      </Box>
      <Text w="100%" textAlign="center" mt="4" size="lg" fontSize="25">
        Ouvidoria
      </Text>
    </header>
  );
}
