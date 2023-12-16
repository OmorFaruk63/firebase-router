import axios from "axios";
import { useEffect, useState } from "react";

export const useFatch = (url) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(url)
      .then((post) => {
        setPosts(post.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return { posts, loading };
};
