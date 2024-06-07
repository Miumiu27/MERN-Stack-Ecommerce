import React, { useEffect } from "react";
import utils from "../utils";
import { useNavigate, Outlet } from "react-router-dom";

const AuthAdmin_layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getRole = async () => {
      try {
        const role = await utils.getUserRole();
        if (role !== "admin") {
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

export default AuthAdmin_layout;
