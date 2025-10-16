import { FiSearch } from "react-icons/fi";
import styles from "./style.module.css";

const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <input placeholder="Search anything" className={styles.search} />
      <button className={styles.searchIcon}>
        <FiSearch />
      </button>
    </div>
  );
};

export default Search;
