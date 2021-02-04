import React, { useState } from "react";
import { Tabs, Input, Row, Col, Button, Space, Select, Modal, Tag } from "antd";
import {
  SearchOutlined,
  PlusOutlined,
  UserOutlined,
  EditOutlined,
} from "@ant-design/icons";

const SiderTab = () => {
  const handleChange = () => {};
  const handleSearch = () => {};
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        height: "90vh",
        marginTop: "-17px",
        backgroundColor: "#ebebeb",
      }}
    >
      <div style={{ backgroundColor: "#fff", width: "80%" }}>lala</div>
      <div style={{ backgroundColor: "#fff", minWidth: "370px" }}>
        <Row
          justify="space-between"
          style={{
            width: "90%",
            margin: "0 auto",
            marginTop: "10px",
          }}
        >
          <Col span={12}>
            <UserOutlined /> Admin
          </Col>
          <Col span={4}>
            <span style={{ textDecorationLine: "underline" }}>13/01/2021</span>
          </Col>
          <Col>
            <span style={{ textDecorationLine: "underline" }}>23:49</span>
          </Col>
        </Row>
        <div
          style={{
            width: "90%",
            margin: "0 auto",
            marginTop: "15px",
            borderBottom: "1px solid #0090da",
          }}
        >
          <span>
            <SearchOutlined />
          </span>
          <Select
            style={{ width: "82%" }}
            placeholder="Tìm khách hàng (F4)"
            filterOption={false}
            onChange={handleChange}
            onSearch={handleSearch}
            labelInValue
            mode="multiple"
            suffixIcon={<SearchOutlined />}
            bordered={false}
          >
            <Select.Option value="luc" key="1">
              Hien
            </Select.Option>
            <Select.Option value="lucy" key="2">
              Oke
            </Select.Option>
            <Select.Option value="luy" key="3">
              La
            </Select.Option>
          </Select>
          <span>
            <Button style={{ backgroundColor: "#fff", border: "none" }}>
              <PlusOutlined />
            </Button>
          </span>
        </div>
        <div
          style={{
            width: "90%",
            margin: "0 auto",
            marginTop: "20px",
          }}
        >
          <Tabs>
            <Tabs.TabPane tab="Hóa đơn" key="1" style={{ height: "700px" }}>
              <Row justify="space-between">
                <Col span={12}>
                  <Space>
                    <span>Tổng tiền hàng</span>
                    <Tag color="#f50">0</Tag>
                  </Space>
                </Col>
                <Col span={1}>
                  <p>0</p>
                </Col>
              </Row>
              <Row justify="space-between" style={{ marginBottom: "12px" }}>
                <Col span={12}>
                  <Space>
                    <span>Giảm giá</span>
                    <Tag color="#108ee9">VND</Tag>
                  </Space>
                  <Tag color="#f50">%</Tag>
                </Col>
                <Col span={1}>
                  <span>0</span>
                </Col>
              </Row>
              <Row justify="space-between" style={{ marginBottom: "12px" }}>
                <Col span={12}>
                  <span>Khách cần trả</span>
                </Col>
                <Col span={1}>
                  <span>0</span>
                </Col>
              </Row>
              <Row justify="space-between" style={{ marginBottom: "12px" }}>
                <Col span={12}>
                  <span>Khách thanh toán (F8)</span>
                </Col>
                <Col span={6} style={{ position: "relative" }}>
                  <div
                    style={{
                      borderBottom: "1px solid black",
                      position: "absolute",
                      top: "-10px",
                    }}
                  >
                    <Input bordered={false} defaultValue={0} />
                  </div>
                </Col>
              </Row>
              <Row justify="space-between">
                <Col span={12}>
                  <span>Tiền thừa trả khách</span>
                </Col>
                <Col span={1}>
                  <p>0</p>
                </Col>
              </Row>
              <div style={{ marginTop: "50px", position: "relative" }}>
                <div
                  style={{
                    borderBottom: "1px solid #0090da",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      width: "5%",
                      position: "absolute",
                      top: "5px",
                    }}
                  >
                    <EditOutlined />
                  </span>
                  <Input.TextArea
                    placeholder="Ghi chú"
                    bordered={false}
                    style={{ width: "85%", marginLeft: "10px" }}
                    autoSize
                  ></Input.TextArea>
                </div>
                <div
                  style={{
                    width: "100%",
                    position: "absolute",
                    top: "300px",
                  }}
                >
                  <Space direction="vertical" style={{ width: "100%" }}>
                    <Button
                      style={{
                        width: "100%",
                        height: "66px",
                        backgroundColor: "#56ad51",
                        borderRadius: "4px",
                        color: "#fff",
                        fontSize: "18px",
                        fontWeight: "600",
                      }}
                    >
                      Thanh toán & In (F9)
                    </Button>
                    <Button
                      style={{
                        width: "100%",
                        height: "66px",
                        backgroundColor: "#56ad51",
                        borderRadius: "4px",
                        color: "#fff",
                        fontSize: "18px",
                        fontWeight: "600",
                      }}
                    >
                      Thanh toán (F10)
                    </Button>
                  </Space>
                </div>
              </div>
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SiderTab;
