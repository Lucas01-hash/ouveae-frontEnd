import { Button, VStack } from "@chakra-ui/react";
import {FaUserSecret, FaUserAlt} from "react-icons/fa"
export function Visibility() {
  return (
    <VStack spacing={3} p="4">
      <Button
        leftIcon={<FaUserAlt/>}
        colorScheme="blue"
        variant="solid"
        w="100%"
      >
        QUERO ME IDENTIFICAR
      </Button>
      <Button
        leftIcon={<FaUserSecret />}
        variant="solid"
        color="white"
        w="100%"
        background="red.400"
      >
        NÃO QUERO ME IDENTIFICAR
      </Button>
    </VStack>
  );
}
