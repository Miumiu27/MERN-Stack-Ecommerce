import axios from "axios";

const getUserRole = async () => {
  if (document.cookie) {
    const role = await axios.get(
      "http://localhost:5000/api/auth/authorization",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    return role?.data?.role || "Unauthorized";
  }
};

export default {
  getUserRole,
};
