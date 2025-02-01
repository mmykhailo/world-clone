import { jsx as _jsx } from "react/jsx-runtime";
const GuessInput = ({ handleChange, handleKeyDown, index, letter, inputRefs }) => (_jsx("input", { ref: (el) => (inputRefs.current[index] = el), type: "text", maxLength: 1, value: letter, onChange: (e) => handleChange(index, e.target.value), onKeyDown: (e) => handleKeyDown(index, e), style: {
        width: "40px",
        height: "40px",
        textAlign: "center",
        fontSize: "20px",
        textTransform: "uppercase"
    } }, index));
export default GuessInput;
