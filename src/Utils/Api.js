import axios from "axios";

const api_key = import.meta.env.VITE_APP_API_KEY;
const Base_URL = "https://api.themoviedb.org/3";

const headers = {
  Authorization: "Bearer " + api_key,
};


export  const fetchDataFromApi = async (url, params) => {
  try {
    const res = await axios.get(Base_URL + url, {
      headers: headers,
      params: params,
    });

    return res.data;
  } catch (error) {
    throw error;
  }
};
