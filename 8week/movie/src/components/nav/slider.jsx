import { CloseButton, SidebarContainer } from "./slider.style";
import PropTypes from "prop-types";

export const Sidebar = ({ isOpen, toggleSidebar, children }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <CloseButton onClick={toggleSidebar}>×</CloseButton>
      {children}
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
