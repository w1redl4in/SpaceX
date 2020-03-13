import React from "react";
import logo from "./logo.svg";
import { Button, Card, Row, Col, Typography } from "antd";

import "./App.css";

function App(Image: React.ReactNode) {
  return (
    <div className="App">
      <Row style={{ minHeight: "100vh" }} align="middle" justify="center">
        <Col span={6}>
          <Card
            title="Vampeta"
            cover={
              <img
                src="https://3.bp.blogspot.com/-g0Q-KDzaZks/VuhitcU6WXI/AAAAAAAAA9s/zMVWdYPIP5AnvqP1p7mcQRI51TJ3oIGAQ/s1600/vampeta-toma-sorvete-enquanto-acompanha-uma-partida-de-futebol-1299716262839_1024x768.jpg"
                style={{ width: "480px" }}
              />
            }
          >
            <Row
              align="middle"
              justify="start"
              style={{ flexDirection: "column" }}
            >
              <Typography.Title level={3}>
                Marcos André Batista dos Santos
              </Typography.Title>
              <Typography.Text>46 anos</Typography.Text>
              <Typography.Text>Adora sorvetes</Typography.Text>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;
