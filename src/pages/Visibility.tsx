import { Button, VStack } from "@chakra-ui/react";
import {FaUserSecret, FaUserAlt} from "react-icons/fa"
import { useForm } from "../hooks/useForm";
export function Visibility() {

  const {changeVisibility} = useForm()

  function newVisibility(value:"anonimous" | "public"){
    changeVisibility(value)
  }

  return (
    <VStack spacing={3} p="4">
      <Button
        leftIcon={<FaUserAlt/>}
        colorScheme="blue"
        variant="solid"
        w="100%"
        onClick={()=>newVisibility("public")}
      >
        QUERO ME IDENTIFICAR
      </Button>
      <Button
        leftIcon={<FaUserSecret />}
        variant="solid"
        color="white"
        w="100%"
        background="red.400"
        onClick={()=>newVisibility("anonimous")}
      >
        NÃO QUERO ME IDENTIFICAR
      </Button>
    </VStack>
  );
}
