import { useEffect, useState } from "react";
import { getRequest } from "../../../../apiRequest";
import { PostCard } from "../../../../components";

const PostsSection = () => {
  const [postsData, setPostsData] = useState<unknown>();

  const handleGetPosts = async () => {
    try {
      const res: unknown = await getRequest("posts");

      const { data } = res;
      if (data) {
        setPostsData(data);
      }
      console.log(res);
    } catch (err: unknown) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetPosts();
  }, []);

  return (
    <div>
      {postsData?.posts?.map((item: unknown) => {
        return <PostCard post={item} />;
      })}
    </div>
  );
};

export default PostsSection;
