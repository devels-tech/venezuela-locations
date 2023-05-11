import { Header } from "./Header";
import { Footer } from "./Footer";
import { ReactChild } from "react";

export const Layout = ({ children }: { children: ReactChild }) => {
  return (
    <>
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  );
};
