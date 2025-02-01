import React from "react";
import TGuesses from "./Guesses.types";

const Gueses: TGuesses.Guesses = ({ guesses }) => guesses.map((guess, i) => (
  <div key={i} style={{ display: "flex" }}>
    {guess.word.split("").map((letter, index) => (
      <span key={index} style={{
        backgroundColor: guess.feedback[index],
        padding: "10px",
        margin: "5px",
        display: "inline-block",
        width: "30px",
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "bold"
      }}>
        {letter}
      </span>
    ))}
  </div>
))

export default Gueses;