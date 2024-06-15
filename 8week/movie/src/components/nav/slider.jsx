import { SidebarContainer } from "./slider.style";
import PropTypes from "prop-types";

export const Sidebar = ({ isOpen, children }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      {/* <CloseButton onClick={toggleSidebar}></CloseButton> */}
      {children}
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
