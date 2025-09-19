
"use client";
import useFetch from '@/hooks/useFetch';
import { useParams } from 'next/navigation';

export default function PostDetailPage() {
  const params = useParams();
  const { id } = params;
  if (!id) return <div>Invalid post ID.</div>;
  const { data: post, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!post) return <div>Post not found.</div>;

  return (
    <div className="max-w-xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="mb-4">{post.body}</p>
      <div className="text-gray-500">Post ID: {post.id}</div>
    </div>
  );
}
