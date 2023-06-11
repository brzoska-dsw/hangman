// constant values
export const GallowHangerHeight = 50;
export const GallowHangerWidth = 10;

export const GallowTopBarWidth = 200
export const GallowTopBarHeight = 10

export const GallowBaseBarHeight = 10
export const GallowBaseBarWidth = 250

export const GallowMainBarHeight = 400
export const GallowMainBarWidth = 10

export const HangmanHeadSize = 50
export const HangmanBorderSize = 10

export const HangmanTorsoWidth = 10
export const HangmanTorsoHeight = 100

export const HangmanArmWidth = 100
export const HangmanArmHeight = 10
export const HangmanArmRotation = 30

export const HangmanLegRotation = 60

// calculated (widziałem w projekcie gry gdzie offsety czy inne rzeczy były po prostu na sztywno typu 323px i nikt nie umiał wytłumaczyć czemu tak i czemu tego nie tykać + jakby trzeba było któreś przedłużyć to wszystko zadziała zgodnie z tym np. głowa się przemieści i ciało zgodnie z dlugością belk)
export const GallowTopBarLeftPosition = (GallowBaseBarWidth / 2) - GallowBaseBarHeight / 2
export const GallowHangerPosition = GallowTopBarLeftPosition + GallowTopBarWidth
export const HeadLeftPosition = GallowHangerPosition - HangmanHeadSize / 2 - GallowHangerWidth / 2

export const TorsoLeftPosition = GallowHangerPosition
// HangmanBorderSize * 2 => top and bottom border of head
export const TorsoTopPosition = GallowHangerHeight + HangmanHeadSize + 2 * HangmanBorderSize

export const ArmTopPosition = TorsoTopPosition + HangmanTorsoHeight / 2
export const RightArmPosition = TorsoLeftPosition
export const LeftArmPosition = TorsoLeftPosition - HangmanArmWidth + HangmanTorsoWidth

// 20 = compensation for rotation
export const LegTopPosition = TorsoTopPosition + HangmanTorsoHeight + 20
export const RightLegPosition = TorsoLeftPosition - 20
export const LeftLegPosition = TorsoLeftPosition - HangmanArmWidth + HangmanTorsoWidth + 20