import {
  GallowHangerPosition,
  GallowHangerHeight,
  GallowHangerWidth,
  GallowBaseBarWidth,
  GallowBaseBarHeight,
  GallowTopBarHeight,
  GallowTopBarWidth,
  GallowTopBarLeftPosition,
  GallowMainBarWidth,
  GallowMainBarHeight,
} from "sizes";
import styled from "styled-components";
import { BlackColor } from "colors";

export const Hanger = styled.div`
  height: ${GallowHangerHeight}px;
  width: ${GallowHangerWidth}px;
  background: ${BlackColor};
  position: absolute;
  left: ${GallowHangerPosition}px;
`;

export const HangerTopBar = styled.div`
  height: ${GallowTopBarHeight}px;
  width: ${GallowTopBarWidth}px;
  background: ${BlackColor};
  margin-left: ${GallowTopBarLeftPosition}px
`;

export const HangerMainBar = styled.div`
  height: ${GallowMainBarHeight}px;
  width: ${GallowMainBarWidth}px;
  background: ${BlackColor};
  margin-left: ${GallowTopBarLeftPosition}px
`;

export const HangerBaseBar = styled.div`
  height: ${GallowBaseBarHeight}px;
  width: ${GallowBaseBarWidth}px;
  background: ${BlackColor};
`;

// Inline-styles
// <div style={{ height: '50px', width: '10px', background: '#6c3838', position: 'absolute', top: 0, right: 0 }} />
// <div style={{ height: '10px', width: '200px', background: '#6c3838', marginLeft: '120px' }} />
// <div style={{ height: '400px', width: '10px', background: '#6c3838', marginLeft: '120px' }} />
// <div style={{ height: '10px', width: '250px', background: 'green' }} />