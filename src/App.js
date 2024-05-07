import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Auth/Login/Login";
import Registration from "./Pages/Auth/Register/Register";
import { toast } from "react-toastify";
import Home from "./Pages/CMS/Home/Home";
import Header from "./Pages/Layout/Header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Footer from "./Pages/Layout/Footer/Footer";
import Blog from "./Pages/CMS/Blog/Blog";
import BlogDetails from "./Pages/CMS/Blog/BlogDetails";
import Courses from "./Pages/CMS/Courses/Courses";
import ApplyForm from "./Pages/CMS/Courses/ApplyForm";
import About from "./Pages/CMS/About/About";
import CreateComment from "./Pages/CMS/Blog/CreateComment";
import { check_Token } from "./Redux-Toolkit/Slice/AuthSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(check_Token());
  });
  function PrivateRoute({ children }) {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    return token !== null && token !== undefined ? (
      children
    ) : (
      <>
        <Navigate to="/" />
        {toast("Please go for login either you can't access product list")}
      </>
    );
  }
  const PublicRouteNames = [
    {
      path: "/",
      Component: <Login />,
    },
    {
      path: "/register",
      Component: <Registration />,
    },
    {
      path: "/home",
      Component: <Home />,
    },
  ];
  const PrivateRouteNames = [
    {
      path: "/blog",
      Component: <Blog />,
    },
    {
      path: "/blog/:id",
      Component: <BlogDetails />,
    },
    {
      path: "/courses",
      Component: <Courses />,
    },
    {
      path: "/application/:id",
      Component: <ApplyForm />,
    },
    {
      path: "/about",
      Component: <About />,
    },
    {
      path: "/create-comment/:id",
      Component: <CreateComment />,
    },
  ];
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {PublicRouteNames.map((route, index) => {
            return (
              <Route
                exact
                path={route.path}
                element={route.Component}
                key={index}
              />
            );
          })}
          {PrivateRouteNames.map((route, index) => {
            return (
              <Route
                exact
                path={route.path}
                element={<PrivateRoute>{route.Component}</PrivateRoute>}
                key={index}
              />
            );
          })}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
