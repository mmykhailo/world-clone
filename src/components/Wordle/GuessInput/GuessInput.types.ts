import type React from 'react'

namespace TGuessInput {
  export type Props = {
    handleChange: (index: number, value: string) => void,
    handleKeyDown: (index: number, e: React.KeyboardEvent<HTMLInputElement>) => void,
    index: number,
    letter: string,
    inputRefs: React.RefObject<(HTMLInputElement | null)[]>
  }

  export type GuessInput = React.FC<Props>
}

export default TGuessInput
