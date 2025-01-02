import { NavLink } from "react-router-dom";
import homePicture from '../../assets/images/home-picture.jpg'
import css from "./Home.module.css";
const Home = () => {
  return (
    <div className={css.home}>
      <div className={css.homeMain}>
        <div className={css.homeContent}>
          <h1 className={css.homeTitle}>
            Unlock your potential with the best{" "}
            <span className={css.homeTitleSpan}>language</span> tutors
          </h1>

          <p className={css.homeDescription}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>

          <NavLink
            className={`${css.navLink} ${css.getStarted}`}
            to="/teachers"
          >
            Get started
          </NavLink>
        </div>

        <div className={css.homePicture}>
          <img src={homePicture} alt="home-picture" />
        </div>
      </div>
    </div>
  );
};

export default Home;
