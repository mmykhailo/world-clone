import { checkGuess } from "./Wordle.utils";
test("checkGuess returns correct feedback", () => {
    expect(checkGuess("otter", "water")).toEqual(["gray", "green", "yellow", "green", "green"]);
    expect(checkGuess("eagle", "paper")).toEqual(["gray", "yellow", "gray", "gray", "yellow"]);
});
