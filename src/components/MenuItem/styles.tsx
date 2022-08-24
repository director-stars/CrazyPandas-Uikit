import styled from "styled-components";
import { StyledMenuItemProps } from "./types";

export const StyledMenuItemContainer = styled.div<StyledMenuItemProps>`
  position: relative;

  ${({ $isActive, $variant, theme }) =>
    $isActive &&
    $variant === "subMenu" &&
    `
      &:before{
        content: "";
        position: absolute;
        bottom: 0;
        height: 4px;
        width: 100%;
        background-color: ${theme.colors.primary};
        border-radius: 2px 2px 0 0;
      }
    `};
`;

const StyledMenuItem = styled.a<StyledMenuItemProps>`
  position: relative;
  display: flex;
  align-items: center;

  // color: ${({ theme, $isActive }) => ($isActive ? theme.colors.secondary : theme.colors.textSubtle)};
  color: ${({ $isActive }) => ($isActive ? "#d63341" : "#fff")};
  // font-size: 16px;
  // font-size: .875rem;
  font-size: large;
  // letter-spacing: 1px;
  // font-family: berlin-sans-regular;
  font-family: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  // letter-spacing: .0892857143em;
  font-weight: 900;
  // font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};
  padding: 0.5rem 0.5rem;
  text-decoration: none;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
  will-change: transform;

  ${({ $statusColor, theme }) =>
    $statusColor &&
    `
    &:after {
      content: "";
      border-radius: 100%;
      background: ${theme.colors[$statusColor]};
      height: 8px;
      width: 8px;
      margin-left: 12px;
    }
  `}

  ${({ $variant }) =>
    $variant === "default"
      ? `
    // padding: 0 16px;
    height: 48px;
  `
      : `
    padding: 4px 4px 0px 4px;
    height: 42px;
  `}

  &:hover {
    // background: ${({ theme }) => theme.colors.tertiary};
    // background-color: #35354720;
    // ${({ $variant }) => $variant === "default" && "border-radius: 16px;"};
    color: rgb(0, 138, 14) !important;
    transition: all 0.5s ease-out;
    transform: translateY(10px);
  }
`;

export default StyledMenuItem;
