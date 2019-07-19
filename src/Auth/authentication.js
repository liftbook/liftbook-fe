import axios from "axios";

export default function() {
  const token = localStorage.getItem("userToken");

  return axios.create({
    headers: {
      "content-type": "application/json",
      username: localStorage.getItem("username"),
      Authorization: `${token}`
    }
  });
}
