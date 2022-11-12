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

  const { mutate: onUpdate } = useMutation(updatePost);
  const { mutate: onDelete } = useMutation(deletePost);

  if (isLoading) return <h3>Loading ...</h3>;
  if (isError) return <h3>isError ...</h3>;

  return (
    <>
      <h3 style={{ color: 'blue' }}>{post.title}</h3>
      <button onClick={() => onDelete(post.id)}>Delete</button>
      <button onClick={() => onUpdate(post.id)}>Update title</button>
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
