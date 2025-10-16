import { ChatSection, PostsSection } from "./components";
import styles from "./style.module.css";

const Home = () => {
  return (
    <div className={styles.bodySection}>
      <PostsSection />
      <ChatSection />
    </div>
  );
};

export default Home;
