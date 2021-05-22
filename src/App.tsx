

import React from "react";
import { Header } from "./components/Header";
import { FormMenssage } from "./pages/FormMenssage";
import { PersonalInfo } from "./pages/PersonalInfo";
import { RequestsLists } from "./pages/RequestsLists";
import { UserInfos } from "./pages/UserInfos";
import { Visibility } from "./pages/Visibility";

function App() {
  return (
    <>
    <Header/>
    {/* <RequestsLists/>  */}
    {/* <Visibility/> */}
    {/* <FormMenssage/> */}
    {/* <UserInfos/> */}
    <PersonalInfo/>
    </>
  );
}

export default App;
