import { GreenColor, RedColor } from "colors";
import styled from "styled-components";

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ResultText = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 32px;
  margin: 0;
`;

// rozszerzanie innych
const ButtonBase = styled.button`
  height: 56px;
  border-radius: 4px;
  padding: 16px 24px 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  border: 0;
  text-transform: none;

  &:hover {
    cursor: pointer;
  }
`;

export const SuccessButton = styled(ButtonBase)`
  background-color: ${GreenColor};
  color: white;
`;

export const FailedButton = styled(ButtonBase)`
  background-color: ${RedColor};
  color: white;
`;
