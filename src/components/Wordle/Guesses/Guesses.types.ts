import type React from 'react'
import type TWordle from '../Wordle.types'

namespace TGuesses {
  export type Props = {
    guesses: TWordle.GuessResult[]
  }

  export type Guesses = React.FC<Props>
}

export default TGuesses
