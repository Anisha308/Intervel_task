import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_BASE_URL,
});

export const apiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/addProduct",
        method: "POST",
        body: newProduct,
      }),
    }),
    getAllProducts: builder.query({
      query: () => "/getProducts",
    }),
    getProductById: builder.query({
      query: (id) => `/productDetails/${id}`,
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetAllProductsQuery,
  useGetProductByIdQuery,
} = apiSlice;
