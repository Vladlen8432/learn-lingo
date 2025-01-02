import { NavLink } from "react-router-dom";
import { MainLogo, LogIn } from "../Svg";
import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css.header}>
      <NavLink className={css.navLink} to="/">
        <p className={css.mainLogo}>
          <span className={css.mainLogoImg}>
            <MainLogo />
          </span>
          LearnLingo
        </p>
      </NavLink>

      <nav className={css.nav}>
        <ul className={css.navList}>
          <NavLink className={css.navLink} to="/">
            <li className={css.navListItem}>Home</li>
          </NavLink>
          <NavLink className={css.navLink} to="/teachers">
            <li className={css.navListItem}>Teachers</li>
          </NavLink>
        </ul>
      </nav>

      <div className={css.loginRegisterContainer}>
        <div className={css.login}>
          <span className={css.loginIcon}>
            <LogIn />
          </span>
          Log in
        </div>

        <div className={css.registration}>
        Registration
        </div>
      </div>
    </div>
  );
};

export default Header;
