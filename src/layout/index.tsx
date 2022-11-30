import { FC } from "react";
import Header from "./header";

const Layout: FC<any> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
