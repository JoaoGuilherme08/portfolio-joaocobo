import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projetos", href: "/projects" },
  { name: "Contato", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-400 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        João Cobo
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-1 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-400 ">
          Engenheiro de Software formado pela USP | Apaixonado por tecnologia e inovação
        </h2>
      </div>
      
      <div className="absolute bottom-8 max-w-2xl mx-auto px-8 animate-fade-in">
        <blockquote className="text-center">
          <p className="text-lg italic text-zinc-300 leading-relaxed mb-4">
        "O mundo seria melhor se não houvesse tanta gente prometendo melhorá-lo."
          </p>
          <footer className="text-sm text-zinc-400">
        — Olavo de Carvalho
          </footer>
        </blockquote>
      </div>
    </div>
  );

}
