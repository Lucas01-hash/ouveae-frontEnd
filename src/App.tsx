

import { Box } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { useForm } from "./hooks/useForm";
import { FormMessage } from "./pages/FormMessage";
import { PersonalInfo } from "./pages/PersonalInfo";
import { RequestsLists } from "./pages/RequestsLists";
import { UserInfos } from "./pages/UserInfos";
import { Visibility } from "./pages/Visibility";

function App() {
  const {entryType, visibility, personalForm, userForm, messageForm, formFinished} = useForm()
  console.log(formFinished)
  return (
    <>
    <Header/>
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
        entryType && visibility=== "public" && userForm && personalForm &&(<FormMessage/>)
  
      }
      {
        (entryType && visibility=== "anonimous")&&(<FormMessage/>)
  
      }
    </Box>
  </>
  );
}

export default App;
