import { GreenColor, LightGreenColor, RedColor } from "colors";
import styled from "styled-components";

// em bazuje na wielkości elementu nadrzędnego - relatywnie czyli jeżeli parent ma 20px to 1.5em to 30px, można zapisać bez 0
export const HangmanWordContainer = styled.div`
  display: flex;
  gap: 0.25em;
  font-size: 6rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: monospace;
  user-select: none;
  margin-bottom: 16px;
`;
// można stylować wszystko
export const LetterPlaceholder = styled.span`
  border-bottom: 0.1em solid ${LightGreenColor};
  user-select: none;
`;

export const Letter = styled.span<{ $isInvalid: boolean }>`
  color: ${(props) => (props.$isInvalid ? RedColor : GreenColor)};
`;
