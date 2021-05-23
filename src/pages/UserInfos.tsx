import { FormControl } from "@chakra-ui/form-control";
import {
  Box,
  Button,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { useForm } from "../hooks/useForm";
export function UserInfos() {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [bairro, setBairro] = useState("")

  const {changeUserForm} = useForm()
  function handleSubmit(event:FormEvent){
    event.preventDefault()
    changeUserForm({
     email,
      phone,
      bairro
    })
  }

  return (
    <Box p="6" h="100%">
      <form action="" onSubmit={handleSubmit}>
        <FormControl id="email">
          <FormLabel m="0">Email:</FormLabel>
          <Input type="email" placeholder="ex: email@email.com" onChange={(event)=>setEmail(event.target.value)} />
        </FormControl>
        <FormControl id="phone" mt="2">
          <FormLabel m="0">Telefone:</FormLabel>
          <Input type="tel" placeholder="99999999"  onChange={(event)=>setPhone(event.target.value)}/>
        </FormControl>
        <FormControl id="bairro" mt="2">
          <FormLabel m="0">Bairro:</FormLabel>
          <Input type="text" placeholder="ex: Centro"  onChange={(event)=>setBairro(event.target.value)}/>
        </FormControl>

        <Button colorScheme="blue" w="100%" mt="8" type="submit">
          Continuar
        </Button>
      </form>
    </Box>
  );
}
