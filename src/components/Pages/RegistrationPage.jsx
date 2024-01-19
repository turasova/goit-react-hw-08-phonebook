import FormRegistration from 'components/Form/FormRegistration';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isAuthSelector } from 'store/selectors';
import { signUpThunk } from 'store/thunks';

const RegistrationPage = () => {
  const isAuth = useSelector(isAuthSelector);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    isAuth && navigate('/');
  }, [isAuth, navigate]);

  const register = body => {
    dispatch(signUpThunk(body));
  };

  return <FormRegistration register={register} />;
};

export default RegistrationPage;
