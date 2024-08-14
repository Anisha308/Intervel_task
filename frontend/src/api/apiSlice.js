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
      query: (product) => ({
        url: "/addProduct",
        method: "POST",
        body: product,
      }),
    }),
    fetchProduct: builder.query({
      query: (id) => `/productDetails/${id}`,
    }),
  }),
});
// Export hooks for usage in functional components
export const { useAddProductMutation, useFetchUserQuery } = apiSlice;
