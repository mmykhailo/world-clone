import TWordle from "./Wordle.types";

export function checkGuess(guess: string, correctWord: string): TWordle.LetterResult[] {
  let result: TWordle.LetterResult[] = Array(5).fill("gray");
  let correctWordArr = correctWord.split('');
  let guessArr = guess.split('');

  for (let i = 0; i < 5; i++) {
    if(correctWord.includes(guessArr[i])){
      result[i] = "yellow";
    }
    if (guessArr[i] === correctWordArr[i]) {
      result[i] = "green";
    }
  }

  return result
}