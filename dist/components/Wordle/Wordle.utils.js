export function checkGuess(guess, correctWord) {
    let result = Array(5).fill("gray");
    let correctWordArr = correctWord.split('');
    let guessArr = guess.split('');
    for (let i = 0; i < 5; i++) {
        if (correctWord.includes(guessArr[i])) {
            result[i] = "yellow";
        }
        if (guessArr[i] === correctWordArr[i]) {
            result[i] = "green";
        }
    }
    return result;
}
