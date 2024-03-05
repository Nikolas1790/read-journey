import {  Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import sprite from '../../img/sprite.svg';
import { Container, ErrorMessagePassword, ErrorMessageStyled, EyeSvg, FormBlock, FormField, FormFieldConteiner, FormFieldLabel, FormFieldPassvord, FormFieldPassvordConteiner, FormFields} from "./RegisterAndLogin.styled";

import ImgAutorization from 'components/ImgAuthorization/ImgAuthorization';
import LogoTitleBlock from 'components/LogoTitleBlock/LogoTitleBlock';
import SubmitBlockRegister from 'components/SubmitBlockAutorization/SubmitBlockRegister';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';

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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };  
  
  const handleSubmit = async (values) => {
    try {
      await dispatch(register(values)).unwrap();
      navigate('/recommended');
    } catch (error) {
      if (error === "Request failed with status code 409") {
        toast.error("User with this email already exists.");
      } else {
        toast.error("Registration failed. Please try again later.");
      }
    }
  }
  return (
    <Container>
      <FormBlock>        
        <LogoTitleBlock />
        <Formik  initialValues = {initialValues} validationSchema={schema} onSubmit={handleSubmit} >

          {({ errors, touched }) => (
            <Form>
              <FormFields>  
                <div>  

                  <FormFieldConteiner>
                    <FormFieldLabel htmlFor="name">Name:</FormFieldLabel>
                    <FormField id="name" name="name" type="name" placeholder="Nik Ovson" error={errors.name && touched.name ? "true" : "false" } />
                    <ErrorMessageStyled name="name" component='div' />
                  </FormFieldConteiner>
          
          
                  <FormFieldConteiner>
                    <FormFieldLabel htmlFor="email">Mail:</FormFieldLabel>
                    <FormField id="email" name="email" type="email" placeholder="nik@google.com" error={errors.email && touched.email ? "true" : "false" } email="true" />
                    <ErrorMessageStyled name="email" component='div' />
                  </FormFieldConteiner>
                  {/* {emailError && <EmailErrorMessage >{emailError}</EmailErrorMessage> } */}
          
                  <FormFieldPassvordConteiner>
                    <FormFieldLabel htmlFor="password">Password:</FormFieldLabel>
                    <FormFieldPassvord id="password" name="password" type={showPassword ? "text" : "password"} placeholder="********" error={errors.password && touched.password ? "true" : "false"}  />
          
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
   
                <SubmitBlockRegister />
              </FormFields>                    
            </Form>
          )}
        </Formik>
      </FormBlock>
      <ImgAutorization />
    </Container>
  );
}
