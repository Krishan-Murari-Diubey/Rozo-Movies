import { useEffect } from "react";
import "./App.scss";
import { fetchDataFromApi } from "./Utils/Api";
import { getApiConfiguration, getGenresConfiguration } from "./Store/HomeSlice";
import { useDispatch } from "react-redux";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import SearchResult from "./Pages/SearchResult/SearchResult";
import Error from "./Pages/404 Error/Error";
import Layout from "./Layout/Layout";
import Explore from "./Pages/Explore/Explore";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/:mediaType/:id",
          element: <Details />,
        },
        {
          path: "/search/:query",
          element: <SearchResult />,
        },
        {
          path: "/explore/:mediaType",
          element: <Explore />,
        },
          {
          path: "*",
          element: <Error />,
        },
        
      ],
    },
  ]);

  const dispatch = useDispatch();
  useEffect(() => {
    fetchApiConfiguration();
    genresCall();
  }, []);

  const fetchApiConfiguration = () => {
    fetchDataFromApi("/configuration")
      .then((res) => {
        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        };
        dispatch(getApiConfiguration(url));
      })
      .catch((err) => {
        throw new err();
      });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenresConfiguration(allGenres));
  };

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
