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
          <h2>Reach us</h2>
          <HomeAdress />
        </div>
        <div className={css.companyList}>
          <h2>Company</h2>
          <CompanyList />
        </div>
        <div className={css.legalList}>
          <h2>Legal</h2>
          <LegalList />
        </div>
        <div className={css.qickLinks}>
          <h2>Quick Links</h2>
          <QuickLinksList />
        </div>
      </div>
      <form method="post">
        <label htmlFor="email">Join Our Newsletter</label>
        <input type="email" name="email" placeholder="Your email address" />
        <button type="submit">Subscribe</button>
        <p>* Will send you weekly updates for your better tool management</p>
      </form>
    </div>
  );
};

export default HomePage;
