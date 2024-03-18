import { FormBtn, LinkTo, SubmitBlock } from "./SubmitBlockAutorization.styled";

export default function SubmitBlockRegister() {
  return (    
    <SubmitBlock>
      <FormBtn type="submit">Registration</FormBtn>
      <LinkTo to="/login" >
        Already have an account?
      </LinkTo>
    </SubmitBlock>
  );
}