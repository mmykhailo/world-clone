import React from "react";
import { render, screen } from "@testing-library/react";
import Gueses from ".";
import TGuesses from "./Guesses.types";

describe("Gueses Component", () => {
  it("renders guesses correctly", () => {
    // Mock guess data
    const mockGuesses: TGuesses.Props = {
      guesses: [
        {
          word: "qwert",
          feedback: ["green", "yellow", "gray", "gray", "green"],
        },
        {
          word: "yuiop",
          feedback: ["gray", "green", "yellow", "green", "gray"],
        },
      ],
    };

    // Render the component
    render(<Gueses {...mockGuesses} />);

    // Check if the correct words are displayed
    mockGuesses.guesses.forEach((guess) => {
      guess.word.split("").forEach((letter) => {
        expect(screen.getByText(letter)).toBeInTheDocument();
      });
    });


    // Check background colors (inline styles)
    const spans = screen.getAllByText(/[a-zA-Z]/);
    spans.forEach((span, index) => {
      const rowIndex = Math.floor(index / 5); 
      const letterIndex = index % 5; // Letter position in the word
      expect(span).toHaveStyle(`background-color: ${mockGuesses.guesses[rowIndex].feedback[letterIndex]}`);
    });
  });
});