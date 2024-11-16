/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { NavLink } from "react-router-dom";
import {
  DollarOutlined,
  FundOutlined,
  IdcardOutlined,
  PieChartOutlined,
  UnorderedListOutlined,
  DeliveredProcedureOutlined,
  ProductOutlined,
  SoundOutlined,
} from "@ant-design/icons";

function Sidenav({ color, isMobile, toggleSidenav, sidenavVisible }) {
  const [selectedKey, setSelectedKey] = useState('1');
  const handleMenuKey = (key) => {
    setSelectedKey(key);
  };
  const menuItems = [
    {
      key: "/dashboard",
      label: (
        <NavLink to="/dashboard">
          <span className="icon">
            <PieChartOutlined />
          </span>
          <span className="label">Dashboard</span>
        </NavLink>
      ),
    },
    {
      key: "/orders",
      label: (
        <NavLink to="/orders">
          <span className="icon">
            <UnorderedListOutlined />
          </span>
          <span className="label">Orders</span>
        </NavLink>
      ),
    },
    {
      key: "/categories",
      label: (
        <NavLink to="/categories">
          <span className="icon">
            <DeliveredProcedureOutlined />
          </span>
          <span className="label">Categories</span>
        </NavLink>
      ),
    },
    {
      key: '/products',
      label: (
        <NavLink to='/products'>
          <span
            className='icon'
            style={{
              backgroundColor: selectedKey === 'products' ? '#f0f2f5' : '',
            }}
          >
            <ProductOutlined />
          </span>
          <span className='label'>Products</span>
        </NavLink>
      ),
    },
    {
      key: '/layananproduk',
      label: (
        <NavLink to='/layananproduk'>
          <span
            className='icon'
            style={{
              backgroundColor: selectedKey === 'products' ? '#f0f2f5' : '',
            }}
          >
            <DeliveredProcedureOutlined />
          </span>
          <span className='label'>Layanan Produk</span>
        </NavLink>
      ),
    },
    {
      key: "/playlist",
      label: (
        <NavLink to="/playlist">
          <span className="icon">
            <SoundOutlined />
          </span>
          <span className="label">Playlist</span>
        </NavLink>
      ),
    },
    {
      key: "/profile",
      label: (
        <NavLink to="/profile">
          <span className="icon">
            <IdcardOutlined />
          </span>
          <span className="label">Profile</span>
        </NavLink>
      ),
    },
    {
      key: "/product-sales-report",
      label: (
        <NavLink to="/product-sales-report">
          <span className="icon">
            <DollarOutlined />
          </span>
          <span className="label">Product Sales Report</span>
        </NavLink>
      ),
    },
  ];

  return (
    <Drawer
      title="Menu"
      placement="left"
      onClose={toggleSidenav}
      open={sidenavVisible}
      style={{
        padding: 0,
        overflow: "hidden",
      }}
      width={isMobile ? "80%" : "20%"}
    >
      <Menu
        mode="inline"
        theme="light"
        style={{ height: "100%", borderRight: 0 }}
        items={menuItems}
        defaultSelectedKeys={[selectedKey]}
        onSelect={handleMenuKey}
      />
    </Drawer>
  );
}

export default Sidenav;
