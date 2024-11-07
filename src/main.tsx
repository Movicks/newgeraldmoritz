import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import {
  MainLayout,
  Root,
  NotFoundPage,
  Home,
  Testimonies,
  OurTeam,
  Contact,
  Abouts,
  Practices,
} from "./App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<NotFoundPage />}>
      {/* Pages with Header inside here */}
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="reviews" element={<Testimonies />} />
        <Route path="team" element={<OurTeam />} />
        <Route path="reviews" element={<Testimonies />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<Abouts />} />
        <Route path="practices" element={<Practices />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* Move ToastContainer here, outside of the routing elements */}
  </React.StrictMode>
);
