import { CustomBtn } from "./CustomButton.styled";

export default function CustomButton({ label, onClick, width, height }){
  return (
    <CustomBtn onClick={onClick}  width={width} height={height}>
      {label}
    </CustomBtn>
  );
};