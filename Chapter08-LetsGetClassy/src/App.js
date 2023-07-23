// # Chapter 05 - Let's Get Hooked

import React from "react";
import ReactDOM from "react-dom/client";
// Default Export
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";

// Named Export [Not Object Destructring]
// import { Title } from "./components/Header";

// OR
// import Header, { Title } from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import ProductDetails from "./components/ProductDetails";
import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass";

const AppLayout = () => {
  return (
    <>
      <Header />
      {/* All The Children Will Go To The OUTLET According To The Route */}
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [{
          path: "profile",
          element: <ProfileClass name="Arslan"/>
        }]
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
