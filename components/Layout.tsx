import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="w-screen h-screen flex flex-col">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="basis-1/12 bg-black text-white flex w-full h-full items-center">
      <div className="basis-5/6 flex pl-8 text-xl">ABBIE GONZALEZ</div>
      <nav className="links basis-1/6 flex justify-evenly">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/portfolio">
        <a>Portfolio</a>
        </Link>
      </nav>
    </header>
    {children}
  </div>
);

export default Layout;
