import { RedColor } from "colors";
import { LimbPlacement } from "models/enums/LimbPlacement";
import {
  TorsoLeftPosition,
  GallowHangerHeight,
  HangmanTorsoHeight,
  HangmanTorsoWidth,
  HangmanHeadSize,
  HeadLeftPosition,
  TorsoTopPosition,
  HangmanBorderSize,
  HangmanArmHeight,
  HangmanArmWidth,
  ArmTopPosition,
  LeftArmPosition,
  RightArmPosition,
  HangmanArmRotation,
  LegTopPosition,
  HangmanLegRotation,
  LeftLegPosition,
  RightLegPosition,
} from "sizes";
import styled from "styled-components";

export const Head = styled.div`
  height: ${HangmanHeadSize}px;
  width: ${HangmanHeadSize}px;
  border-radius: 100%;
  border: ${HangmanBorderSize}px solid ${RedColor};
  position: absolute;
  top: ${GallowHangerHeight}px;
  left: ${HeadLeftPosition}px;
`;

export const Torso = styled.div`
  height: ${HangmanTorsoHeight}px;
  width: ${HangmanTorsoWidth}px;
  background: ${RedColor};
  position: absolute;
  top: ${TorsoTopPosition}px;
  left: ${TorsoLeftPosition}px;
`;

export const Arm = styled.div<{ $placement: LimbPlacement }>`
  height: ${HangmanArmHeight}px;
  width: ${HangmanArmWidth}px;
  background: ${RedColor};
  position: absolute;
  top: ${ArmTopPosition}px;
  left: ${(props) =>
    props.$placement === LimbPlacement.Left
      ? LeftArmPosition
      : RightArmPosition}px;
  rotate: ${(props) =>
    props.$placement === LimbPlacement.Left
      ? -HangmanArmRotation
      : HangmanArmRotation}deg;
`;

export const Leg = styled.div<{ $placement: LimbPlacement }>`
  height: ${HangmanArmHeight}px;
  width: ${HangmanArmWidth}px;
  background: ${RedColor};
  position: absolute;
  top: ${LegTopPosition}px;
  left: ${(props) =>
    props.$placement === LimbPlacement.Left
      ? LeftLegPosition
      : RightLegPosition}px;
  rotate: ${(props) =>
    props.$placement === LimbPlacement.Left
      ? -HangmanLegRotation
      : HangmanLegRotation}deg;
`;