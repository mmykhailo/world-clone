import React from "react";
import TGuessInput from "./GuessInput.types";

const GuessInput: TGuessInput.GuessInput = ({ handleChange, handleKeyDown, index, letter, inputRefs }) => (
    <input
        key={index}
        ref={(el: any) => (inputRefs.current[index] = el)}
        type="text"
        maxLength={1}
        value={letter}
        onChange={(e: { target: { value: string; }; }) => handleChange(index, e.target.value)}
        onKeyDown={(e: any) => handleKeyDown(index, e)}
        style={{
            width: "40px",
            height: "40px",
            textAlign: "center",
            fontSize: "20px",
            textTransform: "uppercase"
        }}
    />
);

export default GuessInput;