import React from "react";
import { Layout } from "antd";
import Header from "./Header";
import Footer from "./Footer";

const BaseLayout = ({ children }) => {
  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Content>
          {children}
      </Layout.Content>
      <Layout.Header>
        <Footer />
      </Layout.Header>
    </Layout>
  );
};

export default BaseLayout;
