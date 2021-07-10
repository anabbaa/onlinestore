import React, { useState, useContext } from "react";
import { StoreContext } from "../context";

const LookUp = () => {
  const [userInput, setUserInput] = useState("");
  const contextObj = useContext(StoreContext);
  const changeHandle = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userText = userInput.toLocaleLowerCase().trim();
    contextObj.setStore((prevState) => {
      return { ...prevState, filteredData: contextObj.store.lookFor(userText) };

    });
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="search" type="text"placeholder="search" onChange={changeHandle} value={userInput} />
      <input className="filter" type="submit" value="filter" />
    </form>
  );
};
export default LookUp;