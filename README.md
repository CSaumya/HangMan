# 🎮 Hangman Game

A classic **Hangman word-guessing game** built with React, TypeScript, and Tailwind CSS. Guess the hidden word one letter at a time before you run out of attempts!

## ✨ Features

- ⌨️ Interactive on-screen keyboard
- 🖥️ Physical keyboard support for guessing letters
- 🎨 Visual hangman drawing that updates with incorrect guesses
- 🟢 Correct guesses and 🔴 incorrect guesses are highlighted
- 🏆 Win and lose detection
- 👀 Automatically reveals the correct word when you lose
- 📱 Responsive layout with Tailwind CSS

## 🛠️ Tech Stack

- **React** — UI development
- **TypeScript** — Type safety
- **Tailwind CSS** — Styling and responsive layouts
- **Vite** — Development server and build tool

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and npm installed.

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd hangman
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## 🎮 How to Play

1. A random word is selected, and its letters are hidden.
2. Guess letters using the on-screen keyboard or your physical keyboard.
3. Correct guesses reveal the matching letters.
4. Incorrect guesses add a new part to the hangman drawing.
5. Reveal the entire word by guessing correctly before reaching six incorrect guesses.
6. If you run out of attempts, the game reveals the word.



## 📂 Project Structure

```text
src/
├── components/
│   ├── HangmanDrawing.tsx
│   ├── HangmanWord.tsx
│   └── Keyboard.tsx
├── wordList.json
├── App.tsx
├── main.tsx
└── index.css
```

*Your exact folder structure may vary depending on your setup.*

## 📚 What I Learned

- Building reusable React components with TypeScript
- Managing game state using React hooks
- Handling keyboard and click events
- Implementing conditional rendering
- Styling interactive components with Tailwind CSS
- Managing win/loss conditions and dynamic UI updates

## 🔮 Future Improvements

- Add a restart button to start a new round without refreshing
- Add difficulty levels
- Track scores and consecutive wins
- Add hints for difficult words
- Include sound effects and animations

## 👩‍💻 Author

**Saumya Chaudhary**


---

If you enjoyed this project, consider giving the repository a ⭐!
