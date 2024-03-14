import Logo from "components/Logo/Logo";
import {BlockMainInf, BlockNav, HeaderContainer, Initials, PagesNav, UserBar, UserName } from "./Header.styled";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "components/CustomButton/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operationsAuth";
import { toast } from "react-toastify";
import {  selectUser } from "../../redux/auth/selectorAuth";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {name} = useSelector(selectUser);  
  const firstLetterAvatar =  name?.slice(0, 1).toUpperCase();

  const handleButtonClick = async () => {
    try {
      await dispatch(logOut()).unwrap();
      navigate('/register');
    } catch (error) {
      toast.error("Log out failed. Something went wrong.");
    }
  };  

  return (
    <HeaderContainer>
      <BlockMainInf>
        <Link to="/recommended">
          <Logo />
        </Link>        

        <BlockNav>
            <PagesNav to="/recommended" >Home</PagesNav>
            <PagesNav to="/library" >My library</PagesNav>        
        </BlockNav>

        <UserBar>
          <Initials>{firstLetterAvatar}</Initials>
          <UserName>{name}</UserName>
          <CustomButton label="Log out" onClick={handleButtonClick} width="114px" />
        </UserBar>

      </BlockMainInf>
    </HeaderContainer>
  );
};
