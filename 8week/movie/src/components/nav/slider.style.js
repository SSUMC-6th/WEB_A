import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 250px;
  height: 100%;
  background-color: #22264c;
  color: white;
  transition: left 0.3s ease-in-out;
  padding: 20px;
  z-index: 1000;
`;

export const CloseButton = styled.div`
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 20px;
`;
