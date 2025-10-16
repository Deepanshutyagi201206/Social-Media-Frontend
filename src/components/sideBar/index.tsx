import { Link } from "react-router-dom";
import styles from "./style.module.css";

const SideBar = () => {
  const menus = [
    {
      title: "Home",
      link: "/",
      icon: "",
      id: "menu1",
    },
    {
      title: "My Posts",
      link: "/my-posts",
      icon: "",
      id: "menu2",
    },
    {
      title: "Settings",
      link: "/settings",
      icon: "",
      id: "menu3",
    },
    {
      title: "Add Post",
      link: "/add-post",
      icon: "",
      id: "menu4",
    },
  ];

  return (
    <div className={styles.sideBarSection}>
      {menus?.map((item: any) => {
        return (
          <Link key={item?.id} to={item?.link} className={styles.link}>
            {item?.title}
          </Link>
        );
      })}
    </div>
  );
};

export default SideBar;
