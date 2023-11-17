export interface DynamicTemplateProps {
  header: HeaderProps;
  contents: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  backgroundColor: string;
  color: string;
  direction: "row" | "column" | "row-reverse" | "column-reverse";
  hasButton: boolean;
}

export interface HeaderProps {
  title: string;
  backgroundColor: string;
  color: string;
}
