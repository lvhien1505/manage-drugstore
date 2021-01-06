import React, { useState, useEffect } from "react";
import { checkAuth } from "../../api/login";

const DashBoard = ({ history }) => {
  const _checkAuth = async () => {
    try {
      let res = await checkAuth();
      if (res) {
        if (res.data.role !== "admin") {
          history.push("/");
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
  }, []);
  
  return <div>
      <p>oke</p>
  </div>;
};

export default DashBoard;
