import styled from "styled-components";

export default styled.div`
  display: flex;
  width: ${({ width }) => (width ? width : "")};
  height: ${({ height }) => (height ? height : "")};
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  align-items: ${({ align }) => (align ? align : "center")};
  font-size: ${({ fz }) => (fz ? fz : "auto")};
  margin: ${({ margin }) => (margin ? margin : "")};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};
`;
