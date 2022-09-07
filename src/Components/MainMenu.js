import React from "react";
import { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
const MainMenu = () => {
  const { setGameState, setUserName } = useContext(QuizContext);

  return (
    <div className="Menu">
      <label>Enter Your Name</label>
      <input
        type="text"
        placeholder="Ex. John smith"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default MainMenu;
