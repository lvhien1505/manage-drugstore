import React,{useState,useEffect} from 'react';
import {Form,Input,Button,Select,Upload} from 'antd';

import {createProduct} from '../../api/product';
import {getListCategory} from '../../api/category';
import {getListPartner} from '../../api/partner';
import {notifyScreen} from '../../utils/notify'

const FormUpdate = () => {
    const [categories,setCategories]=useState([])
    const [partners,setPartners]=useState([])

    const _getListCategory=()=>{
      try {
        let res = await getListCategory();
        if (res.status === 200) {
          return  setCategories(res.data);
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

    const _getListPartner=()=>{
      try {
        let res = await getListPartner();
        if (res.status === 200) {
          return  setPartners(res.data);
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

    const handleAdd=async (values)=>{
        let name=values.nameCategory;
        let body={name}
        try {
            let res = await createProduct(body);
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

    useEffect(() => {
      _getListCategory();
      _getListPartner();
    }, [])

    return (
        <Form
          onFinish={handleAdd}
        >
            <Form.Item 
              name="nameProduct"
              rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm!" }]}
              label="Tên sản phẩm"
            >
                <Input placeholder="Nhập tên sản phẩm"/>
            </Form.Item>
            <Form.Item 
              name="categoryProduct"
              rules={[{ required: true, message: "Vui lòng nhập loại sản phẩm!" }]}
              label="Loại sản phẩm"
            >
                <Select>

                </Select>
            </Form.Item>
            <Form.Item 
              name="moneyInProduct"
              rules={[{ required: true, message: "Giá nhập vào của sản phẩm!" }]}
              label="Giá nhập"
            >
                <Input placeholder="Giá nhập"/>
            </Form.Item>
            <Form.Item 
              name="moneyOutProduct"
              rules={[{ required: true, message: "Giá bán của sản phẩm!" }]}
              label="Giá bán"
            >
                <Input placeholder="Giá bán"/>
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
