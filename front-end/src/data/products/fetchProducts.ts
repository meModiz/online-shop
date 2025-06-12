import { ProductResponse_T } from "@/typings/product";
import axios from "axios";

export default async function fetchProducts(
  page: number
): Promise<ProductResponse_T> {
  try {
    const result = await axios.get(`http://localhost:3001/products/${page}`);
    return { response: result.data.products };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return {
        response: {
          code: err.status || 500,
          message: err.response?.data.message || "Unexpected server error.",
        },
      };
    }
    return { response: { code: 500, message: "Unexpected server error." } };
  }
}
