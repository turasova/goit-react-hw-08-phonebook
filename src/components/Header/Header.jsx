import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  return (
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
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `${css.textLink} ${isActive ? css.active : ''}`
                }
              >
                Sing In
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/registration"
                className={({ isActive }) =>
                  `${css.textLink} ${isActive ? css.active : ''}`
                }
              >
                Registration
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
