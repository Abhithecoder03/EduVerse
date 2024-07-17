import axios from "axios";

const BASE_URL = "https://eduverse-zcxl.onrender.com/student";


export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });