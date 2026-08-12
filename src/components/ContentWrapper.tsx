import { type ReactNode } from "react";

type ContentWrapperProps = {
  children: ReactNode;
};

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return <div className="site-shell">{children}</div>;
};

export default ContentWrapper;
