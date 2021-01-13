import React, { useState, useEffect } from "react";
import { Table, Space, Button } from "antd";

import ModalUpdate from "../../components/Category/ModalUpdate";
import ModalConfirmDelete from "../../components/Category/ModalConfirmDelete";

import { getListCategory } from "../../api/category";
import { notifyScreen } from "../../utils/notify";

const ListCategory = () => {
  const [categories, setCategories] = useState([]);
  const [changeStatus, setChangeStatus] = useState(false);
  const [idCategory, setIdCategory] = useState("");
  const [visibleModalUpdate, setVisibleModalUpdate] = useState(false);
  const [visibleModalDelete, setVisibleModalDelete] = useState(false);

  const _getListCategory = async () => {
    try {
      let res = await getListCategory();
      if (res.status === 200) {
        return setCategories(res.data);
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

  const handleVisibleUpdate = () => {
    return setVisibleModalUpdate(false);
  };

  const handleVisibleDelete = () => {
    return setVisibleModalDelete(false);
  };

  const handleChangeStatus = () => {
    return setChangeStatus(true);
  };

  const handleUpdate = (id) => {
    setChangeStatus(false);
    setIdCategory(id);
    return setVisibleModalUpdate(true);
  };

  const handleDelete = (id) => {
    setChangeStatus(false);
    setIdCategory(id);
    return setVisibleModalDelete(true);
  };

  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      render: (name) => <span>{name}</span>,
    },
    {
      title: "Action",
      dataIndex: "_id",
      key: "action",
      render: (id) => (
        <Space size="small" direction="vertical">
          <Button
            style={{ width: "90px" }}
            onClick={() => handleUpdate(id)}
            type="primary"
          >
            Cập nhật
          </Button>
          <Button
            style={{ width: "90px" }}
            onClick={() => handleDelete(id)}
            type="danger"
          >
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    _getListCategory();
  }, [changeStatus]);
  return (
    <div>
      <Table columns={columns} dataSource={categories} />
      <ModalUpdate
        visible={visibleModalUpdate}
        updateVisible={handleVisibleUpdate}
        idCategory={idCategory}
        changeStatus={handleChangeStatus}
      />
      <ModalConfirmDelete
        visible={visibleModalDelete}
        updateVisible={handleVisibleDelete}
        idCategory={idCategory}
        changeStatus={handleChangeStatus}
      />
    </div>
  );
};

export default ListCategory;
