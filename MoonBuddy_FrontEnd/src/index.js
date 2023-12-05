import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Community from "./pages/Community";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Analyze from "./pages/Analyze";
import News from "./pages/News";
import IngredAnalysis_comp from "./components/IngredientAnalysis-js/IngredAnalysis_comp";
import MyPage from "./pages/MyPage";
import CommunityMini from "./pages/CommunityMini";
import NewsDetail from "./pages/NewsDetail";
import ModifyMe from "./pages/ModifyMe";
import ModifyRate from "./pages/ModifyRate";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,
  },
  {
    path: "/com",
    element: <Community />,
  },
  {
    path: "/com/:id",
    element: <CommunityMini />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/analyze",
    element: <Analyze />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/news/:id",
    element: <NewsDetail />,
  },
  {
    path: "/analyze/:detail",
    element: <IngredAnalysis_comp />,
  },

  {
    path: "/mypage",
    element: <MyPage />,
  },

  {
    path: "/modifyme",
    element: <ModifyMe />,
  },
  {
    path: "/modifyrate",
    element: <ModifyRate />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
