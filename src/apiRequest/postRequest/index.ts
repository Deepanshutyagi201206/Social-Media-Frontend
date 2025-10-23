import axios from "axios";

const postRequest = async (url: string, body: unknown) => {
  try {
    const headers = {};
    const res = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}${url}`,
      body,
      { headers: headers }
    );

    return Promise.resolve(res);
  } catch (err: unknown) {
    return Promise.reject(err);
  }
};

export default postRequest;
