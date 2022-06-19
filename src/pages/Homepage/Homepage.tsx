import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";

const Homepage = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Homepage;
