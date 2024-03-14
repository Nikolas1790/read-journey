import {  Formik, Form } from 'formik';
import * as Yup from 'yup';
import sprite from '../../img/sprite.svg';
import { Container, ErrorMessageStyled, EyeSvg, FormBlock, FormConteiner, FormField, FormFieldConteiner, FormFieldLabel, FormFields, SecureMessage } from "./RegisterAndLogin.styled";
import ImgAutorization from 'components/ImgAuthorization/ImgAuthorization';
import LogoTitleBlock from 'components/LogoTitleBlock/LogoTitleBlock';
import SubmitBlockLogin from 'components/SubmitBlockAutorization/SubmitBlockLogin';
import { logIn } from '../../redux/auth/operationsAuth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';

const initialValues = {
  email: '',
  password: '',
};
  
const schema = Yup.object({
  email: Yup.string().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email address').required('Required'),
  password: Yup.string().required('Required').min(7, "Password must be at least 7 characters"),
});

export default function Login() {  
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };  
  const handleSubmit = async (values) => {
    try {
      await dispatch(logIn(values)).unwrap();
      navigate('/recommended');
    } catch (error) {
      toast.error("Please check the Mail and Password.");
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
                     placeholder="********" error={errors.password && touched.password ? "true" : "false"} 
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
                    <ErrorMessageStyled name="password" component='div' />

                  </FormFieldConteiner>
                </FormConteiner>     

                <SubmitBlockLogin />                    
              </FormFields>                    
            </Form>
          )}
        </Formik>
      </FormBlock>
      <ImgAutorization />
    </Container>
  );
}
