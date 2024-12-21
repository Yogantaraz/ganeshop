/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { Layout, Row, Col, Typography } from 'antd';
import { HeartFilled } from '@ant-design/icons';

function Footer() {
  const { Footer: AntFooter } = Layout;
  const { Text } = Typography;

  return (
    <AntFooter style={{ background: '#FFD700' }}>
      {/* Informasi Tambahan */}
      <div style={{ marginTop: "40px", textAlign: "center", backgroundColor: "#FFD700", padding: "10px" }}>
        <Text strong style={{ color: "#fafafa" }}>More Information!</Text>
        <div>
          <Text>Instagram: @E-MORP</Text> <br />
          <Text>Phone: 085173321510</Text> <br />
          <Text>Email: EMORP-SHOP@gmail.com</Text>
        </div>
      </div>
    </AntFooter>
  );
}

export default Footer;

