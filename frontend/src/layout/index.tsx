import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import CustomDialog from "components/CustomDialog";
import Loading from "./Loading";
import ConfirmDialog from "components/ConfirmDialog";
import { useAppSelector } from "store/hooks";
import Notistack from "components/Notistack";
import Footer from "./Footer";
import { Box } from "@mui/material";

const Layout: React.FC = () => {
  const loading = useAppSelector((state) => state.loading.value);

  return (
    <div className="w-100 bg-blue-100">
      {loading && <Loading />}
      <Header />
      <Box sx={{minHeight: {xs: "calc(100vh - 56px)", md: "calc(100vh - 64px)"}}}>
        <Outlet />
      </Box>
      <CustomDialog />
      <ConfirmDialog />
      <Notistack />
      <Footer />
    </div>
  );
};
export default Layout;
