import { ErrorBoundary } from "@/shared/components/layout/ErrorBoundary/ErrorBoundary";
import { MainLayout } from "@/shared/components/layout/MainLayout/MainLayout";
import { AboutPage } from "@/pages/AboutPage";
import { CartPage } from "@/pages/CartPage";
import { CatalogPage } from "@/pages/CatalogPage";
import { LoginPage } from "@/pages/LoginPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProductPage } from "@/pages/ProductPage";
import { RegisterPage } from "@/pages/RegisterPage";
import { UserProfilePage } from "@/pages/UserProfilePage";
import { BlogPage } from "@/pages/BlogPage";
import { APP_PATHS } from "./route-paths";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: APP_PATHS.BASE_PATH,
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: APP_PATHS.LOGIN_PATH,
        element: <LoginPage />,
      },
      {
        path: APP_PATHS.REGISTER_PATH,
        element: <RegisterPage />,
      },
      {
        path: APP_PATHS.BASE_PATH,
        element: <MainPage />,
        index: true,
      },
      {
        path: APP_PATHS.CATALOG_PATH,
        element: <CatalogPage />,
      },
      {
        path: APP_PATHS.CATEGORY_PATH,
        element: <CatalogPage />,
      },
      {
        path: APP_PATHS.PRODUCT_PATH,
        element: <ProductPage />,
      },
      {
        path: APP_PATHS.CART_PATH,
        element: <CartPage />,
      },
      {
        path: APP_PATHS.ABOUT_PATH,
        element: <AboutPage />,
      },
      {
        path: APP_PATHS.PROFILE_PATH,
        element: <UserProfilePage />,
      },
      {
        path: APP_PATHS.NOT_FOUND_PATH,
        element: <NotFoundPage />,
      },
      {
        path: APP_PATHS.BLOG_PATH,
        element: <BlogPage />,
      },
    ],
  },
]);
