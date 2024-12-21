import React from "react";
import { Card, Row } from "antd";

import ml from "../../assets/images/ml.png";
import ff from "../../assets/images/free.png";
import pubg from "../../assets/images/pubg.png";
import valo from "../../assets/images/valo.png";
import genshin from "../../assets/images/genshin.png";

const GameCards = ({ handleCardClick }) => {
  const cardsData = [
    { src: ml, alt: "Mobile Legends", path: "/Topup/mobile-legends" },
    { src: ff, alt: "Free Fire", path: "/Topup/free-fire" },
    { src: pubg, alt: "PUBG Mobile", path: "/Topup/pubg-mobile" },
    { src: valo, alt: "Valorant", path: "/Topup/valorant" },
    { src: genshin, alt: "Genshin Impact", path: "/Topup/genshin-impact" },
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

export default GameCards;
