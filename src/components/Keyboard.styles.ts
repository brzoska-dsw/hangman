import { BlackColor, GreenColor, LightGreenColor } from "colors";
import styled from "styled-components";

// czym są rem? relative to root element font size - relatywnie do wielkości ustawionej ma HTML np. 14px to 1.5 rem to 21px
// trzeba uważać na ; bo potem całe CSSy lecą
export const KeyboardContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 16px;
  flex-wrap: wrap;
`;

export const KeyboardButton = styled.button<{ $disabled: boolean }>`
  flex: 1 0 6%;
  background: none;
  border: 2px solid ${GreenColor};
  border-radius: 12px;
  font-size: 24px;
  text-transform: uppercase;
  padding: 12px;
  font-weight: bold;
  cursor: pointer;
  color: ${BlackColor};
  user-select: none;
  opacity: ${(props) => (props.$disabled ? 0.3 : 1)};

  &:hover {
    background-color: ${(props) =>
      props.$disabled ? "none" : LightGreenColor};
  }
`;
