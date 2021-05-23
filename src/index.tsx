import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { FormProvider } from "./hooks/useForm";

ReactDOM.render(
  <React.StrictMode>
    <FormProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </FormProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
