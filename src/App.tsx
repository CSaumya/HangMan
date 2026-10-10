import { useCallback, useEffect, useState } from 'react'
import words from './wordList.json'
import { HangmanDrawing } from './components/HangmanDrawing'
import { HangmanWord } from './components/HangmanWord'
import { Keyboard } from './components/Keyboard'


const App = () => {
  const [ wordToGuess ] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  
  const [guessedLetters, setGuessedLetters] = useState<string []>([])

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter : string) => {

    if (guessedLetters.includes(letter) || isLoser || isWinner) return

    setGuessedLetters(currLetters => [...currLetters, letter])

  }, [guessedLetters, isLoser, isWinner])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if(!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }
    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])
  
  return (
    <div className='max-w-[800px] flex flex-col gap-2 m-auto items-center mt-4'>
      <div className='text-2xl text-center text-[#F3F4F4]'>
        {isWinner && "Winner! - refresh to try again"}
        {isLoser && "Nice Try - refresh to try again"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}  reveal={isLoser} />
      <Keyboard disabled = {isLoser || isWinner} activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
        inactiveLetters = {incorrectLetters}
        addGuessedLetter={addGuessedLetter}
       />
    </div>
  )
}

export default App
