

import React from "react";
import { Header } from "./components/Header";
import { FormMenssage } from "./pages/FormMenssage";
import { RequestsLists } from "./pages/RequestsLists";
import { Visibility } from "./pages/Visibility";

function App() {
  return (
    <>
    <Header/>
    {/* <RequestsLists/>  */}
    {/* <Visibility/> */}
    <FormMenssage/>
    </>
  );
}

export default App;
