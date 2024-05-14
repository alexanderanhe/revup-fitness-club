import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="mx-auto px-6 max-w-7xl md:px-12">
        { children }
      </main>
      <Footer />
    </>
  )
}