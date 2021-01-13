import React from "react";
import { Layout } from "antd";
import Header from "./Header";
import Content from '../Content/Content'
import Footer from "./Footer";

const BaseLayout = () => {
  return (
    <Layout>
      <Layout.Header
        style={{ height: "15vh", backgroundColor: "#6ab4d9" }}
      >
        <Header />
      </Layout.Header>
      <Layout.Content style={{ height: "85vh"}}>
        <Content/>
      </Layout.Content>
      <Layout.Header>
        <Footer />
      </Layout.Header>
    </Layout>
  );
};

export default BaseLayout;
