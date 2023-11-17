import DynamicTemplate from "../../common/components/DynamicTemplate";
import { TemplateObject } from "../../common/constants";

const Main = ({ params }) => {
  const [subdomain, domain] = params["domain"].split(".");
  console.log(subdomain);
  return <DynamicTemplate title={TemplateObject[subdomain]['title']} contents={TemplateObject[subdomain]['contents']} image={TemplateObject[subdomain]['image']} backgroundColor={TemplateObject[subdomain]['backgroundColor']} color={TemplateObject[subdomain]['color']} />;
};

export default Main;