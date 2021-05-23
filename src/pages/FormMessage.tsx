import { FormControl } from "@chakra-ui/form-control";
import {
  Box,
  Button,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import React, { FormEvent, useState } from "react";
import { useForm } from "../hooks/useForm";

export function FormMessage() {
  const [topic, setTopic] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setmessage] = useState("")

  const { createFormFinished} = useForm()

  function handleSubmit(event:FormEvent){
    event.preventDefault()
      createFormFinished({topic,
        subject,
        message})
  }

  return (
    <Box p="6" h="100%">
      <form action="" onSubmit={handleSubmit}>
        <FormControl id="tema">
          <FormLabel m="0">Tema:</FormLabel>
          <Select placeholder="selecione" onChange={(event)=>setTopic(event.target.value)}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormControl>
        <FormControl mt="3" id="assunto">
          <FormLabel m="0">Assunto:</FormLabel>
          <Input type="text" placeholder="ex: Infraestrutura"  onChange={(event)=>setSubject(event.target.value)}/>
        </FormControl>
        <FormControl mt="3" id="message">
          <FormLabel m="0">messagem:</FormLabel>
          <Textarea onChange={(event)=>setmessage(event.target.value)}></Textarea>
        </FormControl>
        <FormControl mt="3" id="image">
          <FormLabel m="0">imagem:</FormLabel>
          <Input type="file" />
        </FormControl>
        <Button w="100%" mt="auto" type="submit">
          Enviar
        </Button>
      </form>
    </Box>
  );
}
