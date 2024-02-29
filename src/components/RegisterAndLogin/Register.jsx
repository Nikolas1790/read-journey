import {  Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import sprite from '../../img/sprite.svg';
import { Container, ErrorMessagePassword, ErrorMessageStyled, EyeSvg, FormBlock, FormBtn, FormField, FormFieldPassvord, FormFieldPassvordConteiner, FormFields, Img, LinkTo, LogoConteiner, SubmitBlock, Title, TitleSpan } from "./RegisterAndLogin.styled";
import desctopImg from '../../img/fon/desctop-block.jpg';
import Logo from "components/Logo/Logo";


const initialValues = {
  name: '',
  email: '',
  password: '',
};
  
const schema = Yup.object({
  name: Yup.string().required('Required').min(2, "The name must have at least 2 letters"),
  email: Yup.string().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email address').required('Required'),
  password: Yup.string().required('Required').min(7, "Password must be at least 7 characters"),
});

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  // const [emailError, setEmailError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };  
  const handleSubmit = () => {
    
console.log("submit")
  }
  return (
    <Container>

      <FormBlock>
        <LogoConteiner>
          <Logo />
        </LogoConteiner>

        <Title>Expand your mind, reading <TitleSpan>a book</TitleSpan></Title>



        <Formik  initialValues = {initialValues} validationSchema={schema} onSubmit={handleSubmit} >

{({ errors, touched }) => (
  <Form>
    <FormFields>              

      <FormField name="name" type="name" placeholder="Name" error={errors.name && touched.name ? "true" : "false" }/>
      <ErrorMessageStyled name="name" component='div' />

      <FormField name="email" type="email" placeholder="Email" error={errors.email && touched.email ? "true" : "false" }/>
      <ErrorMessageStyled name="email" component='div' />

      {/* {emailError && <EmailErrorMessage >{emailError}</EmailErrorMessage> } */}

      <FormFieldPassvordConteiner>
        <FormFieldPassvord  name="password" type={showPassword ? "text" : "password"} placeholder="Password" error={errors.password && touched.password ? "true" : "false"} />

        {showPassword ? (
        <EyeSvg
          width={20}
          height={20}
          onClick={togglePasswordVisibility}
        >
          <use href={`${sprite}#icon-eye`} />
        </EyeSvg>
          ) : (
        <EyeSvg
          width={20}
          height={20}
          onClick={togglePasswordVisibility}
        >
          <use href={`${sprite}#icon-eye-off`} />
        </EyeSvg>
        )}
      <ErrorMessagePassword name="password" component='div' />
      </FormFieldPassvordConteiner>

      

    </FormFields>
    <SubmitBlock>
        <FormBtn type="submit">Registration</FormBtn>
        <LinkTo to="/login" >
          Already have an account?
        </LinkTo>
      </SubmitBlock>
  </Form>
)}
</Formik>


      </FormBlock>
      










      <Img src={desctopImg} alt="register img" />
    </Container>
  );
}
