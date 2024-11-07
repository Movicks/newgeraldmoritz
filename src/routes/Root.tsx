// Root file for routes

import { Outlet } from "react-router-dom";
import AutoResetPagesScroll from "../components/AutoResetPagesScroll/AutoResetPagesScroll";

function Root() {
  return (
    <div className="w-full h-full">
      <AutoResetPagesScroll />
      <Outlet />
    </div>
  );
}

export default Root;
