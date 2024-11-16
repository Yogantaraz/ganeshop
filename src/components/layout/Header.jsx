import React from 'react';
import { Button, Typography } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;

  .welcome-text {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #000; /* Warna teks default hitam */
  }

  .header-control {
    position: absolute;
    top: 0px;
    right: 20px; /* Pastikan tombol berada di ujung kanan */
  }

  .btn-sign-in {
    background: none; /* Hapus latar belakang */
    border: none; /* Hapus border */
    color: inherit; /* Gunakan warna teks bawaan */
    cursor: pointer;

    &:hover {
      text-decoration: underline; /* Tambahkan efek hover */
    }
  }

  @media (max-width: 768px) {
    /* Pastikan tombol tetap berada di ujung kanan untuk mobile */
    .header-control {
      top: 0px;
      right: 15px;
    }
  }
`;

function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      {/* Teks Admin */}
      <Typography.Text className="welcome-text">Ganeshop Admin</Typography.Text>

      {/* Tombol Sign Out */}
      <div className="header-control">
        <Button
          className="btn-sign-in"
          type="text"
          onClick={() => navigate('/login', { replace: true })}
        >
          <LogoutOutlined />
          <span>Sign Out</span>
        </Button>
      </div>
    </HeaderContainer>
  );
}

export default Header;
