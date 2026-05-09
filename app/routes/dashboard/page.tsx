import { skipToken } from "@reduxjs/toolkit/query/react";
import {
  useAddPostMutation,
  useDeletePostMutation,
  useGetPostByIdQuery,
  useGetPostsQuery,
  useGetUsersQuery,
} from "~/api";
import { useAppDispatch, useAppSelector } from "~/hooks";
import {
  resetFilters,
  setSearchQuery,
  setSelectedPostId,
  setSelectedUserId,
} from "~/features/ui/uiSlices";

export default function DashboardPage() {
  const dispatch = useAppDispatch();

  const selectedUserId = useAppSelector((state) => state.ui.selectedUserId);
  const selectedPostId = useAppSelector((state) => state.ui.selectedPostId);
  const searchQuery = useAppSelector((state) => state.ui.searchQuery);

  const { data: users } = useGetUsersQuery();

  const {
    data: posts = [],
    isLoading,
    isFetching,
    isError,
  } = useGetPostsQuery(selectedUserId);

  const { data: selectedPost } = useGetPostByIdQuery(
    selectedPostId ?? skipToken,
  );

  const [addPost, { isLoading: isAdding }] = useAddPostMutation();
  const [deletePost] = useDeletePostMutation();

  const filteredPosts = posts.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleAdd = async () => {
    await addPost({
      title: "Новый пост",
      body: "Содержимое",
      userId: selectedUserId ?? 1,
    });
  };

  if (isLoading) return <p>Загрузка...</p>;
  if (isError) return <p>Ошибка загрузки</p>;

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Посты</h1>

      {/* Фильтры — пишут в слайс */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <select
          value={selectedUserId ?? ""}
          onChange={(e) =>
            dispatch(
              setSelectedUserId(e.target.value ? Number(e.target.value) : null),
            )
          }
        >
          <option value="">Все авторы</option>
          {users?.map((u) => (
            <option key={u.id} value={u.id}>
              {u.name}
            </option>
          ))}
        </select>

        <input
          placeholder="Поиск по заголовку"
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />

        <button onClick={() => dispatch(resetFilters())}>Сброс</button>

        <button onClick={handleAdd} disabled={isAdding}>
          {isAdding ? "Добавление..." : "Добавить пост"}
        </button>
      </div>

      {/* isFetching — индикатор фонового перезапроса (например, при смене фильтра) */}
      {isFetching && <p>Обновление...</p>}

      <div style={{ display: "flex", gap: 20 }}>
        {/* Список */}
        <ul style={{ flex: 1 }}>
          {filteredPosts.slice(0, 15).map((post) => (
            <li
              key={post.id}
              style={{
                cursor: "pointer",
                fontWeight: post.id === selectedPostId ? "bold" : "normal",
              }}
              onClick={() => dispatch(setSelectedPostId(post.id))}
            >
              {post.title}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deletePost(post.id);
                }}
                style={{ marginLeft: 8 }}
              >
                ×
              </button>
            </li>
          ))}
        </ul>

        {/* Детальный просмотр */}
        <aside style={{ flex: 1 }}>
          {selectedPost ? (
            <>
              <h3>{selectedPost.title}</h3>
              <p>{selectedPost.body}</p>
            </>
          ) : (
            <p style={{ color: "#888" }}>Выбери пост слева</p>
          )}
        </aside>
      </div>
    </div>
  );
}
