import styled from "styled-components";

interface BarProps {
  primary?: boolean;
}

export const Bar = styled.div<BarProps>`
  position: absolute;
  top: 0;
  left: 0;
  // background-color: ${(props) => (props.primary ? props.theme.colors.secondary : `${props.theme.colors.secondary}80`)};
  background-color: #0bda51;
  // border-top-left-radius: 32px;
  // border-bottom-left-radius: 32px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  // height: 16px;
  height: 5px;
  transition: width 200ms ease;
`;

Bar.defaultProps = {
  primary: false,
};

const StyledProgress = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.input};
  border-radius: 32px;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  // height: 16px;
  height: 5px;
  overflow: hidden;
`;

export default StyledProgress;
