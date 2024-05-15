import { ReactNode, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  title: string,
  children: ReactNode,
  className?: string,
}

export default function Layout({ title, children, ...props }: Props) {
  useEffect(() => {
    document.title = title ?? "React App";
  }, []);
  return (
    <div {...props}>
      <Header />
      <main className="content-grid mb-24"
        // className="mx-auto min-h-[80vh] p-5 max-w-7xl md:px-12"
      >
        { children }
      </main>
      <Footer />
    </div>
  )
}