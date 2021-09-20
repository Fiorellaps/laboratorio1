import Axios from 'axios';
const url = `${process.env.BASE_API_URL}/movements`;
export const insertTransfer = (transfer) =>
  Axios.post(url, transfer).then((response) => {
    return response.data;
  });
