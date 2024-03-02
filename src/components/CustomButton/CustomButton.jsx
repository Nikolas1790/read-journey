import { CustomBtn } from "./CustomButton.styled";

export default function CustomButton({ label, onClick, width }){
  return (
    <CustomBtn onClick={onClick}  width={width} >
      {label}
    </CustomBtn>
  );
};