import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout({cartCount}) {
  return (
    <>
      <Navbar cartCount={cartCount} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
