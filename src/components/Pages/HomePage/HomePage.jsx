import { useSelector } from 'react-redux';
import { isAuthSelector, userSelector } from 'store/selectors';
import css from './HomePage.module.css';

const HomePage = () => {
  const isLoggedIn = useSelector(isAuthSelector);
  const user = useSelector(userSelector);

  return (
    <div className={css.container}>
      {isLoggedIn ? (
        <>
          <div>
            <p className={css.helloText}>
              Hello , {user.name}! <br />
              Welcome to your phonebook...
            </p>
          </div>
        </>
      ) : (
        <>
          <div>
            <p className={css.helloText}>
              Hello! I'm your phonebook. <br />
              Please log in to your account or register.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
