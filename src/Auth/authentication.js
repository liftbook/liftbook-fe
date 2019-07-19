import axios from "axios";

const authentication = () => {
  return axios.create({
    headers: {
      "content-type": "application/json",
      username: localStorage.getItem("username"),
      Authorization: `${token}`
    }
  });
};

export default authentication;
