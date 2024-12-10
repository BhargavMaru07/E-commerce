import { useState } from "react";
import MyContext from "./MyContext";

export const MyState = ({ children }) => {
  let [mode, setMode] = useState("light");
  let [loading,setLoading] = useState(false)

  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor="white";
    }
  };
  return (
    //for multiple value, we create object and wrape all values in it
    <MyContext.Provider value={{ mode, toggleMode, loading, setLoading }}>
      {children}
    </MyContext.Provider> 
  );
};
