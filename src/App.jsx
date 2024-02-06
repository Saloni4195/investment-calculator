import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue  //here using + for int value otherwise
                                      // it will concat the new value in the old one
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className="center"> please enter a duration greater than zero.</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  )
}

export default App
