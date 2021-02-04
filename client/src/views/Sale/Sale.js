import React, { useState } from "react";
import { Tabs, Input, Row, Col, Button, Space, Select, Modal, Tag } from "antd";
import { SearchOutlined, MenuOutlined, PlusOutlined } from "@ant-design/icons";

import SiderTab from "../../components/Sale/SiderTab";

const Sale = () => {
  return (
    <div>
      <div className="header">
        <div className="layout-header">
          <Row
            className="layout-header__row"
            justify="space-between"
            style={{
              width: "100%",
              height: "40px",
              backgroundColor: "#0090da",
            }}
          >
            <Col className="layout-header__left">
              <Input
                prefix={<SearchOutlined />}
                placeholder="Tìm mặt hàng (F3)"
                style={{
                  height: "32px",
                  width: "390px",
                  borderRadius: "5px",
                  margin: "4px 0 0 10px",
                }}
              />
            </Col>
            <Col className="layout-header__right">
              <Space style={{ margin: "4px 10px 0 0" }}>
                <Button style={{ backgroundColor: "#0090da" }}>
                  <PlusOutlined
                    style={{
                      fontSize: "18px",
                      color: "#fff",
                    }}
                  />
                </Button>
                <MenuOutlined
                  style={{
                    fontSize: "18px",
                    color: "#fff",
                  }}
                />
              </Space>
            </Col>
          </Row>
        </div>
        <div className="header-tab" style={{ margin: "-4px 10px 0 10px" }}>
          <Tabs>
            <Tabs.TabPane tab="Hóa đơn 1" key="1">
            </Tabs.TabPane>
            <Tabs.TabPane tab="Hóa đơn 2" key="2">
              <SiderTab />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Hóa đơn 3" key="3">
              <SiderTab />
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
      <div
        className="wrap-content"
        style={{
          position: "fixed",
          top: "67vh",
          width: "80.2%",
          height: "320px",
          backgroundColor: "#ebebeb",
        }}
      >
        oke
      </div>
    </div>
  );
};

export default Sale;
