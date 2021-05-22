import { FormControl } from "@chakra-ui/form-control";
import {
  Box,
  Button,
  FormLabel,
  Input,
  Select,
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
          <Select placeholder="selecione">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormControl>
        <FormControl mt="3" id="email">
          <FormLabel m="0">Menssagem:</FormLabel>
          <Textarea></Textarea>
        </FormControl>
        <FormControl mt="3" id="email">
          <FormLabel m="0">imagem:</FormLabel>
          <Input type="file" />
        </FormControl>
        <Button w="100%" mt="auto">
          Enviar
        </Button>
      </form>
    </Box>
  );
}
