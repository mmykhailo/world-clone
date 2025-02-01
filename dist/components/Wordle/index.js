import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useRef, useCallback } from "react";
import { checkGuess } from "./Wordle.utils";
import GuessInput from './GuessInput';
import Guesses from './Guesses';
const WORDS = ["water", "otter", "hound", "pizza", "eagle", "fruit", "paper"];
const TARGET_WORD = WORDS[Math.floor(Math.random() * WORDS.length)];
const Wordle = () => {
    const [guesses, setGuesses] = useState([]);
    const [currentGuess, setCurrentGuess] = useState(Array(5).fill(""));
    const [gameOver, setGameOver] = useState(false);
    const inputRefs = useRef([]);
    const handleChange = useCallback((index, value) => {
        var _a;
        if (!/^[a-zA-Z]?$/.test(value))
            return; // Allow only letters
        const newGuess = [...currentGuess];
        newGuess[index] = value.toLowerCase();
        setCurrentGuess(newGuess);
        // Move to next input if a letter is entered
        if (value && index < 4) {
            (_a = inputRefs.current[index + 1]) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [currentGuess]);
    const handleKeyDown = useCallback((index, e) => {
        var _a;
        if (e.key === "Backspace") {
            const newGuess = [...currentGuess];
            if (!newGuess[index] && index > 0) {
                (_a = inputRefs.current[index - 1]) === null || _a === void 0 ? void 0 : _a.focus(); // Move back
            }
            newGuess[index] = "";
            setCurrentGuess(newGuess);
        }
    }, [inputRefs, currentGuess]);
    const handleSubmit = useCallback(() => {
        if (currentGuess.join("").length !== 5)
            return;
        const feedback = checkGuess(currentGuess.join(""), TARGET_WORD);
        const newGuesses = [...guesses, { word: currentGuess.join(""), feedback }];
        setGuesses(newGuesses);
        setCurrentGuess(Array(5).fill(""));
        if (currentGuess.join("") === TARGET_WORD || newGuesses.length === 5) {
            setGameOver(true);
        }
    }, [currentGuess, guesses]);
    return (_jsxs("div", { children: [_jsxs("h1", { children: ["Wordle Clone ", TARGET_WORD] }), gameOver && _jsx("h2", { children: guesses.length === 5 && currentGuess.join("") !== TARGET_WORD ? "Game Over!" : "You Win!" }), _jsx(Guesses, { guesses: guesses }), !gameOver ? (_jsxs(_Fragment, { children: [_jsx("div", { style: { display: "flex", gap: "5px" }, children: currentGuess.map((letter, index) => (_jsx(GuessInput, { inputRefs: inputRefs, letter: letter, index: index, handleChange: handleChange, handleKeyDown: handleKeyDown }))) }), _jsx("button", { onClick: handleSubmit, children: "Submit" })] })) : null] }));
};
export default Wordle;
