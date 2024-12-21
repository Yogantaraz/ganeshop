import { Col, Row, Typography, Card, Input, Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import telkomsel from "../../assets/images/Telkomsel.png";

const { Title, Text } = Typography;

const Pembayaran = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1];

  return (
    <div className="layout-content" style={{ padding: "20px", position: "relative" }}>
      <Row gutter={[24, 0]} style={{ marginTop: "20px" }}>
        <Col xs={24} md={12}>
          <Card bordered={false} style={{ textAlign: "center" }}>
            <img
              src={telkomsel}
              alt="Telkomsel"
              style={{ width: "100px", marginBottom: "12px", display: "block", margin: "0 auto" }}
            />
            <Title level={4}>Telkomsel</Title>
            <Text>
              Cara Order
              <ol style={{ textAlign: "left", margin: "10px 20px" }}>
                <li>Masukkan Nomor Telkomsel</li>
                <li>Pilih Nominal Layanan</li>
                <li>Pilih Metode Pembayaran</li>
                <li>Masukkan Email Untuk Notifikasi Pesanan</li>
                <li>Pesanan Akan di Proses Oleh Sistem</li>
              </ol>
            </Text>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card bordered={false}>
            <div style={{ marginBottom: "20px" }}>
              <Text>No. Telepon</Text>
              <Input placeholder="Masukkan Nomor Telepon" style={{ marginTop: "8px" }} />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Text>Pilih layanan</Text>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "8px" }}>
                <Button type="primary">Pulsa 5.000</Button>
                <Button type="primary">Pulsa 10.000</Button>
                <Button type="primary">Pulsa 15.000</Button>
                <Button type="primary">Pulsa 25.000</Button>
                <Button type="primary">Pulsa 50.000</Button>
                <Button type="primary">Pulsa 100.000</Button>
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <Text style={{ fontSize: "16px", fontWeight: "bold" }}>Harga</Text>
              <div style={{ margin: "10px 0", fontSize: "18px", color: "#000" }}>Rp 0</div>
              <Button type="primary" size="large" style={{ width: "100%" }}>
                BELI SEKARANG
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Pembayaran;
