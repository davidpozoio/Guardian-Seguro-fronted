import { ReactNode } from "react";
import "./icon.styles.css";
interface IconProps {
  children: ReactNode;
}

const Icon = ({ children }: IconProps) => {
  return <div className="icon-container">{children}</div>;
};
export default Icon;
