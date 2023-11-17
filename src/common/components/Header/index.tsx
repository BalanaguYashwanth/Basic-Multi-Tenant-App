import styles from "./Header.module.scss";

interface HeaderProps {
  title:string,
  backgroundColor: string;
  color: string;
}

const Header = ({ title,backgroundColor, color }: HeaderProps) => {
  return (
    <main
      className={styles.header}
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      <h2>{title}</h2>
    </main>
  );
};

export default Header;
