import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "container/LandingPage";
import PrivacyPolicy from "container/PrivacyPolicy";
import ProductPage from "container/ProductPage";
import CategoryPage from "container/CategoryPage";
import { ThemeProvider } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LandingPage.css";
import "./App.css";
import theme from "./theme";
import ProductDetail from "container/ProductDetail/ProductDetail";
import BrandPage from "container/BrandPage";
import BrandDetail from "container/BrandDetail";
import CorporatePage from "container/CorporatePage";
import CorporateDetail from "container/CorporateDetail";
import OrientationCentre from "container/OrientationCentre";
import ContactUs from "container/ContactUs";
import VirtualTour from "container/VirtualTour";
import CareCleaning from "container/CareCleaning";
import Exhibition from "container/Exhibition";
import Faq from "container/Faq";
import Videos from "container/Videos";
import Blogs from "container/Blogs";
import BlogDetail from "container/BlogDetail";
import NewsPress from "container/NewsPress";
import NewsPressDetail from "container/NewsPressDetail";
import AboutUs from "container/AboutUs/AboutUs";
import Catalogue from "container/Catalogue";
import WarrantyRegisteration from "container/WarrantyRegistration";
import Career from "container/career";
import Quotation from "container/Quotation";
import WhereToBuy from "container/WhereToBuy";
import ExhibitionDetail from "container/ExhibitionDetail";
import Disclaimer from "container/DisclaimerPage";
import CookiesPolicy from "container/CookiesPolicy";
import TermsAndConditions from "container/TermsConditions";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route index element={<LandingPage />} />

            {/* private routes below */}
            <Route path="/about-us" element={<AboutUs />} />

            <Route path="/career" element={<Career />} />

            <Route path="/quotation" element={<Quotation />} />

            <Route
              path="/warranty-registration"
              element={<WarrantyRegisteration />}
            />

            <Route path="/product-page/:id" element={<ProductPage />} />

            <Route path="/category-page/:id" element={<CategoryPage />} />

            <Route path="/product-detail/:id" element={<ProductDetail />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer-page" element={<Disclaimer />} />
            <Route path="/cookies-policy" element={<CookiesPolicy />} />
            <Route path="/terms-condition" element={<TermsAndConditions />} />

            <Route path="/brand-page" element={<BrandPage />} />

            <Route path="/brand-page/:id" element={<BrandDetail />} />

            <Route path="/corporate-page" element={<CorporatePage />} />

            <Route path="/corporate-page/:id" element={<CorporateDetail />} />

            <Route path="/orientation-centre" element={<OrientationCentre />} />

            <Route path="/where-to-buy" element={<WhereToBuy />} />

            <Route path="/virtual-tour" element={<VirtualTour />} />

            <Route path="/care-cleaning" element={<CareCleaning />} />

            <Route path="/exhibition" element={<Exhibition />} />

            <Route path="/exhibition/:id" element={<ExhibitionDetail />} />

            <Route path="/contact-us" element={<ContactUs />} />

            <Route path="/faq" element={<Faq />} />

            <Route path="/videos" element={<Videos />} />

            <Route path="/colstonconcept" element={<Blogs />} />

            <Route path="/colstonconcept/:id" element={<BlogDetail />} />

            <Route path="/newspress" element={<NewsPress />} />

            <Route path="/newspress/:id" element={<NewsPressDetail />} />

            <Route path="/catalogue" element={<Catalogue />} />

            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
