import axios from "axios";

const getAllProducts = async () => {
  const response = await axios.get("http://localhost:8080/api/products");
  return response.data;
};

export default { getAllProducts };
