"use client";
import { ToastContainer, toast } from "react-toastify";
import Header from "../Header";
import styles from "./DynamicTemplate.module.scss";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import { DynamicTemplateProps } from "../../types";
import Button from "../Button";

const DynamicTemplate = ({
  header,
  contents,
  image,
  imageWidth,
  imageHeight,
  backgroundColor,
  color,
  direction,
  button,
  hasButton,
}: DynamicTemplateProps) => {
  const { backgroundColor: headerBgColor, color: headerColor, title } = header;
  const {
    title: buttonTitle,
    radius,
    color: buttonColor,
  } = button || { title: "", radius: 0, color: "" };

  const handleButton = () => {
    toast(`Welcome to ${title} page`);
  };

  return (
    <main
      style={{
        backgroundColor: backgroundColor,
        color: color,
        width: "100vw",
        height: "100vh",
      }}
    >
      <ToastContainer />
      <Header
        title={title}
        backgroundColor={headerBgColor}
        color={headerColor}
      />
      <section
        className={styles.container}
        style={{ flexDirection: direction }}
      >
        <section>
          <Image
            src={image}
            alt="dogwalk"
            width={imageWidth}
            height={imageHeight}
          />
        </section>
        <section>
          <p>{contents}</p>
          {hasButton && (
            <Button
              color={buttonColor}
              radius={radius}
              handleClick={handleButton}
              title={buttonTitle}
            />
          )}
        </section>
      </section>
    </main>
  );
};

export default DynamicTemplate;
