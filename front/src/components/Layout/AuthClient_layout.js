import React, { useEffect } from "react";
import utils from "../utils";
import { Outlet, useNavigate } from "react-router-dom";

const AuthClient_layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getRole = async () => {
      try {
        const role = await utils.getUserRole();
        if (!role || role === "Unauthorized") {
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
        navigate("/login");
      }
    };

    getRole();
  }, []);

  return <Outlet />;
};

export default AuthClient_layout;
