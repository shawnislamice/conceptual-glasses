import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
const MainLayout = () => {
  return (
    <div className="container mx-auto max-w-screen-xl">
      <NavBar></NavBar>
      <Outlet></Outlet>
      
    </div>
  );
};

export default MainLayout;
