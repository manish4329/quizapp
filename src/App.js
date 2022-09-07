import "./App.css";
import React, { useState } from "react";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndGame from "./Components/EndGame";
import { QuizContext } from "./Helpers/Context";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <h1>Quiz app</h1>
      <QuizContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endgame" && <EndGame />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
