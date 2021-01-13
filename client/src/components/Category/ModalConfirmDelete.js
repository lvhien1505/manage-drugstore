import React from 'react';
import {Modal,Space,Button} from 'antd';

import {removeCategory} from '../../api/category';
import { notifyScreen } from "../../utils/notify";

const ModalConfirmDelete = ({ visible, updateVisible, idCategory, changeStatus }) => {
    const handleDelete = async () => {
        let id = idCategory;
        try {
          let res = await removeCategory(id);
          if (res.status === 200) {
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
        <Modal visible={visible} footer={false} onCancel={updateVisible} title="Xóa">
            <p>Xác nhận xóa ?</p>
            <Space>
                <Button type="danger" onClick={handleDelete}>Có</Button>
                <Button type="primary" onClick={updateVisible}>Không</Button>
            </Space>
        </Modal>
    )
}

export default ModalConfirmDelete
