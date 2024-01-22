import { useSelector } from 'react-redux';
import css from './AuthMenu.module.css';
import { NavLink } from 'react-router-dom';
import { userSelector } from 'store/selectors';

const AuthMenu = () => {
  const user = useSelector(userSelector);
  return (
    <>
      <header className={css.header}>
        <nav>
          <div className={css.containerNav}>
            <ul className={css.navList}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${css.textLink} ${isActive ? css.active : ''}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contacts"
                  className={({ isActive }) =>
                    `${css.textLink} ${isActive ? css.active : ''}`
                  }
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
            <ul className={css.auth}>
              <li>
                <h3>Welcom,{user}</h3>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${css.textLink} ${isActive ? css.active : ''}`
                  }
                >
                  Exit
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
export default AuthMenu;
