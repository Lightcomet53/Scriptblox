import Layout from "layout";
import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import Executors from "views/Executors";
import Favorites from "views/Favorites";
import Home from 'views/Home';
import Privacy from "views/Privacy";
import Rules from "views/Rules";
import Terms from "views/Terms";
import Upload from "views/Upload";

const element = createRoutesFromElements(
  <>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/executors" element={<Executors />} />
    </Route>
  </>
)
export const router = createBrowserRouter(element);