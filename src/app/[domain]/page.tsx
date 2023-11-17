import DynamicTemplate from "../../common/components/DynamicTemplate";
import { TemplateObject } from "../../common/constants";

const Main = ({ params }) => {
  let [subdomain, domain] = params["domain"].split(".");
 
  if(!Object.keys(TemplateObject).includes(subdomain)){
    subdomain = 'home'
  }

  const {
    header,
    backgroundColor,
    color,
    contents,
    image,
    direction,
    imageWidth,
    imageHeight,
    hasButton,
  } = TemplateObject[subdomain];


  return (
    <>
    <DynamicTemplate
      header={header}
      contents={contents}
      image={image}
      backgroundColor={backgroundColor}
      color={color}
      imageWidth={imageWidth}
      imageHeight={imageHeight}
      direction={direction}
      hasButton={hasButton}
    />
    </>
  );
};

export default Main;