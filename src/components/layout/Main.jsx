import React, { useState } from "react";
import { Layout, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Sidenav from "./Sidenav";
import Header from "./Header";
import Footer from "./Footer";

const { Header: AntHeader, Content } = Layout;

function MainLayout({ children }) {
  const [sidenavVisible, setSidenavVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle sidenav visibility
  const toggleSidenav = () => {
    setSidenavVisible(!sidenavVisible);
  };

  // Detect screen size changes
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidenav */}
      <Sidenav
        isMobile={isMobile}
        sidenavVisible={sidenavVisible}
        toggleSidenav={toggleSidenav}
      />

      {/* Header */}
      <AntHeader
        style={{
          background: "#fff",
          padding: "0 16px",
          position: "fixed",
          width: "100%",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button
          icon={<MenuOutlined />}
          onClick={toggleSidenav}
          style={{ marginRight: "16px" }}
        />
        <Header />
      </AntHeader>

      {/* Main Content */}
      <Layout style={{ marginTop: 64 }}>
        <Content style={{ padding: "16px" }}>{children}</Content>
      </Layout>

      {/* Footer */}
      <Footer />
    </Layout>
  );
}

export default MainLayout;
