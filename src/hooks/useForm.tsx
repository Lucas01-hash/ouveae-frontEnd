import {
    createContext,
    ReactNode,
    useContext,
    useState,
  } from "react";
    
  interface personalForm {
    name:string;
    age:string;
    gender:string | null ;
  }
  interface userForm {
    email:string;
    phone:string;
    bairro:string;
  }
  interface messageForm {
    topic:string;
    subject:string;
    message:string;
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
}
  
  
  interface FormProviderProps {
    children: ReactNode;
  }
  
  interface FormContextData {
    entryType:number;
    changeEntryType:(id:number)=>void
    changeVisibility:(value:"anonimous" | "public")=>void
    visibility:"anonimous" | "public" | null
    personalForm:personalForm |null
    userForm:userForm |null
    changePersonalForm:(value:personalForm)=>void
    changeUserForm:(value:userForm)=>void
    messageForm:messageForm |null
    changemessageForm:(value:messageForm)=>void
    createFormFinished:(value:messageForm)=>void
    formFinished:formFinished | null



  }
  
  export const FormContext = createContext<FormContextData>(
    {} as FormContextData
  );
  
  export function FormProvider({ children }: FormProviderProps) {
    const [entryType, setEntryType] = useState<number>(0)
    const [visibility, setVisibility] = useState<"anonimous" | "public" | null>(null)
    const [personalForm,setPersonalForm] = useState<personalForm | null>(null)
    const [userForm,setUserForm] = useState<userForm | null>(null)
    const [messageForm,setmessageForm] = useState<messageForm | null>(null)
    const [formFinished,setFormFinished] = useState<formFinished | null>(null)




    function changeEntryType(id:number){
        setEntryType(id)
    }
    function changeVisibility(value:"anonimous" | "public" | null){
        setVisibility(value)
    }
    function changePersonalForm(value:personalForm){
        setPersonalForm(value)
    }
    function changeUserForm(value:userForm){
        setUserForm(value)
    }
    function changemessageForm(value:messageForm){
        setmessageForm(value)
    }
    function createFormFinished(value:messageForm){
        setFormFinished({
            "visibility": visibility,
            name: personalForm && (personalForm.name),
            phone: userForm && (userForm.phone),
            district: userForm && (userForm.bairro),
            gender: personalForm && (personalForm.gender),
            age_group: personalForm && (personalForm.age) ,
            subject: value.subject,
            message: value.message,
            email: userForm && userForm.email,
            source: 1,
            entry_type: entryType,
            topic: value.topic,
        })
    }
  
   
    return (
      <FormContext.Provider
        value={{ entryType, 
            changeEntryType, 
            changeVisibility, 
            visibility, 
            changePersonalForm, 
            personalForm, 
            userForm, 
            changeUserForm, 
            changemessageForm,
            messageForm,
            createFormFinished,
            formFinished
        }}
      >
        {children}
      </FormContext.Provider>
    );
  }
  
  export function useForm() {
    const context = useContext(FormContext);
    return context;
  }