import {  Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import sprite from '../../img/sprite.svg';
import { Container, ErrorMessageStyled, EyeSvg, FormBlock, FormConteiner, FormField, FormFieldConteiner, FormFieldLabel, FormFields, SecureMessage } from "./RegisterAndLogin.styled";
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
                <FormConteiner>  

                  <FormFieldConteiner>
                    <FormFieldLabel htmlFor="name">Name:</FormFieldLabel>
                    <FormField 
                      id="name" 
                      name="name" 
                      type="name" 
                      placeholder="Nik Ovson" 
                      error={errors.name && touched.name ? "true" : "false" } 
                      paddingleft="65px"
                      style={{
                        borderColor: touched.name && errors.name ? "red" : 
                                     touched.name && !errors.name ? "green" : "defaultColor",
                      }}
                    />
                      {touched.name && (
                        errors.name ? (
                          <EyeSvg width={20} height={20}>
                            <use href={`${sprite}#icon-pajamas_error`} />
                          </EyeSvg>
                        ) : (
                          <EyeSvg width={20} height={20}>
                            <use href={`${sprite}#icon-check-ok`} />
                          </EyeSvg>
                        )
                      )}
                     {touched.name && !errors.name && <SecureMessage>Name is secure</SecureMessage>}
                    <ErrorMessageStyled name="name" component='div' />
                  </FormFieldConteiner>
                    
                  <FormFieldConteiner>
                    <FormFieldLabel htmlFor="email">Mail:</FormFieldLabel>
                    <FormField 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="nik@google.com" 
                      error={errors.email && touched.email ? "true" : "false" } 
                      paddingleft="53px"
                      style={{
                        borderColor: touched.email && errors.email ? "red" : 
                                     touched.email && !errors.email ? "green" : "defaultColor",
                      }}
                    />
                      {touched.email && (
                        errors.email ? (
                          <EyeSvg width={20} height={20}>
                            <use href={`${sprite}#icon-pajamas_error`} />
                          </EyeSvg>
                        ) : (
                          <EyeSvg width={20} height={20}>
                            <use href={`${sprite}#icon-check-ok`} />
                          </EyeSvg>
                        )
                      )}
                     {touched.email && !errors.email && <SecureMessage>Email is secure</SecureMessage>}
                    <ErrorMessageStyled name="email" component='div' />
                  </FormFieldConteiner>
          
                  <FormFieldConteiner>
                    <FormFieldLabel htmlFor="password">Password:</FormFieldLabel>
                    <FormField 
                      id="password" 
                      name="password" 
                      type={showPassword ? "text" : "password"} 
                      placeholder="********" 
                      paddingleft="86px"
                      style={{
                        borderColor: touched.password && errors.password ? "red" : 
                                     touched.password && !errors.password ? "green" : "defaultColor",
                      }}
                    />
                      
                    {errors.password && touched.password ? (
                      <EyeSvg width={20} height={20}>
                        <use href={`${sprite}#icon-pajamas_error`} />
                      </EyeSvg>
                    ) : !errors.password && touched.password ? (
                      <EyeSvg width={20} height={20}>
                        <use href={`${sprite}#icon-check-ok`} />
                      </EyeSvg>
                    ) : showPassword ? (
                      <EyeSvg width={20} height={20} onMouseDown={(e) => {
                        e.preventDefault(); // Предотвратить смену фокуса
                        togglePasswordVisibility();
                      }}>
                        <use href={`${sprite}#icon-eye`} />
                      </EyeSvg>
                    ) : (
                      <EyeSvg width={20} height={20} onMouseDown={(e) => {
                        e.preventDefault(); // Предотвратить смену фокуса
                        togglePasswordVisibility();
                      }}>
                        <use href={`${sprite}#icon-eye-off`} />
                      </EyeSvg>
                    )}

                     {touched.password && !errors.password && <SecureMessage>Password is secure</SecureMessage>}
                    <ErrorMessageStyled name="password" component='div'/>

                  </FormFieldConteiner>

                </FormConteiner>     
   
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