import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

// Set up the base query with your API's base URL
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_BASE_URL,
});

// Create the API slice
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


// Export hooks for usage in functional components
export const {
  useAddProductMutation,
  useGetAllProductsQuery,
  useGetProductByIdQuery,
} = apiSlice;