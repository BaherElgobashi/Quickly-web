// import SocialLogin from "./Components/SocialLogin/SocialLogin.jsx";
// import QuicklyFooter from "./Components/QuicklyFooter/QuicklyFooter";
// import QuicklyNavbar from "./Components/QuicklyNavbar/QuicklyNavbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import LoginSignup from "./Components/LoginSignup/LoginSignup";
import Layout from "./Components/Layout/Layout.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import ResetPassword from "./Components/ResetPassword/ResetPassword.jsx";
import Service from "./Components/Service/Service";
import Home from "./Components/Home/Home.jsx";

function App() {
  let routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <LoginSignup /> },
        { path: "signup", element: <SignUp /> },
        { path: "forgetpassword", element: <ForgetPassword /> },
        { path: "resetpassword", element: <ResetPassword /> },
        { path: "service", element: <Service /> },
        { path: "home", element: <Home /> },
      ],
    },
  ]);
  return <RouterProvider router={routers}></RouterProvider>;
}

export default App;
