export interface HeaderProps {
  title: string;
  backgroundColor: string;
  color: string;
}

export interface ButtonProps{
  title:string,
  color:string,
  radius:number,
}

export interface DynamicTemplateProps {
  header: HeaderProps;
  contents: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  backgroundColor: string;
  color: string;
  direction: "row" | "column" | "row-reverse" | "column-reverse";
  button:ButtonProps,
  hasButton: boolean;
}