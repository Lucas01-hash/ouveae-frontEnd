import { FormControl } from "@chakra-ui/form-control";
import {
  Box,
  Button,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
export function PersonalInfo() {
  return (
    <Box p="6" h="100%">
      <form action="">
        <FormControl id="name">
          <FormLabel m="0">Nome:</FormLabel>
          <Input type="text" placeholder="nome" />
        </FormControl>
        <FormControl id="grupo-de-idade" mt="2">
          <FormLabel m="0">Grupo de idade:</FormLabel>
          <Select placeholder="selecione">
            <option value="up to 18 years">até 18 anos</option>
            <option value="18 to 24 years">18 a 24 anos</option>
            <option value="25 to 34 years">25 a 34 anos</option>
            <option value="35 to 44 years">35 a 44 anos</option>
            <option value="45 to 54 years">45 a 54 anos</option>
            <option value="55 to 64 years">55 a 64 anos</option>
            <option value="more than 65 years">mais de 65 anos</option>
          </Select>
        </FormControl>
        <FormControl id="genero" mt="2">
          <FormLabel m="0">Genero:</FormLabel>
          <Select placeholder="selecione">
            <option value="male">Masculino</option>
            <option value="femael">Feminino</option>
          </Select>
        </FormControl>

        <Button colorScheme="blue" w="100%" mt="8">
          Continuar
        </Button>
      </form>
    </Box>
  );
}
