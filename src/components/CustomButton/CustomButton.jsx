import { CustomBtn } from "./CustomButton.styled";

export default function CustomButton({ className, label, onClick, width, height }){
  return (
    <CustomBtn className={className} onClick={onClick}  width={width} height={height} type="submit"  >
      {label}
    </CustomBtn>
  );
};