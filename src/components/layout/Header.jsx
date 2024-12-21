import React from 'react';
import { Button, Typography } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logogame from "../../assets/images/logogame.png";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  

  .logo-section {
    display: flex;
    align-items: center;

    .logo-image {
      width: 40px; /* Ukuran logo */
      height: 40px;
      margin-right: 10px; /* Spasi antara logo dan teks */
    }

    .welcome-text {
      font-size: 18px;
      font-weight: bold;
      margin: 0;
      color: #fff; 
    }
  }

  .header-control {
    position: absolute;
    top: 0px;
    right: 20px; /* Posisi di pojok kanan atas */

    .btn-login {
      background-color: #1890ff; /* Warna tombol */
      color: white;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      cursor: pointer;
      font-weight: bold;
      align-itemms: center;

      &:hover {
        background-color: #40a9ff; /* Warna hover */
      }
    }
  }

  @media (max-width: 768px) {
    .header-control {
      right: 15px; /* Sesuaikan margin untuk layar kecil */
    }
  }
`;

function Header() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Arahkan ke halaman login
  };

  return (
    <HeaderContainer>
      {/* Logo dan Teks Admin */}
      <div className="logo-section">
        <img src={logogame} alt="Logo Game" className="logo-image" />
        <Typography.Text className="welcome-text">E-MORP SHOP</Typography.Text>
      </div>

      {/* Tombol Login */}
      <div className="header-control">
        <Button
          className="btn-login"
          icon={<LoginOutlined />}
          onClick={handleLoginClick}
        >
          Login
        </Button>
      </div>
    </HeaderContainer>
  );
}

export default Header;
