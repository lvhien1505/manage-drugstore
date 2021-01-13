import React,{useState} from "react";
import { Row, Col,Menu } from "antd";

import FormAddCategory from '../Category/FormAdd'

import ListCategory from '../../views/Category/ListCategory'

const Content = () => {
  const [contentChildren,setContentChildren]=useState(null);

  const handleShowFormAddCategory=()=>{
       return setContentChildren(<FormAddCategory/>)
  }

  const handleShowListCategory=()=>{
      return setContentChildren(<ListCategory/>)
  }
  return (
    <div>
      <Row>
        <Col>
          <Menu theme="dark" mode="inline">
            <Menu.SubMenu key={0} title="Giao dịch">
              <Menu.Item key={0.1}>Nhập hàng</Menu.Item>
              <Menu.Item key={0.2}>Bán hàng</Menu.Item>
              <Menu.Item key={0.3}>Lịch sử</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key={1} title="Sản phẩm">
              <Menu.Item key={1.1}>Danh sách</Menu.Item>
              <Menu.Item key={1.2}>Thêm mới</Menu.Item>
              <Menu.Item key={1.3}>Cập nhật</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key={2} title="Loại sản phẩm">
              <Menu.Item key={2.1} onClick={handleShowFormAddCategory}>Thêm mới</Menu.Item>
              <Menu.Item key={2.2} onClick={handleShowListCategory}>Cập nhật</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key={3} title="Nhà cung cấp">
              <Menu.Item key={3.1}>Danh sách</Menu.Item>
              <Menu.Item key={3.2}>Thêm mới</Menu.Item>
              <Menu.Item key={3.3}>Cập nhật</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key={4} title="Khách hàng">
              <Menu.Item key={4.1}>Danh sách</Menu.Item>
              <Menu.Item key={4.2}>Thêm mới</Menu.Item>
              <Menu.Item key={4.3}>Cập nhật</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key={5} title="Doanh thu">
              <Menu.Item key={5.1}>Doanh thu</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key={6} title="Hàng tồn kho">
              <Menu.Item key={6.1}>Danh sách</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Col>
        <Col>
          {contentChildren}
        </Col>
      </Row>
    </div>
  );
};

export default Content;
