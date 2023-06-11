// pierwszy parametr to element, domyślnie undefined, drugi to indeks

import { KeyboardButton, KeyboardContainer } from "./Keyboard.styles";

// poza komponentem bo po co obciążać rerenderowaniem
const keys = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode("A".charCodeAt(0) + i)
);

// ZADANIE DOMOWE - OBSŁUGA POLSKICH ZNAKÓW
// pokazać optional props here
type KeyboardProps = {
  disabled: boolean;
  guessedLetters: string[];
  incorrectLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export const Keyboard = (props: KeyboardProps) => {
  return (
    <KeyboardContainer>
      {keys.map((key) => {
        const isGuessed = props.guessedLetters.includes(key);
        const isIncorrect = props.incorrectLetters.includes(key);

        return (
          <KeyboardButton
            onClick={() => props.addGuessedLetter(key)}
            disabled={isGuessed || isIncorrect || props.disabled}
            $disabled={isGuessed || isIncorrect || props.disabled}
            key={key}
          >
            {key}
          </KeyboardButton>
        );
      })}
    </KeyboardContainer>
  );
};
