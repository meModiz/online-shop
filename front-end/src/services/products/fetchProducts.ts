import { Response_T } from "@/typings/product";
import axios from "axios";

export default async function fetchProducts(
  page: number,
  category: string
): Promise<Response_T> {
  try {
    const result = await axios.get(
      `${process.env.BACKEND_API_URL}/products?page=${page}&category=${category}`
    );
    return {
      response: {
        products: result.data.products,
        totalProductPages: result.data.totalProductPages,
        sucess: true,
      },
    };
  } catch (err) {
    console.error(err);
    if (axios.isAxiosError(err)) {
      return {
        response: {
          code: err.status || 500,
          message: err.response?.data.message || "Unexpected server error.",
          sucess: false,
        },
      };
    }
    return {
      response: {
        code: 500,
        message: "Unexpected server error.",
        sucess: false,
      },
    };
  }
}
