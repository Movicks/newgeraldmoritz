// MainLayout file to house the Routes
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const MainLayout = () => {
  return (
      <main className="h-full w-full">
          <Navbar/>
      <div className="w-full">
        <Outlet />
      </div>
      <Footer/>
    </main>
  );
};

export default MainLayout;