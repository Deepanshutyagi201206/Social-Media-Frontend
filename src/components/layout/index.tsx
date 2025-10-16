import type { ReactNode } from "react";
import styles from "./style.module.css";
import SideBar from "../sideBar";
import Header from "../header";

type propType = {
  children: ReactNode;
};

const LayOut: React.FC<propType> = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <div className={styles.bodySection}>
        <SideBar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default LayOut;
