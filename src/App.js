import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import BlogPage from "./Pages/BlogPage/BlogPage";
import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import PrivacyPage from "./Pages/PrivacyPage/PrivacyPage";
import TermsSerPage from "./Pages/TermsSerPage/TermsSerPage";
import TermsUsePage from "./Pages/TermsUsePage/TermsUsePage";
import RefundPolicyPage from "./Pages/RefundPolicyPage/RefundPolicyPage";
import TechlabzPage from "./Pages/TechlabzPage/TechlabzPage";
import DownloadsPage from "./Pages/DownloadsPage/DownloadsPage";
import ForumPage from "./Pages/ForumPage/ForumPage";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="home/privacy" element={<PrivacyPage />} />
          <Route path="home/termsser" element={<TermsSerPage />} />
          <Route path="home/termsuse" element={<TermsUsePage />} />
          <Route path="home/refundpolicy" element={<RefundPolicyPage />} />

          <Route path="home/techlabz" element={<TechlabzPage />} />
          <Route path="home/downloads" element={<DownloadsPage />} />
          <Route path="home/forum" element={<ForumPage />} />

          <Route path="blog" element={<BlogPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
