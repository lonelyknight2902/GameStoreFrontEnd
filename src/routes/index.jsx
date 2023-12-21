import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks";
import { ProtectedRoute } from "./ProtectedRoute";
import { Cart, Checkout, Game, Home, Library, Login, Logout, Search } from "../pages";
import { Layout } from "../components";

export const Routes = () => {
  const { user } = useAuth();
  console.log(user);
  const routesForPublic = [
    {
      path: "/game/:id",
      element: (
        <Layout>
          <Game />
        </Layout>
      ),
    },
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/search",
      element: (
        <Layout>
          <Search />
        </Layout>
      ),
    },
  ];

  const routesForAuthenticationOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/library",
          element: (
            <Layout>
              <Library />
            </Layout>
          ),
        },
        {
          path: "/cart",
          element: (
            <Layout>
              <Cart />
            </Layout>
          ),
        },
        {
          path: "/logout",
          element: (
            <Layout>
              <Logout />
            </Layout>
          ),
        },
        {
          path: "/checkout",
          element: (
            <Layout>
              <Checkout />
            </Layout>
          ),
        },
      ],
    },
  ];

  const routesForNotAuthenticatedOnly = [
    {
      path: "/login",
      element: <Layout><Login /></Layout>,
    },
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!user ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticationOnly,
  ]);

  return <RouterProvider router={router} />;
};
