import ContactAddress from "../../Components/Contact/ContactAddress/ContactAddress";
import CompanyList from "../../Components/Header/Logo/CompanyList/CompanyList";
import LegalList from "../../Components/Header/Logo/LegalList/LegalList";
import QuickLinksList from "../../Components/Header/Logo/QuickLinksList/QuickLinksList";
import css from "./LogoPage.module.css";

const LogoPage = () => {
  return (
    <div>
      <h1>Logo here</h1>
      <div>
        <div className={css.contactAdress}>
          <h2>Reach us</h2>
          <ContactAddress />
        </div>
        <div>
          <h2>Company</h2>
          <CompanyList />
        </div>
        <div>
          <h2>Legal</h2>
          <LegalList />
        </div>
        <div>
          <h2>Quick Links</h2>
          <QuickLinksList />
        </div>
      </div>
      <form method="post">
        <label htmlFor="email">Join Our Newsletter</label>
        <input type="email" name="email" />
        <button type="submit">Subscribe</button>
        <p>* Will send you weekly updates for your better tool management</p>
      </form>
    </div>
  );
};

export default LogoPage;
