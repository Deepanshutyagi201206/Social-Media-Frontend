import styles from "./style.module.css";

const PostCard = () => {
  return (
    <div className={styles.postCardContainer}>
      <div>
        <div className={styles.contentContainer}>
          <p>
            ghfkghdkhkg gfdjkghdkgh gdjghdkfhgd gdfhgkdfhg gdfkghdkfhg
            gdfkghdfkg
          </p>
        </div>
        <div className={styles.buttonsContainer}>
          <button>Like</button>
          <button>Share</button>
          <button>Comment</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
