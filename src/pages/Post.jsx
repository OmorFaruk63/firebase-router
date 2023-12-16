import { useParams } from "react-router-dom";
import { useFatch } from "../hook/useFatch";

const Post = () => {
  const { id } = useParams();
  const { posts, loading } = useFatch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  console.log(posts);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h3>{posts.title}</h3>
          <h4>{posts.body}</h4>
        </div>
      )}
    </div>
  );
};

export default Post;
