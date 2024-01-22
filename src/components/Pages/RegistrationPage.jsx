import FormRegistration from 'components/Form/FormRegistration/FormRegistration';
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { isAuthSelector } from 'store/selectors';

const RegistrationPage = () => {
  // const isAuth = useSelector(isAuthSelector);

  // const navigate = useNavigate();

  // useEffect(() => {
  //   isAuth && navigate('/');
  // }, [isAuth, navigate]);

  return <FormRegistration />;
};

export default RegistrationPage;
