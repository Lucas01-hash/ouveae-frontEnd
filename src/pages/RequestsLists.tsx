import { Button, VStack } from "@chakra-ui/react";
import React from "react";
import { IoMegaphone, IoChatbubbleEllipsesSharp } from "react-icons/io5";
import {FaHandPointer} from "react-icons/fa"
import { BiDislike, BiLike } from "react-icons/bi";
export function RequestsLists() {
  return (
    <VStack spacing={3} p="4">
      <Button leftIcon={<IoMegaphone />} colorScheme="red" variant="solid" w="100%">
        DENÚNCIA
      </Button>
      <Button leftIcon={<BiDislike />} variant="solid" color="white" w="100%" background="red.400">
        RECLAMAÇÃO
      </Button>
      <Button variant="solid" leftIcon={<BiLike/>} colorScheme="blue" w="100%">
        ELOGIO
      </Button>
      <Button variant="solid" leftIcon={<FaHandPointer />}  colorScheme="orange" w="100%">
        SOLICITAÇÃO
      </Button>
      <Button variant="solid" leftIcon={<IoChatbubbleEllipsesSharp />} colorScheme="green" w="100%">
        SUGESTÃO
      </Button>
    </VStack>
  );
}
