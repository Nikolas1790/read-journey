import { FormBtn, LinkTo, SubmitBlock } from "./SubmitBlockAutorization.styled";

export default function SubmitBlockLogin() {
  return (    
    <SubmitBlock>
      <FormBtn type="submit">Log In</FormBtn>
      <LinkTo to="/register" >
        Don't have an account?  
      </LinkTo>
    </SubmitBlock>
  );
}
