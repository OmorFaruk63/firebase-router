import { Link } from "react-router-dom";
import { useFatch } from "./../hook/useFatch";
import { useContext } from "react";
import { fireContext } from "../context/Firebase";

const Posts = () => {
  const { gitHub, google, micrisoft } = useContext(fireContext);
  fireContext;
  const { posts } = useFatch("https://jsonplaceholder.typicode.com/posts");

  const data = gitHub || google || micrisoft;
  return (
    <div>
      <h1>Post</h1>
      {data ? (
        posts.map((post) => (
          <div className="post-card" key={post.id}>
            <p className="post-title">{post.title}</p>
            <Link to={`/posts/${post.id}`} state={post}>
              Show Details
            </Link>
          </div>
        ))
      ) : (
        <h1>Login first to view post </h1>
      )}
    </div>
  );
};
export default Posts;

// Second mathod  UseLocation

// import { useLocation } from "react-router-dom";

// const Post = () => {
//   const { state } = useLocation();
//   console.log(state);
//   return (
//     <div>
//       <div>
//         <h3>{state.title}</h3>
//         <h4>{state.body}</h4>
//       </div>
//     </div>
//   );
// };

// export default Post;
