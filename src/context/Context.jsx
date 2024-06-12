import { createContext, useState } from "react";
import runChat from "../config/GeminiApi";
export const Context = createContext();
const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const delay = (index, nextWord) => {
    setTimeout(function () {
      setResult((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const onSent = async (prompt, x) => {
    setResult("");
    setLoading(true);
    setShowResult(true);
    let response;
    if (prompt !== undefined) {
      response = await runChat(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrevPrompt((prev) => [...prev, x]);
      setRecentPrompt(x);
      response = await runChat(x);
    }
    let responseArray = response.split("**");

    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("</br>");
    let newResponseArray = newResponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delay(i, nextWord + " ");
    }
    setLoading(false);
    setInput("");
  };

  const ContextValue = {
    prevPrompt,
    setPrevPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    result,
    input,
    setInput,
    setLoading,
    setResult,
    setShowResult,
    newChat,
  };
  return (
    <Context.Provider value={ContextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
