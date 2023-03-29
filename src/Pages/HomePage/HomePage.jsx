import CompanyList from "../../Components/Header/Home/CompanyList/CompanyList";
import LegalList from "../../Components/Header/Home/LegalList/LegalList";
import HomeAdress from "../../Components/Header/Home/HomeAddress/HomeAddress";
import QuickLinksList from "../../Components/Header/Home/QuickLinksList/QuickLinksList";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.logo}>Logo here</h1>
      <div className={css.grid}>
        <div className={css.contactAdress}>
          <h2 className={css.titleHome}>Reach us</h2>
          <HomeAdress />
        </div>
        <div className={css.companyList}>
          <h2 className={css.titleHome}>Company</h2>
          <CompanyList />
        </div>
        <div className={css.legalList}>
          <h2 className={css.titleHome}>Legal</h2>
          <LegalList />
        </div>
        <div className={css.qickLinks}>
          <h2 className={css.titleHome}>Quick Links</h2>
          <QuickLinksList />
        </div>
      </div>
      <form method="post">
        <label className={css.labelHome} htmlFor="email">
          Join Our Newsletter
        </label>
        <input
          className={css.inputHome}
          type="email"
          name="email"
          placeholder="Your email address"
        />
        <button className={css.buttonHome} type="submit">
          Subscribe
        </button>
        <p className={css.textHome}>
          * Will send you weekly updates for your better tool management
        </p>
      </form>
    </div>
  );
};

export default HomePage;
