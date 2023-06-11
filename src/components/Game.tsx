import { useEffect } from "react";
import { useCallback, useState } from "react";
import { getRandomInt } from "utils/utils";
import words from "words";
import {
  FailedButton,
  ResultContainer,
  ResultText,
  SuccessButton,
} from "./Game.styles";
import { HangmanBoard } from "./HangmanBoard";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";

export const Game = () => {
  const [choosenLetters, setChoosenLetters] = useState<string[]>([]);
  const [lettersToGuess, setLettersToGuess] = useState<string[]>([]);
  const [failedGuessAmount, setFailedGuessAmount] = useState(0);

  const incorrectLetters = choosenLetters.filter(
    (letter) => !lettersToGuess.includes(letter)
  );

  const guessedLetters = choosenLetters.filter((letter) =>
    lettersToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = lettersToGuess.every((letter) =>
    choosenLetters.includes(letter)
  );

  // dlaczego używam useCallback?
  const addGuessedLetter = useCallback(
    (letter: string) => {
      setChoosenLetters((currentLetters) => [...currentLetters, letter]);
      if (!lettersToGuess.includes(letter)) {
        setFailedGuessAmount((failedGuessAmount) => failedGuessAmount + 1);
      }
    },
    [lettersToGuess]
  );

  const setNewWord = useCallback(() => {
    const word = words[getRandomInt(0, words.length - 1)].toUpperCase();
    const letters = word.split("");

    setLettersToGuess(letters);
  }, []);

  const resetGame = useCallback(() => {
    setFailedGuessAmount(0);
    setChoosenLetters([]);
    setNewWord();
  }, [setNewWord]);

  useEffect(() => {
    setNewWord();
  }, [setNewWord]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) {
        return;
      }

      e.preventDefault();
      addGuessedLetter(key.toUpperCase());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters, addGuessedLetter]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (key !== "Enter") {
        return;
      }

      e.preventDefault();
      resetGame();
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [resetGame]);

  return (
    <div>
      <HangmanBoard failedGuessAmount={failedGuessAmount} />
      <HangmanWord
        guessedLetters={guessedLetters}
        lettersToGuess={lettersToGuess}
        reveal={isLoser}
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isWinner || isLoser}
          guessedLetters={guessedLetters}
          incorrectLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
      {isWinner && (
        <ResultContainer>
          <ResultText>Wygrałeś! 🏆</ResultText>
          <SuccessButton onClick={resetGame}>Zacznij od nowa</SuccessButton>
        </ResultContainer>
      )}
      {isLoser && (
        <ResultContainer>
          <ResultText>
            Trochę się starałeś, ale jednak przegrałeś! 😞
          </ResultText>
          <FailedButton onClick={resetGame}>Spróbuj jeszcze raz</FailedButton>
        </ResultContainer>
      )}
    </div>
  );
};
