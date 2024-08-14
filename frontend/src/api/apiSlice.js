import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_BASE_URL,
});

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["Products"], 

  baseQuery,
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/addProduct",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Products"],
    }),
    getAllProducts: builder.query({
      query: () => "/getProducts",
      providesTags: ["Products"],
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
