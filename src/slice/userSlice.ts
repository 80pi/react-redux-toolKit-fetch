import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "users",
    }),
    getSingleUser: builder.query({
      query: (id: number) => (id > 0 ? `users/${id}` : ""),
    }),
    addPost: builder.mutation({
      query: (newPostData) => ({
        url: "/posts",
        method: "POST",
        body: newPostData,
      }),
    }),
    updatePost: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/posts/${id}`,
        method: "PUT",
        body: updatedData,
      }),
    }),
  }),
});

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (newProductData) => ({
        url: "/products/add",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newProductData,
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/products/${id}`,
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: updatedData,
      }),
    }),
  }),
});
export const {
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useAddPostMutation,
  useUpdatePostMutation,
} = usersApi;

export const { useAddProductMutation, useUpdateProductMutation } = productApi;
