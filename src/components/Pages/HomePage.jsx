import { useSelector } from 'react-redux';
import { isAuthSelector, userSelector } from 'store/selectors';

const HomePage = () => {
  const isLoggedIn = useSelector(isAuthSelector);
  const user = useSelector(userSelector);

  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>
            Hello , {user}! <br />
            Welcome to your phonebook.
          </p>
        </>
      ) : (
        <>
          <p>
            Hello! I'm your phonebook. <br />
            Please log in to your account or register.
          </p>
        </>
      )}
    </div>
  );
};

export default HomePage;
