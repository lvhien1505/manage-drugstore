import React from 'react';
import {Form,Input,Button} from 'antd';

import {createCategory} from '../../api/category';
import {notifyScreen} from '../../utils/notify'

const FormUpdate = () => {
    const handleAdd=async (values)=>{
        let name=values.nameCategory;
        let body={name}
        try {
            let res = await createCategory(body);
            if (res.status === 200) {
              return  notifyScreen("success", res.data.statusCode, res.data.message);
            }
          } catch (error) {
            if (error.response) {
              if (error.response.data) {
                notifyScreen("error",error.response.data.statusCode,error.response.data.message)
              }
            }else{
              notifyScreen("error","500","Lỗi không xác định")
            }
          }
    }

    return (
        <Form
          onFinish={handleAdd}
        >
            <Form.Item 
              name="nameCategory"
              rules={[{ required: true, message: "Vui lòng nhập loại sản phẩm!" }]}
              label="Tên loại sản phẩm"
            >
                <Input placeholder="Nhập tên loại sản phẩm"/>
            </Form.Item>
            <Form.Item>
               <Button  type="primary" htmlType="submit">
                   Thêm
               </Button>
            </Form.Item>
        </Form>
    )
}

export default FormUpdate
