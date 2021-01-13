import React, { useState, useEffect } from "react";

import BaseLayout from '../../components/Layout/BaseLayout'
import { checkAuth } from "../../api/login";

const DashBoard = ({ history,match }) => {
  const _checkAuth = async () => {
    try {
      let res = await checkAuth();
      if (res) {
        if (res.data.role !== "admin") {
         return history.push("/");
        }
      }
    } catch (error) {
      if (error) {
        history.push("/");
      }
    }
  };

  useEffect(() => {
    _checkAuth();
  }, [match]);
  
  return <BaseLayout>
      <p>oke</p>
  </BaseLayout>;
};

export default DashBoard;
