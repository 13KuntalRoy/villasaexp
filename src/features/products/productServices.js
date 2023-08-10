import axios from "axios";
import { base_url, config } from "../../utils/axiosCongif";

const getallProducts = async () => {
  const responsive = await axios.get(`${base_url}product/`);
  return responsive.data;
};
const addToWishlist = async (prodIt) => {
  
  const responsive = await axios.put(
    `${base_url}product/wishlist`,
    { prodIt },
    config
  );
  return responsive.data;
};
export const productServices = {
  getallProducts,
  addToWishlist,
};
