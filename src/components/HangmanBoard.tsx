import { Hangman } from "./Hangman/Hangman";
import { Gallow } from "./Gallow/Gallow";

interface HangmanBoardProps {
  failedGuessAmount: number;
}

export const HangmanBoard = (props: HangmanBoardProps) => {
  return (
    <div style={{ position: "relative" }}>
      <Hangman failedGuessAmount={props.failedGuessAmount} />
      <Gallow />
    </div>
  );
};
