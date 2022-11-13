import { useMutation, useQuery } from 'react-query';

async function fetchComments(postId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  return response.json();
}

async function deletePost(postId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'DELETE',
  });
  return response.json();
}

async function updatePost(postId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'PATCH',
    data: { title: 'REACT QUERY FOREVER!!!!' },
  });
  return response.json();
}

export function PostDetail({ post }) {
  const {
    data: comments,
    isLoading,
    isError,
  } = useQuery(['comments', post.id], () => fetchComments(post.id));

  const {
    mutate: onUpdate,
    isSuccess: updateSuccess,
    isLoading: updateLoading,
    isError: updateError,
  } = useMutation(updatePost);

  const {
    mutate: onDelete,
    isSuccess: deleteSuccess,
    isLoading: deleteLoading,
    isError: deleteError,
  } = useMutation(deletePost);

  if (isLoading) return <h3>Loading ...</h3>;
  if (isError) return <h3>isError ...</h3>;

  return (
    <>
      <h3 style={{ color: 'blue' }}>{post.title}</h3>

      <button onClick={() => onDelete(post.id)}>Delete</button>

      {deleteError ? <p style={{ color: 'red' }}>Error deleting the post</p> : null}
      {deleteLoading ? <p style={{ color: 'pruple' }}>Deleting the post</p> : null}
      {deleteSuccess ? <p style={{ color: 'green' }}>Post has (not) been deleted</p> : null}

      <button onClick={() => onUpdate(post.id)}>Update title</button>

      {updateError ? <p style={{ color: 'red' }}>Error ueleting the post</p> : null}
      {updateLoading ? <p style={{ color: 'pruple' }}>Ueleting the post</p> : null}
      {updateSuccess ? <p style={{ color: 'green' }}>Post has (not) been updated</p> : null}

      <p>{post.body}</p>
      <h4>Comments</h4>
      {comments.map((comment) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );
}
