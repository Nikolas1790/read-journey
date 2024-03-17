import { BtnClose, MenuContainer, NavBurgerMenu } from "./SidebarMenu.styled";
import sprite from '../../img/sprite.svg';
import { PagesNav } from "components/Header/Header.styled";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { logOut } from "../../redux/auth/operationsAuth";
import CustomButton from "components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

export default function SidebarMenu({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    try {
      await dispatch(logOut()).unwrap();
      navigate('/register');
    } catch (error) {
      toast.error("Log out failed. Something went wrong.");
    }
  };  

  return (
    <MenuContainer open={isOpen}>
      <BtnClose  onClick={onClose}>
        <svg width={28} height={28}>
          <use href={`${sprite}#icon-x`} />
        </svg>  
      </BtnClose>

      <NavBurgerMenu>
        <PagesNav to="/recommended" >Home</PagesNav>
        <PagesNav to="/library" >My library</PagesNav>   
      </NavBurgerMenu>
      <div>
        <CustomButton label="Log out" onClick={handleButtonClick} />
      </div>
    </MenuContainer>
  );
};