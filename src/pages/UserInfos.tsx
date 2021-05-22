import { FormControl } from "@chakra-ui/form-control";
import {
  Box,
  Button,
  FormLabel,
  Input,
} from "@chakra-ui/react";
export function UserInfos() {
  return (
    <Box p="6" h="100%">
      <form action="">
        <FormControl id="email">
          <FormLabel m="0">Email:</FormLabel>
          <Input type="email" placeholder="ex: email@email.com" />
        </FormControl>
        <FormControl id="phone" mt="2">
          <FormLabel m="0">Telefone:</FormLabel>
          <Input type="tel" placeholder="99999999" />
        </FormControl>
        <FormControl id="bairro" mt="2">
          <FormLabel m="0">Bairro:</FormLabel>
          <Input type="text" placeholder="ex: Centro" />
        </FormControl>

        <Button colorScheme="blue" w="100%" mt="8">
          Continuar
        </Button>
      </form>
    </Box>
  );
}
