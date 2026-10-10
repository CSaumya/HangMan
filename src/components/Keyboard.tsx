
const keys = [
  "a", "b", "c", "d", "e", "f", "g",
  "h", "i", "j", "k", "l", "m", "n",
  "o", "p", "q", "r", "s", "t", "u",
  "v", "w", "x", "y", "z",
];

type KeyboardProps = {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <div className="grid grid-cols-7 gap-2 mt-4">
      {keys.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);

        return (
          <button
            key={key}
            onClick={() => addGuessedLetter(key)}
            className={`
              rounded-md border-2 bg-[#853953]
              p-2.5 text-2xl font-bold uppercase
              transition-colors duration-200
              ${
                isActive
                  ? "bg-green-500 text-white"
                  : isInactive
                    ? "bg-red-500 text-white opacity-50"
                    : "bg-white text-black hover:bg-gray-200"
              }
              disabled:cursor-not-allowed
            `}
            disabled={isInactive || isActive || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
