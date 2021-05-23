import { Button, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoMegaphone, IoChatbubbleEllipsesSharp } from "react-icons/io5";
import {FaHandPointer} from "react-icons/fa"
import { BiDislike, BiLike } from "react-icons/bi";
import { useForm } from "../hooks/useForm";
import { api } from "../services/api";

interface RequestsListsProps{}

export function RequestsLists({}:RequestsListsProps) {

  useEffect(()=>{
    api.get("/lista.json").then((response)=>{
      console.log(response.data)
    })
  }, [])

  const {changeEntryType} = useForm()

  function selectType(event:any){
    changeEntryType(Number(event.target.id))
  }

  return (
    <VStack spacing={3} p="4">
      <Button onClick={selectType} id="1" leftIcon={<IoMegaphone />} colorScheme="red" variant="solid" w="100%">
        DENÚNCIA
      </Button>
      <Button onClick={selectType} id="2" leftIcon={<BiDislike />} variant="solid" color="white" w="100%" background="red.400">
        RECLAMAÇÃO
      </Button>
      <Button onClick={selectType} id="3" variant="solid" leftIcon={<BiLike/>} colorScheme="blue" w="100%">
        ELOGIO
      </Button>
      <Button onClick={selectType} id="4" variant="solid" leftIcon={<FaHandPointer />}  colorScheme="orange" w="100%">
        SOLICITAÇÃO
      </Button>
      <Button onClick={selectType} id="5" variant="solid" leftIcon={<IoChatbubbleEllipsesSharp />} colorScheme="green" w="100%">
        SUGESTÃO
      </Button>
    </VStack>
  );
}
