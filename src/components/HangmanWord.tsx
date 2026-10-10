
type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div className="flex gap-[0.25em] text-[4rem] font-bold uppercase font-mono">
      {wordToGuess.split("").map((letter, index) => {
        const isGuessed = guessedLetters.some(
          (guessedLetter) =>
            guessedLetter.toLowerCase() === letter.toLowerCase()
        );

        return (
          <span
            className="border-b-[0.1em] border-[#F3F4F4]"
            key={index}
          >
            <span
              className={
                isGuessed || reveal
                  ? `visible ${!isGuessed && reveal ? "text-red-500 " : "text-[#F3F4F4]"}`
                  : "invisible"
              }
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
}
