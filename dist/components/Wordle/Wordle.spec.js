import { checkGuess } from "./Wordle.utils";
describe("checkGuess", () => {
    it("returns all green when the guess is correct", () => {
        const result = checkGuess("apple", "apple");
        expect(result).toEqual(["green", "green", "green", "green", "green"]);
    });
    it("returns all gray when the guess is completely wrong", () => {
        const result = checkGuess("xxxxx", "apple");
        expect(result).toEqual(["gray", "gray", "gray", "gray", "gray"]);
    });
    it("returns yellow for correct letters in the wrong position", () => {
        const result = checkGuess("leapp", "apple");
        expect(result).toEqual(["yellow", "yellow", "yellow", "yellow", "yellow"]);
    });
    it("handles a mix of green, yellow, and gray", () => {
        const result = checkGuess("alley", "apple");
        expect(result).toEqual(["green", "yellow", "yellow", "yellow", "gray"]);
    });
    it("correctly handles duplicate letters", () => {
        const result = checkGuess("paper", "apple");
        expect(result).toEqual(["yellow", "yellow", "green", "yellow", "gray"]);
    });
});
