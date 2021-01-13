import React from 'react';
import {Row,Col,Image} from 'antd';
import {SettingOutlined} from '@ant-design/icons'
import logo from '../../logo/logo.png';
import "./Header.scss"

const Header = () => {
    return (
        <Row  justify="space-between" style={{height:"100%"}}>
            <Col style={{height:"100%",width:"200px",borderRight:"1px solid"}}>
              <Image width="105px" height="105px" src={logo} preview={false}/>
            </Col>
            <Col style={{height:"100%",display:'flex',justifyContent:"center",alignItems:"center"}}>
              <SettingOutlined style={{fontSize:"23px",color:"white"}} />
            </Col>
        </Row>
    )
}

export default Header
