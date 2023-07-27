import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { axiosMiddleware } from "../../axiosSettings";

import authReducer from "../Slices/Login/auth.slice";
import resetPasswordSlice from "../Slices/Login/resetPasswordLink";
import passwordSetup from "../Slices/Login/setupPassword";
import blogsSlice from "../Slices/Blogs/BlogsSlice";
import blogDetailSlice from "Redux/Slices/BlogDetailSlice/BlogDetailSlice";
import HomePageBannerSlice from "../Slices/HomePageBanner/HomePageBannerSlice";
import GetCategorySlice from "../Slices/GetCategory/GetCategory";
import PostProductsSlice from "../Slices/GetProducts/GetProducts";
import PostCategoryBannerSlice from "../Slices/GetCategoryBanners/GetCategoryBanners";
import menuListSlice from "../Slices/HeaderMenuList/HeaderMenuListSlice";
import PostCorporateBannersSlice from "../Slices/GetCorporateBanners/GetCorporateBanners";
import virtualTourSlice from "Redux/Slices/VirtualTourSlice/VirtualTourSlice";
import corporateSlice from "Redux/Slices/Corporate/CorporateSlice";
import corporateBannerSlice from "Redux/Slices/Corporate/CorporateBannerSlice";
import CorporateDetailSlice from "Redux/Slices/Corporate/CorporateDetailSlice";
import exhibitionSlice from "Redux/Slices/Exhibition/ExhibitionSlice";
import CareCleanSlice from "Redux/Slices/CareClean/CareCleanSlice";
import newsPressSlice from "Redux/Slices/NewsPress/NewsPressSlice";
import newsPressBannerSlice from "Redux/Slices/NewsPress/NewsPressBannerSlice";
import newsPressDetailSlice from "Redux/Slices/NewsPress/NewsPressDetailSlice";
import brandSlice from "Redux/Slices/Brand/BrandSlice";
import brandBannerSlice from "Redux/Slices/Brand/BrandBannerSlice";
import brandDetailSlice from "Redux/Slices/Brand/BrandDetailSlice";
import getCategoryProductSlice from "Redux/Slices/CategoryProduct/CategoryProductSlice";
import postProductPageSlice from "Redux/Slices/GetProducts/ProductPage";
import getProductPageDetailSlice from "Redux/Slices/GetProducts/ProductPageDetails";
import PostAboutUsSlice from "Redux/Slices/AboutUs/AboutUs";
import postFaqIdSlice from "Redux/Slices/FAQ/FaqCategoryId";
import getfaqcategorySlice from "Redux/Slices/FAQ/GetFaqCategory";
import catalogueSlice from "Redux/Slices/Catalogue/CatalogueSlice";
import catalogueBannerSlice from "Redux/Slices/Catalogue/CatalogueBannerSlice";
import postContactUsSlice from "Redux/Slices/Forms/postContactUs";
import postWarrantyRegisterationSlice from "Redux/Slices/Forms/postWarrantyRegistration";
import getQuotationSlice from "Redux/Slices/Forms/getQuotation";
import postCareerSlice from "Redux/Slices/Forms/postCareer";
import PostExploreCategorySlice from "Redux/Slices/ExploreCategory/ExploreCategory";
import PostNewArrivalSlice from "Redux/Slices/NewArrival/NewArrival";
import postSearchSlice from "Redux/Slices/Search/Search";
import PostVideoSlice from "Redux/Slices/Videos/Videos";
import getBlogsCategorySlice from "Redux/Slices/BlogCategory/BlogCateogrySlice";
import postBlogsByCategoryIdSlice from "Redux/Slices/BlogsByCategoryId/postBlogsByCategoryIdSlice";
import postSearchFaqSlice from "Redux/Slices/SearchFaq/SearchFaq";
import getFaqsSlice from "Redux/Slices/FAQ/GetFaqs";
import orientationCenterSlice from "Redux/Slices/OrientationCenter/OrientationCenterSlice";

import whereToBuySlice from "Redux/Slices/WhereToBuy/WhereToBuySlice";
import ExhibitionProductSlice from "Redux/Slices/Exhibition/ExhibitionProductSlice";
import ExhibitionDetailSlice from "Redux/Slices/Exhibition/ExhibitionDetailSlice";
const rootReducer = combineReducers({
  menuList: menuListSlice,
  blogs: blogsSlice,
  blog: blogDetailSlice,
  virtualTour: virtualTourSlice,
  brandProducts: brandSlice,
  brandBanner: brandBannerSlice,
  brandDetail: brandDetailSlice,
  corporateProducts: corporateSlice,
  corporateBanner: corporateBannerSlice,
  corporateDetail: CorporateDetailSlice,
  newsPress: newsPressSlice,
  newsPressBanner: newsPressBannerSlice,
  newsPressDetail: newsPressDetailSlice,
  exhibition: exhibitionSlice,
  careClean: CareCleanSlice,
  catalogue: catalogueSlice,
  catalogueBanner: catalogueBannerSlice,
  HomePageBanner: HomePageBannerSlice,
  categoryBanner: PostCategoryBannerSlice,
  PostcorporateBanner: PostCorporateBannersSlice,
  postproducts: PostProductsSlice,
  getCategoryList: GetCategorySlice,
  auth: authReducer,
  resetPassword: resetPasswordSlice,
  passwordSetup: passwordSetup,
  getCategoryProduct: getCategoryProductSlice,
  ProductPage: postProductPageSlice,
  ProductPageDetail: getProductPageDetailSlice,
  aboutUs: PostAboutUsSlice,
  faqCategoryId: postFaqIdSlice,
  getFaqCategory: getfaqcategorySlice,
  contactUs: postContactUsSlice,
  warrantyRegistration: postWarrantyRegisterationSlice,
  career: postCareerSlice,
  exploreCategory: PostExploreCategorySlice,
  newArrival: PostNewArrivalSlice,
  search: postSearchSlice,
  getQuotation: getQuotationSlice,
  videos: PostVideoSlice,
  blogsCategory: getBlogsCategorySlice,
  blogsByCategoryId: postBlogsByCategoryIdSlice,
  searchFaq: postSearchFaqSlice,
  getFaqsList: getFaqsSlice,
  orientationCenter: orientationCenterSlice,
  whereToBuy: whereToBuySlice,
  exhibitionProduct: ExhibitionProductSlice,
  exhibitionDetail: ExhibitionDetailSlice,
});

const initializeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(
        axiosMiddleware
      ),
    devTools: true,
  });

export default initializeStore;
