import React from "react";
import { Modal, Form, Input, Button, Space } from "antd";

import { updateCategory } from "../../api/category";
import { notifyScreen } from "../../utils/notify";

const ModalUpdate = ({ visible, updateVisible, idCategory, changeStatus }) => {

  const [form]=Form.useForm();

  const handleUpdate = async (values) => {
    let id = idCategory;
    let name = values.nameCategory;
    let body = { name };
    try {
      let res = await updateCategory(id, body);
      if (res.status === 200) {
        form.resetFields();
        notifyScreen("success", res.data.statusCode, res.data.message);
        changeStatus();
        return updateVisible();
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          notifyScreen(
            "error",
            error.response.data.statusCode,
            error.response.data.message
          );
        }
      } else {
        notifyScreen("error", "500", "Lỗi không xác định");
      }
    }
  };

  return (
    <Modal
      footer={false}
      title="Cập nhật"
      visible={visible}
      onCancel={updateVisible}
    >
      <Form onFinish={handleUpdate} form={form}>
        <Form.Item
          name="nameCategory"
          rules={[{ required: true, message: "Vui lòng nhập loại sản phẩm!" }]}
          label="Tên : "
        >
          <Input placeholder="Nhập tên loại sản phẩm" allowClear={true}/>
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Cập nhật
            </Button>
            <Button type="primary" onClick={updateVisible}>
              Thoát
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalUpdate;
