

import { Box, Button, Flex, FormControl,Text, FormLabel, Heading, IconButton, Input, VStack, Tag, TagLabel } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { useForm } from "./hooks/useForm";
import { FormMessage } from "./pages/FormMessage";
import { PersonalInfo } from "./pages/PersonalInfo";
import { RequestsLists } from "./pages/RequestsLists";
import { Response } from "./pages/Response";
import { UserInfos } from "./pages/UserInfos";
import {FaSearch, FaUser} from "react-icons/fa"
import { Visibility } from "./pages/Visibility";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, { FormEvent, useEffect, useState } from "react";
import { Divider, FormGroup } from "@material-ui/core";
import { api } from "./services/api";

export default function App() {
  return (
    <>
    <Header/>
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/protocolo" exact>
            <Protocolo />
          </Route>
          <Route path="/solicitacao" exact>
            <Ouvidoria />
          </Route>
        </Switch>
    </Router>
    </>
  );
}

function Home() {
  return (
    <VStack mx="auto" mt="4"  direction="column" maxW="520px" spacing="4">
      <Link to="/protocolo"><Button w="100%" colorScheme="blue" variant="outline"  cursor="pointer">Consultar protocolo</Button></Link>
      <Link to="/solicitacao" ><Button w="100%" colorScheme="red" cursor="pointer">Realizar solicitação</Button></Link>
    </VStack>
  );
}

interface formFinished{
  visibility: "anonimous" | "public" | null,
 name:string | null,
 phone: string | null,
 district: string | null,
 gender:string | null,
 age_group: string | null,
 subject: string | null,
 message: string | null,
 email: string | null,
 source: number | null,
 entry_type: number | null,
 topic: string | null,
 protocol: string,
 created:string
}

function Protocolo() {

  const [filter, setFilter] = useState("")
  const [protocol, setProtocol] = useState<formFinished>()
 

  return (
    <Flex mx="auto" mt="4" p="4"  direction="column" maxW="520px" spacing="4">
      <form onSubmit={(event:FormEvent)=>{
        event.preventDefault()
        api.get(`/entry/?protocol=${filter}`).then((response)=>{
          console.log(response.data)
          setProtocol(response.data[0])
          if(response.data.length==0){
            alert("protocolo não encontrado!")
          }
        })
      }}>
        <FormControl>
        <FormLabel m="0">Pesquise seu protocolo:</FormLabel>
        <Flex>
        <Input type="text" onChange={(event)=>setFilter(event.target.value)}/>
        <IconButton
          colorScheme="blue"
          aria-label="Search database"
          icon={<FaSearch />}
          type="submit"
        />
        </Flex>
        </FormControl>
      </form>
      {
        protocol ? (
          <Flex mt="4" direction="column">
        <Flex justify="space-between" >
        <Heading as="h6" fontSize="lg">Protocolo: { protocol ? (protocol.protocol):""}
        <Tag
      size="sm"
      borderRadius="full"
      variant="solid"
      colorScheme="gray"
    >
      <TagLabel>Em andamento</TagLabel>
    </Tag>
        </Heading>
        <Text as="span">{protocol ? (new Intl.DateTimeFormat('pt-br', {year: 'numeric', month: 'numeric', day: 'numeric',
        hour12: false,
        timeZone: 'America/Sao_Paulo'}).format(new Date(protocol.created))):""}</Text>
        </Flex>
        <Divider/>
        <Text display="flex" alingn="center"><FaUser/> {protocol ? (`${protocol.name} - ${protocol.email}`):""}</Text>
        <Heading as="h6"  fontSize="2xl">{protocol ? (protocol.subject):""}</Heading>
        <Text mt="2">{protocol ? (protocol.message):""}</Text>
      </Flex>
        ):(
          <></>
        )
      }

      
    </Flex>
  );
}

function Ouvidoria() {
  const {entryType, visibility, personalForm, userForm, messageForm, formFinished, isFormOk} = useForm()
  return (
    <>
    <Box maxW="720px" mx="auto">
    {!entryType&&<RequestsLists/>}
    {
      entryType && !visibility && (<Visibility/>)
    }
    {
      entryType && visibility=== "public" &&!personalForm &&(<PersonalInfo/>)

    }
        {
      entryType && visibility=== "public" && personalForm&&!userForm &&(<UserInfos/>)

    }
      {
        entryType && visibility=== "public" && userForm && personalForm &&!isFormOk &&(<FormMessage/>)
  
      }
      {
        entryType && visibility=== "anonimous" && !messageForm && !isFormOk &&(<FormMessage/>)
  
      }
      {
        isFormOk && (<Response/>)
      }
    </Box>
  </>
  );
}