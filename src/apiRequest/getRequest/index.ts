import axios from "axios";

const getRequest = async (url: string) => {
  try {
    const headers = {};
    const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}${url}`, {
      headers: headers,
    });

    return Promise.resolve(res);
  } catch (err: unknown) {
    return Promise.reject(err);
  }
};

export default getRequest;
