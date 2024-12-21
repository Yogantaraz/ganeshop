import { useState } from "react";
import { Col, Row, Card, Button, Carousel, Form, Input, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { CustomerServiceOutlined } from "@ant-design/icons";

// Import gambar
import ml from "../../assets/images/ml.png";
import ff from "../../assets/images/free.png";
import pubg from "../../assets/images/pubg.png";
import valo from "../../assets/images/valo.png";
import genshin from "../../assets/images/genshin.png";
import telkomsel from "../../assets/images/Telkomsel.png";
import axis from "../../assets/images/axis.png";
import three from "../../assets/images/three.png";
import byu from "../../assets/images/byu.png";
import smartfren from "../../assets/images/smartfren.png";
import im3 from "../../assets/images/im3.png";
import xl from "../../assets/images/xl.png";
import gopay from "../../assets/images/gopay2.png";
import dana from "../../assets/images/dana2.png";
import ovo from "../../assets/images/ovo2.png";
import shopeepay from "../../assets/images/shopee2.png";

// Gambar untuk carousel
import carousel1 from "../../assets/images/1.png";
import carousel2 from "../../assets/images/2.png";
import carousel3 from "../../assets/images/3.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("game");
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleCardClick = (path) => {
    navigate(path);
  };

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  const categories = [
    { name: "Top Up Game", key: "game" },
    { name: "Pulsa Reguler", key: "pulsa" },
    { name: "Saldo Emoney", key: "emoney" },
  ];

  const cardsData = {
    game: [
      { src: ml, alt: "Mobile Legends", path: "/Topup/mobile-legends" },
      { src: ff, alt: "Free Fire", path: "/Topup/free-fire" },
      { src: pubg, alt: "PUBG Mobile", path: "/Topup/pubg-mobile" },
      { src: valo, alt: "Valorant", path: "/Topup/valorant" },
      { src: genshin, alt: "Genshin Impact", path: "/Topup/genshin-impact" },
      { src: genshin, alt: "Genshin Impact", path: "/Topup/genshin-impact" },
      { src: genshin, alt: "Genshin Impact", path: "/Topup/genshin-impact" },
    ],
    pulsa: [
      { src: telkomsel, alt: "Pulsa Telkomsel", path: "/pulsa/telkomsel" },
      { src: byu, alt: "Pulsa Telkomsel", path: "/pulsa/telkomsel" },
      { src: im3, alt: "Pulsa Telkomsel", path: "/pulsa/telkomsel" },
      { src: smartfren, alt: "Pulsa Telkomsel", path: "/pulsa/telkomsel" },
      { src: three, alt: "Pulsa Telkomsel", path: "/pulsa/telkomsel" },
      { src: xl, alt: "Pulsa Telkomsel", path: "/pulsa/telkomsel" },
      { src: axis, alt: "Pulsa Telkomsel", path: "/pulsa/telkomsel" },
    ],
    emoney: [
      { src: gopay, alt: "Saldo OVO", path: "/emoney/gopay" },
      { src: ovo, alt: "Saldo GoPay", path: "/emoney/ovo" },
      { src: dana, alt: "Saldo OVO", path: "/emoney/dana" },
      { src: shopeepay, alt: "Saldo GoPay", path: "/emoney/shopeepay" },
    ],
  };

  const carouselData = [
    { src: carousel1, alt: "Promo 1" },
    { src: carousel2, alt: "Promo 2" },
    { src: carousel3, alt: "Promo 3" },
  ];

  return (
    <div className="layout-content" style={{ padding: "20px" }}>
      {/* Carousel */}
      <Carousel autoplay autoplaySpeed={1500}>
        {carouselData.map((item, index) => (
          <div key={index}>
            <img
              src={item.src}
              alt={item.alt}
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </div>
        ))}
      </Carousel>

      {/* Kategori */}
      <div style={{ marginTop: "24px", textAlign: "center" }}>
        {categories.map((category) => (
          <Button
            key={category.key}
            type={activeCategory === category.key ? "primary" : "default"}
            style={{
              margin: "0 8px",
              borderRadius: "8px",
            }}
            onClick={() => setActiveCategory(category.key)}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Card */}
      <div style={{ marginTop: "24px" }}>
        <Row
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "start",
            gap: "16px",
          }}
        >
          {cardsData[activeCategory].map((item, index) => (
            <div
              key={index}
              style={{
                width: "calc(20% - 16px)",
                minWidth: "200px",
              }}
            >
              <Card
                bordered={false}
                onClick={() => handleCardClick(item.path)}
                style={{
                  overflow: "hidden",
                  cursor: "pointer",
                  borderRadius: "12px",
                }}
                bodyStyle={{
                  padding: 0,
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Card>
            </div>
          ))}
        </Row>
      </div>

      {/* Flying Button */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <Button
          type="primary"
          shape="round"
          size="large"
          icon={<CustomerServiceOutlined />}
          onClick={showDrawer}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "#1890ff",
            borderColor: "#1890ff",
          }}
        >
          Customer Service
        </Button>
      </div>

      {/* Custom Drawer */}
      {drawerVisible && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "85%",
            maxWidth: "350px",
            maxHeight: "90vh", 
            backgroundColor: "#051c82", // Biru tua
            color: "black",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            borderRadius: "12px",
            zIndex: 1100,
            padding: "24px",
            overflowY: "auto", // Scroll untuk konten yang melebihi tinggi maksimal
          }}
        >
          <h3 style={{ textAlign: "center", color: "white" }}>Customer Service</h3>
          <Form layout="vertical">
            <Form.Item
              label={<span style={{ color: 'white' }}>ID Pesanan</span>}
              name="Id pesanan"
              rules={[{ required: true, message: "Mohon isi ID Pesanan Anda" }]}
            >
              <Input
                placeholder="Masukkan ID Pesanan Anda"
                style={{
                  backgroundColor: "#f0f0f0",
                  color: "black",
                }}
              />
            </Form.Item>

            <Form.Item
              label={<span style={{ color: 'white' }}>ID User / No Telepon</span>}
              name="Id user"
              rules={[
                { required: true, message: "Mohon isi ID User/No Telepon Anda" },
                { type: "ID", message: "Format Nomor tidak valid" },
              ]}
            >
              <Input
                placeholder="Masukkan ID User/No Telepon Anda"
                style={{
                  backgroundColor: "#f0f0f0",
                  color: "black",
                }}
              />
            </Form.Item>

            <Form.Item
              label={<span style={{ color: 'white' }}>Pesanan</span>}
              name="nama pesanan"
              rules={[{ required: true, message: "Mohon isi Nama Pesanan Anda" }]}
            >
              <Input
                placeholder="Masukkan Nama Pesanan Anda"
                style={{
                  backgroundColor: "#f0f0f0",
                  color: "black",
                }}
              />
            </Form.Item>

            <Form.Item
              label={<span style={{ color: 'white' }}>Harga</span>}
              name="harga"
              rules={[{ required: true, message: "Mohon isi Harga Pesanan Anda" }]}
            >
              <Input
                placeholder="Masukkan Harga Pesanan Anda"
                style={{
                  backgroundColor: "#f0f0f0",
                  color: "black",
                }}
              />
            </Form.Item>

            <Form.Item
              label={<span style={{ color: 'white' }}>Deskripsi</span>}
              name="deskripsi"
              rules={[{ required: true, message: "Mohon isi Deskripsi Pesanan Anda" }]}
            >
              <Input.TextArea
                placeholder="Tulis pesan Anda..."
                rows={4}
                style={{
                  backgroundColor: "#f0f0f0",
                  color: "black",
                }}
              />
            </Form.Item>

            <Form.Item>
              <Space style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    backgroundColor: "#1890ff",
                    borderColor: "#1890ff",
                    color: "white",
                  }}
                >
                  Kirim
                </Button>
                <Button
                  onClick={closeDrawer}
                  type="default"
                  style={{
                    color: "white",
                    borderColor: "#1890ff",
                    backgroundColor: "#1890ff",
                  }}
                >
                  Batal
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
      )}


      {/* Overlay */}
      {drawerVisible && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1000,
          }}
          onClick={closeDrawer}
        />
      )}
    </div>
  );
};

export default Dashboard;