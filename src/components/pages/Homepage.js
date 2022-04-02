import { Outlet } from "react-router-dom";
import MainHeader from "../Layout/MainHeader";
import Layout from "../Layout/Layout";

function HomePage() {
  return (
    <Layout>
      <MainHeader />
      <Outlet />
    </Layout>
  );
}

export default HomePage;
