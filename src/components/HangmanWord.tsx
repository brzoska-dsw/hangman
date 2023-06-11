import {
  HangmanWordContainer,
  Letter,
  LetterPlaceholder,
} from "./HangmanWord.styles";

type HangmanWordProps = {
  guessedLetters: string[];
  lettersToGuess: string[];
  reveal: boolean;
};

// nieprzełamywalna spacja - a div usually needs at least a non-breaking space (&nbsp;) in order to have a width.
const nbsp = "\u00A0";

export const HangmanWord = (props: HangmanWordProps) => {
  return (
    <HangmanWordContainer>
      {props.lettersToGuess.map((letter, index) => (
        <LetterPlaceholder key={index}>
          <Letter
            $isInvalid={!props.guessedLetters.includes(letter) && props.reveal}
          >
            {props.guessedLetters.includes(letter) || props.reveal
              ? letter
              : nbsp}
          </Letter>
        </LetterPlaceholder>
      ))}
    </HangmanWordContainer>
  );
};
