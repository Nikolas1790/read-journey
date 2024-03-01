import {  Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import sprite from '../../img/sprite.svg';
import { Container, ErrorMessagePassword, ErrorMessageStyled, EyeSvg, FormBlock, FormBtn, FormField, FormFieldConteiner, FormFieldLabel, FormFieldPassvord, FormFieldPassvordConteiner, FormFields, Img, LinkTo, LogoConteiner, SubmitBlock, Title, TitleSpan } from "./RegisterAndLogin.styled";
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
      <div>  


<FormFieldConteiner>
      <FormFieldLabel htmlFor="name">Name:</FormFieldLabel>
      <FormField name="name" type="name" placeholder="Nik Ovson" error={errors.name && touched.name ? "true" : "false" } />
      <ErrorMessageStyled name="name" component='div' />
</FormFieldConteiner>


<FormFieldConteiner>
      <FormFieldLabel htmlFor="email">Mail:</FormFieldLabel>
      <FormField name="email" type="email" placeholder="nik@google.com" error={errors.email && touched.email ? "true" : "false" } email="true" />
      <ErrorMessageStyled name="email" component='div' />
</FormFieldConteiner>
      {/* {emailError && <EmailErrorMessage >{emailError}</EmailErrorMessage> } */}

      <FormFieldPassvordConteiner>
        <FormFieldLabel htmlFor="password">Password:</FormFieldLabel>
        <FormFieldPassvord  name="password" type={showPassword ? "text" : "password"} placeholder="********" error={errors.password && touched.password ? "true" : "false"}  />

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
    </div>     
      <SubmitBlock>
        <FormBtn type="submit">Registration</FormBtn>
        <LinkTo to="/login" >
          Already have an account?
        </LinkTo>
      </SubmitBlock>

    </FormFields>

  </Form>
)}
</Formik>
      </FormBlock>
      



      <Img src={desctopImg} alt="register img" />
    </Container>
  );
}
