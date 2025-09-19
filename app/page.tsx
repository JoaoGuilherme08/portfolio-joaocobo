"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projetos", href: "/projects" },
  { name: "Contato", href: "/contact" },
];

const skills = [
  "Java", "Kafka", "Apache Pinot", "AWS", "Docker", "PostgreSQL", "Python", "Spring Boot", "C#"
];

export default function Home() {
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    // Check if user has visited homepage in this session
    const visited = sessionStorage.getItem('homepage-visited');
    if (visited) {
      setHasVisited(true);
    } else {
      sessionStorage.setItem('homepage-visited', 'true');
    }
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-br from-black via-zinc-900/50 to-black">
      {/* Futuristic grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      
      
      {/* Particles */}
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={150}
      />
      
      {/* Main content container */}
      <div className="flex flex-col items-center justify-center space-y-8 z-10 max-w-4xl mx-auto px-8">
        {/* Glowing lines */}
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
        
        {/* Main title */}
        <div className="text-center space-y-4">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-title relative">
            João Cobo
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 blur-3xl -z-10 animate-pulse" style={{animationDelay: '1.8s'}} />
          </h1>
          
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl text-zinc-300 font-light">
              Engenheiro de Software
            </h2>
            <p className="text-sm md:text-base text-zinc-400">
              Formado pela USP • Apaixonado por tecnologia e inovação
            </p>
          </div>
        </div>
        
        {/* Glowing separator */}
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
        
        {/* Skills showcase */}
        <div>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-zinc-300 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="group px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 relative overflow-hidden"
          >
            <span className="relative z-10">Ver Projetos</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            Contato
          </Link>
        </div>
      </div>
      
      {/* Quote section */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 max-w-2xl mx-auto px-8">
        <div className="text-center p-6 bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl">
          <blockquote>
            <p className="text-base italic text-zinc-300 leading-relaxed mb-3">
              "O mundo seria melhor se não houvesse tanta gente prometendo melhorá-lo."
            </p>
            <footer className="text-sm text-zinc-500">
              — Olavo de Carvalho
            </footer>
          </blockquote>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
      <div className="absolute bottom-32 left-20 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '2s'}} />
    </div>
  );
}
