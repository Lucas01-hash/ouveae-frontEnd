import { Alert, AlertIcon, AlertTitle, AlertDescription, Text, Flex } from "@chakra-ui/react";

import {Link} from "react-router-dom"
import React from "react";
import { useForm } from "../hooks/useForm";

export function Response(){

    const {responseProtocol} = useForm()

    return(
        <>
        <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        // height="200px"
        mt="8"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
            Solicitação enviada com sucesso!        
        </AlertTitle>
        <AlertDescription maxWidth="md">
            Obrigado por entrar em contato com nossa ouvidoria! faremos o possível para lhe responder o mais rápido possível.
            salve o protocolo: <Text as="strong" fontWeight="bold">{responseProtocol}</Text> para acompanhar sua solicitação.
        </AlertDescription>
      </Alert>
      <Flex w="100%" mt="4" justify="center" alingn="center">
      <Link to="/protocolo" >Acessar protocolo</Link>
      </Flex>
      </>
    )
}