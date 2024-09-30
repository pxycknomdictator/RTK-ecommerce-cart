import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

const handleGetAllProducts = async () => {
  const response = await api.get("/products");
  return await response.data;
};

export { handleGetAllProducts };
