import React, { useState, useRef, useCallback } from "react";
import { checkGuess } from "./Wordle.utils";
import GuessInput from './GuessInput'
import Guesses from './Guesses'
import TWordle from "./Wordle.types";

const WORDS: string[] = ["water", "otter", "hound", "pizza", "eagle", "fruit", "paper"];
const TARGET_WORD: string = WORDS[Math.floor(Math.random() * WORDS.length)];

const Wordle: TWordle.Wordle = () => {
    const [guesses, setGuesses] = useState<TWordle.GuessResult[]>([]);
    const [currentGuess, setCurrentGuess] = useState<string[]>(Array(5).fill(""));
    const [gameOver, setGameOver] = useState(false);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = useCallback((index: number, value: string) => {
        if (!/^[a-zA-Z]?$/.test(value)) return; // Allow only letters

        const newGuess = [...currentGuess];
        newGuess[index] = value.toLowerCase();
        setCurrentGuess(newGuess);

        // Move to next input if a letter is entered
        if (value && index < 4) {
            inputRefs.current[index + 1]?.focus();
        }
    }, [currentGuess]);

    const handleKeyDown = useCallback((index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace") {
            const newGuess = [...currentGuess];
            if (!newGuess[index] && index > 0) {
                inputRefs.current[index - 1]?.focus(); // Move back
            }
            newGuess[index] = "";
            setCurrentGuess(newGuess);
        }
    }, [inputRefs, currentGuess]);

    const handleSubmit = useCallback(() => {
        if (currentGuess.join("").length !== 5) return;

        const feedback = checkGuess(currentGuess.join(""), TARGET_WORD);
        const newGuesses = [...guesses, { word: currentGuess.join(""), feedback }];
        setGuesses(newGuesses);
        setCurrentGuess(Array(5).fill(""));

        if (currentGuess.join("") === TARGET_WORD || newGuesses.length === 5) {
            setGameOver(true);
        }
    }, [currentGuess, guesses]);

    return (
        <div>
            <h1>Wordle Clone {TARGET_WORD}</h1>
            {gameOver && <h2>{guesses.length === 5 && currentGuess.join("") !== TARGET_WORD ? "Game Over!" : "You Win!"}</h2>}

            <Guesses guesses={guesses} />

            {!gameOver ? (
                <>
                    <div style={{ display: "flex", gap: "5px" }}>
                        {currentGuess.map((letter: any, index: number) => (
                            <GuessInput inputRefs={inputRefs} letter={letter} index={index} handleChange={handleChange} handleKeyDown={handleKeyDown} />
                        ))}
                    </div>
                    <button onClick={handleSubmit}>Submit</button>
                </>
            ) : null}
        </div>
    );
};

export default Wordle;