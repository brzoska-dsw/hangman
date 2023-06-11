import { BodyParts } from "models/enums/BodyParts";
import { LimbPlacement } from "models/enums/LimbPlacement";
import { ReactElement, useEffect } from "react";
import { useState } from "react";
import { Arm, Head, Leg, Torso } from "./Hangman.styles";

interface HangmanProps {
  failedGuessAmount: number;
}

export const Hangman = (props: HangmanProps) => {
  const [visibleParts, setVisibleParts] = useState<ReactElement[]>([]);

  useEffect(() => {
    let newBodyPart: ReactElement;

    switch (props.failedGuessAmount) {
      case BodyParts.Head:
        newBodyPart = <Head />;
        break;
      case BodyParts.Torso:
        newBodyPart = <Torso />;
        break;
      case BodyParts.LeftArm:
        newBodyPart = <Arm $placement={LimbPlacement.Left} />;
        break;
      case BodyParts.RightArm:
        newBodyPart = <Arm $placement={LimbPlacement.Right} />;
        break;
      case BodyParts.RightLeg:
        newBodyPart = <Leg $placement={LimbPlacement.Right} />;
        break;
      case BodyParts.LeftLeg:
        newBodyPart = <Leg $placement={LimbPlacement.Left} />;
        break;
      default:
        setVisibleParts([]);
        return;
    }

    setVisibleParts((v) => [...v, newBodyPart]);
  }, [props.failedGuessAmount]);

  return <div>{visibleParts.map((x) => x)}</div>;
};
