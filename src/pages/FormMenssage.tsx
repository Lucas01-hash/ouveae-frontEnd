import { FormControl } from "@chakra-ui/form-control";
import {
  Box,
    Button,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

export function FormMenssage() {
  return (
    <Box p="6" h="100%">
      <form action="">
        <FormControl id="email">
          <FormLabel m="0">Tema:</FormLabel>
          <Input type="text" placeholder="ex: Infraestrutura" />
        </FormControl>
        <FormControl mt="3" id="email">
          <FormLabel m="0">Assunto:</FormLabel>
          <Input type="text" placeholder="ex: rua esburacada" />
        </FormControl>
        <FormControl mt="3" id="email">
          <FormLabel m="0">Menssagem:</FormLabel>
          <Textarea></Textarea>
        </FormControl>
        <Button w="100%" mt="auto">Enviar</Button>
      </form>
    </Box>
  );
}
