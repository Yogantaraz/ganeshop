import React from "react";
import { Card, Row } from "antd";
import genshin from "../../assets/images/genshin.png";
import telkomsel from "../../assets/images/Telkomsel.png";
import axis from "../../assets/images/axis.png";
import three from "../../assets/images/three.png";
import byu from "../../assets/images/byu.png";
import smartfren from "../../assets/images/smartfren.png";
import im3 from "../../assets/images/im3.png";
import xl from "../../assets/images/xl.png";

const PulsaCards = ({ handleCardClick }) => {
  const cardsData = [
    { src: telkomsel, alt: "Pulsa Telkomsel", path: "/pulsa/telkomsel" },
    { src: axis, alt: "Pulsa Axis", path: "/pulsa/axis" },
    { src: three, alt: "Pulsa Three", path: "/pulsa/three" },
    { src: byu, alt: "Pulsa By.U", path: "/pulsa/byu" },
    { src: smartfren, alt: "Pulsa Smartfren", path: "/pulsa/smartfren" },
    { src: im3, alt: "Pulsa IM3", path: "/pulsa/im3" },
    { src: xl, alt: "Pulsa XL", path: "/pulsa/xl" },
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

export default PulsaCards;
