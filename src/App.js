import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";
import Category from "./Pages/Category/Category/Category";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import News from "./Pages/News/News/News";
import Profile from "./Pages/Terms/Profile/Profile";
import TermsAndCondition from "./Pages/Terms/TermsAndCondition/TermsAndCondition";
import PrivateRoute from "./routes/route/PrivateRoute";
import useTitle from "./useTitle";

function App() {
  useTitle("Home");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch("https://saiful-news-server.vercel.app/news"),
        },
        {
          path: "/category/:id",
          element: <Category></Category>,
          loader: ({ params }) =>
            fetch(
              `https://saiful-news-server.vercel.app/category/${params.id}`
            ),
        },
        {
          path: "/news/:id",
          element: (
            <PrivateRoute>
              <News></News>
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(`https://saiful-news-server.vercel.app/news/${params.id}`),
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/terms",
          element: <TermsAndCondition></TermsAndCondition>,
        },
        {
          path: "/profile",
          element: (
            <PrivateRoute>
              <Profile></Profile>
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
