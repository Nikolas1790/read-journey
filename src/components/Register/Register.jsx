import { Container, FormBlock, Img } from "./Register.styled";
import desctopImg from '../../img/fon/desctop-block.jpg';
export default function Register() {
  return (
    <Container>
      <FormBlock></FormBlock>
      
      <Img src={desctopImg} alt="register img" />
    </Container>
  );
}
