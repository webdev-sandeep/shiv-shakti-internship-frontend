import { Outlet } from "react-router-dom";
import Header from "../components/Header";
const Layout = () => {
  return (
    <>
      <div className="App">
        <Header />
      </div>
      <div className="page">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
