import { Outlet } from "react-router-dom";

import Header from "@widgets/Header/index";
import Footer from "@widgets/Footer/index";

import "@app/layouts/main/Layout/Layout.scss";

function Layout() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
