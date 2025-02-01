import { jsx as _jsx } from "react/jsx-runtime";
const Gueses = ({ guesses }) => guesses.map((guess, i) => (_jsx("div", { style: { display: "flex" }, children: guess.word.split("").map((letter, index) => (_jsx("span", { style: {
            backgroundColor: guess.feedback[index],
            padding: "10px",
            margin: "5px",
            display: "inline-block",
            width: "30px",
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "bold"
        }, children: letter }, index))) }, i)));
export default Gueses;
