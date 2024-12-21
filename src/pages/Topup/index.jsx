import { Col, Row, Typography, Card, Input, Button, Modal, notification } from "antd";
import { useState } from "react";
import telkomsel from "../../assets/images/ml.png";
import diamondIcon from "../../assets/images/diamond.png";
import bankIcon from "../../assets/images/Gopay.png";
import ewalletIcon from "../../assets/images/Dana.png";
import creditcardIcon from "../../assets/images/ovo.png";
import shopee from "../../assets/images/shopee.jpg";
import { useEffect } from "react";



const { Title, Text } = Typography;

const Mobilelegends = () => {
  const [selectedDiamond, setSelectedDiamond] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  

  const diamondOptions = [
    { label: "Diamond 10", value: 10, price: 10000 },
    { label: "Diamond 20", value: 20, price: 20000 },
    { label: "Diamond 50", value: 50, price: 50000 },
    { label: "Diamond 100", value: 100, price: 100000 },
  ];

  const paymentMethods = [
    { label: "GO-PAY", value: "bank", icon: bankIcon },
    { label: "DANA", value: "ewallet", icon: ewalletIcon },
    { label: "OVO", value: "creditcard", icon: creditcardIcon },
    { label: "SHOPEEPAY", value: "shopee", icon: shopee },
  ];

  const getPrice = () => {
    if (!selectedDiamond || !selectedPaymentMethod) return null;
    const selected = diamondOptions.find((option) => option.value === selectedDiamond);
    return selected ? `Rp ${selected.price.toLocaleString()}` : null;
  };

  const handlePurchase = () => {
    if (!selectedDiamond || !selectedPaymentMethod) {
      notification.error({
        message: "Error",
        description: "Silakan pilih Diamond dan Metode Pembayaran terlebih dahulu!",
      });
      return;
    }
    notification.success({
      message: "Berhasil",
      description: "Pesanan Anda berhasil diproses.",
    });
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="layout-content" style={{ padding: "20px", position: "relative" }}>
      <Row gutter={[24, 0]} style={{ marginTop: "20px" }}>
        <Col xs={24} md={12}>
          <Card bordered={false} style={{ textAlign: "center" }}>
            <img
              src={telkomsel}
              alt="Mobile Legends"
              style={{ width: "100px", marginBottom: "12px", display: "block", margin: "0 auto" }}
            />
            <Title level={4}>Mobile Legends</Title>
            <Text>
              Cara Order
              <ol style={{ textAlign: "left", margin: "10px 20px" }}>
                <li>Masukkan ID User Mobile Legends</li>
                <li>Pilih Diamond</li>
                <li>Pilih Metode Pembayaran</li>
                <li>Pesanan Akan di Proses Oleh Sistem</li>
                <li>Pembayaran sesuai Metode dipilih</li>
              </ol>
            </Text>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card bordered={false}>
            <div style={{ marginBottom: "20px" }}>
              <Text>ID User</Text>
              <Input placeholder="Masukkan ID User" style={{ marginTop: "8px" }} />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Text>Pilih Diamond</Text>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "8px" }}>
                {diamondOptions.map((diamond) => (
                  <Button
                    key={diamond.value}
                    type={selectedDiamond === diamond.value ? "primary" : "default"}
                    onClick={() => setSelectedDiamond(diamond.value)}
                    icon={<img src={diamondIcon} alt="Diamond" style={{ width: "16px", marginRight: "8px" }} />}
                  >
                    {diamond.label}
                  </Button>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Text>Metode Pembayaran</Text>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "8px" }}>
                {paymentMethods.map((method) => (
                  <Card
                    key={method.value}
                    hoverable
                    style={{
                      width: "120px",
                      textAlign: "center",
                      border: selectedPaymentMethod === method.value ? "2px solid #1890ff" : "1px solid #d9d9d9",
                    }}
                    onClick={() => setSelectedPaymentMethod(method.value)}
                  >
                    <img src={method.icon} alt={method.label} style={{ width: "50px", marginBottom: "10px" }} />
                    {method.label}
                  </Card>
                ))}
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <Text style={{ fontSize: "16px", fontWeight: "bold" }}>Harga</Text>
              <div style={{ margin: "10px 0", fontSize: "18px", color: "#000" }}>
                {getPrice() || "Pilih Diamond dan Metode Pembayaran"}
              </div>
              <Button type="primary" size="large" style={{ width: "100%" }} onClick={handlePurchase}>
                BELI SEKARANG
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
      <Modal
        title={null}
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        centered
        bodyStyle={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#f4f6f8",
          borderRadius: "12px",
        }}
      >
        <div
          style={{
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffe58f",
              color: "#faad14",
              fontWeight: "bold",
              fontSize: "16px",
              padding: "5px 10px",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            PENDING
          </div>
          <div>
            <Text style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>
              <b>ID Mobile Legends:</b> 1
            </Text>
            <Text style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>
              <b>Nama User:</b> MexiouS
            </Text>
            <Text style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>
              <b>Zone ID:</b> 9876
            </Text>
            <Text style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>
              <b>Total Harga:</b> {getPrice()}
            </Text>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px" }}>
              <img
                src={ewalletIcon}
                alt="DANA"
                style={{ width: "40px", marginRight: "10px" }}
              />
              <Text style={{ fontSize: "16px", fontWeight: "bold" }}>DANA</Text>
            </div>
          </div>
          <Button
            type="primary"
            style={{
              marginTop: "20px",
              width: "100%",
              backgroundColor: "#1890ff",
              borderColor: "#1890ff",
            }}
            onClick={handleModalClose}
          >
            Selesai
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Mobilelegends;
