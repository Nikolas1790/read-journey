import { MenuContainer } from "./SidebarMenu.styled";

export default function SidebarMenu({ isOpen, onClose }) {
  return (
    <MenuContainer open={isOpen} onClick={onClose}>
     Содержимое меню
  </MenuContainer>
  );
};