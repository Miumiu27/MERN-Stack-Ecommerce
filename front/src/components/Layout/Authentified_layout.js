import React, { useEffect } from "react";
import utils from "../utils";
import { Outlet, useNavigate } from "react-router-dom";

const Authentified_layout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const get_role = async () => {
      let role = await utils.getUserRole();
      if (role) {
        navigate("/");
      }
    };

    get_role();
  }, []);

  return <Outlet />;
};

export default Authentified_layout;
