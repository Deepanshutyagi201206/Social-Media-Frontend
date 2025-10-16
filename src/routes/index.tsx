import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddPost, Home } from "../pages";
import { LayOut } from "../components";

const PagesRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LayOut>
              <Home />
            </LayOut>
          }
        />
        <Route
          path="/add-post"
          element={
            <LayOut>
              <AddPost />
            </LayOut>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default PagesRoutes;
