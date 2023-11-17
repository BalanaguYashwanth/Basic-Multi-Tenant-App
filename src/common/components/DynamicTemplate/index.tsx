import styles from "./DynamicTemplate.module.scss";
import Image from "next/image";

const DynamicTemplate = ({
  title,
  contents,
  image,
  backgroundColor,
  color,
}) => {
  return (
    <main
      style={{
        backgroundColor: backgroundColor,
        color: color,
        height: "100vh",
        width: "100vw",
      }}
      className={styles.container}
    >
      <section>
        <h1 className={styles.heading}>{title}</h1>
        <p>{contents}</p>
      </section>
      <section>
        <Image src={image} alt={`${title} image`} width={300} height={300} />
      </section>
    </main>
  );
};

export default DynamicTemplate;
