/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function PostCard({ post }) {
  const { updateTitle } = useDocumentTitle(post.title)

  function changeTitle() {
    updateTitle(post.title + '!')
  }

  return (
    <Link
      to={`/posts/${post.id}`}
      className="border w-80 bg-slate-400 p-3 rounded-xl"
      onClick={changeTitle}>
      <h1>{post.title}</h1>
    </Link>
  );
}
