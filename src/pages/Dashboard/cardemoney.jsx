import React from "react";
import { Card, Row } from "antd";

const EmoneyCards = ({ handleCardClick }) => {
  const cardsData = [
    { src: ("../../assets/images/genshin.png"), alt: "Saldo OVO", path: "/emoney/ovo" },
    { src: ("../../assets/images/genshin.png"), alt: "Saldo GoPay", path: "/emoney/gopay" },
  ];

  return (
    <Row style={{ display: "flex", flexWrap: "wrap", justifyContent: "start", gap: "16px" }}>
      {cardsData.map((item, index) => (
        <div key={index} style={{ width: "calc(20% - 16px)", minWidth: "200px" }}>
          <Card
            bordered={false}
            onClick={() => handleCardClick(item.path)}
            style={{
              overflow: "hidden",
              cursor: "pointer",
              borderRadius: "12px",
            }}
            styles={{ body: { padding: 0 } }}>
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
  );
};

export default EmoneyCards;
