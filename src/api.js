import axios from "axios";

const devEnv = process.env.NODE_ENV !== "production";

const { REACT_APP_DEV_API, REACT_APP_PROD_API } = process.env;

const API = axios.create({
  baseURL: `${devEnv ? REACT_APP_DEV_API : REACT_APP_PROD_API}`,
});

export const uploadFile = (formData) => {
  return API.post("/upload", formData);
};

export const getFiles = () => {
  return API.get(`/`);
};

export const getImage = (filename) => {
  return API.get(`/image/${filename}`);
};

export const deleteFileById = (id) => {
  return API.delete(`/file/${id}`);
};
