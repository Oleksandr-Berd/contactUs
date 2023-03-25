import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import BlogPage from "./Pages/BlogPage/BlogPage";
import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import LogoPage from "./Pages/LogoPage/LogoPage";
import PrivacyPage from "./Pages/PrivacyPage/PrivacyPage";
import TermsSerPage from "./Pages/TermsSerPage/TermsSerPage";
import TermsUsePage from "./Pages/TermsUsePage/TermsUsePage";
import RefundPolicyPage from "./Pages/RefundPolicyPage/RefundPolicyPage";
import TechlabzPage from "./Pages/TechlabzPage/TechlabzPage";
import DownloadsPage from "./Pages/DownloadsPage/DownloadsPage";
import ForumPage from "./Pages/ForumPage/ForumPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="logo" element={<LogoPage />}></Route>
          <Route path="logo/privacy" element={<PrivacyPage />} />
          <Route path="logo/termsser" element={<TermsSerPage />} />
          <Route path="logo/termsuse" element={<TermsUsePage />} />
          <Route path="logo/refundpolicy" element={<RefundPolicyPage />} />

          <Route path="logo/techlabz" element={<TechlabzPage />} />
          <Route path="logo/downloads" element={<DownloadsPage />} />
          <Route path="logo/forum" element={<ForumPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
