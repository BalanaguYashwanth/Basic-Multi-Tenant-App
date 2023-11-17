import { HeaderProps } from "../../types";
import styles from "./Header.module.scss";

const Header = ({ title, color, backgroundColor }: HeaderProps) => {
  return (
    <main
      className={styles.headerContainer}
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      <h2>{title}</h2>
    </main>
  );
};

export default Header;
