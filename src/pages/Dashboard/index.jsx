import { Col, Row, Typography, Card, Carousel } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import dashboardimg from "../../assets/images/Dashboard.png";
import dashboardimg2 from "../../assets/images/Dashboard2.png";
import telkomsel from "../../assets/images/Telkomsel.png";
import ml from "../../assets/images/ml.png";
import ff from "../../assets/images/ff.png";
import pubg from "../../assets/images/pubg.png";
import valo from "../../assets/images/valo.png";
import Axis from "../../assets/images/Axis.png";
import Indosat from "../../assets/images/Indosat.png";
import smrt from "../../assets/images/Smrt.png";
import Bri from "../../assets/images/Bri.png";

const { Title, Text } = Typography;

const CardItem = ({ src, alt, text, onClick }) => (
  <Col xs={12} md={6}>
    <Card
      bordered={false}
      className="service-card"
      style={{ textAlign: "center", cursor: "pointer" }}
      onClick={onClick} 
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100px",
          marginBottom: "12px",
          borderRadius: "10px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <Text>{text}</Text>
    </Card>
  </Col>
);

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate(); 
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1];


  const handleCardClick = (service) => {
    navigate(`/pembayaran`); 
  };

  return (
    <div className="layout-content" style={{ padding: "20px" }}>
      {/* Promo Banner with Carousel */}
      <Row justify="center" gutter={[24, 0]}>
          <Col xs={24} sm={20} md={16} lg={14}>
            <Card
              bordered={false}
              className="promo-banner-card"
              style={{
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <Carousel autoplay autoplaySpeed={1500}>
                <div>
                  <img
                    src={dashboardimg}
                    alt="Promo 1"
                    style={{
                      width: "100%",
                      maxHeight: "300px", 
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div>
                  <img
                    src={dashboardimg2}
                    alt="Promo 2"
                    style={{
                      width: "100%",
                      maxHeight: "300px", 
                      objectFit: "cover",
                    }}
                  />
                </div>
              </Carousel>
            </Card>
          </Col>
      </Row>

      {/* Pulsa Reguler */}
      <div style={{ marginTop: "24px" }}>
        <Title level={4}>Pulsa Reguler</Title>
        <Row gutter={[16, 16]}>
          <CardItem src={telkomsel} alt="Telkomsel" text="Telkomsel" onClick={() => handleCardClick("telkomsel")} />
          <CardItem src={Axis} alt="Axis" text="Axis" onClick={() => handleCardClick("axis")} />
          <CardItem src={smrt} alt="Smartfren" text="Smartfren" onClick={() => handleCardClick("smartfren")} />
          <CardItem src={Indosat} alt="Indosat" text="Indosat" onClick={() => handleCardClick("indosat")} />
        </Row>
      </div>

      {/* Top Up Game */}
      <div style={{ marginTop: "24px" }}>
        <Title level={4}>Top Up Game</Title>
        <Row gutter={[16, 16]}>
          <CardItem src={ml} alt="Mobile Legends" text="Mobile Legends" onClick={() => handleCardClick("mobile-legends")} />
          <CardItem src={valo} alt="Valorant" text="Valorant" onClick={() => handleCardClick("valorant")} />
          <CardItem src={pubg} alt="PUBG" text="PUBG" onClick={() => handleCardClick("pubg")} />
          <CardItem src={ff} alt="Free Fire" text="Free Fire" onClick={() => handleCardClick("free-fire")} />
        </Row>
      </div>

      {/* Saldo Emoney */}
      <div style={{ marginTop: "40px" }}>
        <Title level={4}>Saldo Emoney</Title>
        <Row gutter={[16, 16]}>
          <CardItem src={Bri} alt="BRI" text="BRI" onClick={() => handleCardClick("bri")} />
        
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
