import { CustomBtn } from "./CustomButton.styled";

export default function CustomButton({ className, label, onClick, prop }){
  return (
    <CustomBtn className={className} onClick={onClick} type="submit" prop={prop}  >
      {label}
    </CustomBtn>
  );
};