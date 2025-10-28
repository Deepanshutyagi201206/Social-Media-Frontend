import type React from "react";
import styles from "./style.module.css";
import { postRequest } from "../../apiRequest";

type propType = {
  post: unknown;
};

const PostCard: React.FC<propType> = (props) => {
  const { post } = props;

  console.log("post", post);

  const handleClickOnLikeUnlike = async () => {
    try {
      const body = { content: editorContent };
      const res: unknown = await postRequest("post", body);

      console.log(res);
    } catch (err: unknown) {
      console.log(err);
    }
  };

  return (
    <div className={styles.postCardContainer}>
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: post?.content }}
          className={styles.contentContainer}
        ></div>
        <div className={styles.buttonsContainer}>
          <button onClick={handleClickOnLikeUnlike}>Like</button>
          <button>Share</button>
          <button>Comment</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
