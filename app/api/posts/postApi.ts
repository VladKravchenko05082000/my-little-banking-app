import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "~/lib";

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface User {
  id: number;
  name: string;
}

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["Posts", "Post", "Users"],
  endpoints: (builder) => ({
    // GET /posts  или  GET /posts?userId=1
    getPosts: builder.query<Post[], number | null | undefined>({
      query: (userId) => ({
        url: "/posts",
        params: userId ? { userId } : undefined,
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Posts" as const,
                id,
              })),
              { type: "Posts" as const, id: "LIST" },
            ]
          : [{ type: "Posts" as const, id: "LIST" }],
    }),

    // GET /posts/:id
    getPostById: builder.query<Post, number>({
      query: (id) => ({ url: `/posts/${id}` }),
      providesTags: (result, error, id) => [{ type: "Post" as const, id }],
    }),

    // GET /users — для выпадающего списка фильтра
    getUsers: builder.query<User[], void>({
      query: () => ({ url: "/users" }),
      providesTags: ["Users"],
    }),

    // POST /posts
    addPost: builder.mutation<Post, Omit<Post, "id">>({
      query: (newPost) => ({
        url: "/posts",
        method: "POST",
        data: newPost,
      }),
      invalidatesTags: [{ type: "Posts" as const, id: "LIST" }],
    }),

    // DELETE /posts/:id
    deletePost: builder.mutation<void, number>({
      query: (id) => ({ url: `/posts/${id}`, method: "DELETE" }),
      invalidatesTags: (_result, _error, id) => [
        { type: "Posts" as const, id: "LIST" },
        { type: "Post" as const, id },
      ],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useGetUsersQuery,
  useAddPostMutation,
  useDeletePostMutation,
} = postsApi;
