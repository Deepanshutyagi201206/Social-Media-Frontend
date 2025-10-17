import { FiSearch } from "react-icons/fi";
import styles from "./style.module.css";

const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <input className={styles.search} placeholder="Search anything" />
      <button className={styles.searchIcon}>
        <FiSearch />
      </button>
    </div>
  );
};

export default Search;
