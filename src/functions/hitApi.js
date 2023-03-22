const { default: axios } = require("axios");

export default async function postApi({ url, body }) {
  axios.post(url, body);
}
