import React from 'react';
import {Row,Col,Image} from 'antd'
import logo from '../../logo/logo.png';
import "./Header.scss"

const Header = () => {
    return (
        <Row>
            <Col>
              <Image src={logo}/>
            </Col>
            <Col>Menu</Col>
        </Row>
    )
}

export default Header
