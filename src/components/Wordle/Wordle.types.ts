import type React from 'react'

namespace TWordle {
  export type LetterResult = "gray" | "yellow" | "green";

  export type GuessResult = {
    word: string;
    feedback: LetterResult[];
  }
  export type Props = {}
  export type Wordle = React.FC<Props>
}

export default TWordle
