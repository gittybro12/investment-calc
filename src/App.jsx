import Header from "./components/header"
import UserInput from "./components/Userinput"
import Results from "./components/Results"
import { useState } from "react"

function App() {
  const[userInput,setUserInput] =  useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
})
const isValid = userInput.duration >= 1
  function handleChange(inputID, newVal){
    setUserInput((current)=>{
        return {...current, [inputID]: +newVal }
    })
  }

  return (
    <>
    <Header/>
    <UserInput UserInput={userInput} onChange={handleChange}/>
    {!isValid  && <p className="center">please enter duration greater than zero</p>}
{  isValid &&    <Results input={userInput} />}
    </>
  )
}

export default App
