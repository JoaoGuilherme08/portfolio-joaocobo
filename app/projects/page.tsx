import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye, ArrowLeft, ExternalLink } from "lucide-react";
import Particles from "../components/particles";

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
  const views = (
    await redis.mget<number[]>(
      ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
    )
  ).reduce((acc, v, i) => {
    acc[allProjects[i].slug] = v ?? 0;
    return acc;
  }, {} as Record<string, number>);

  const featured = allProjects.find((project) => project.slug === "agendyo")!;
  const top2 = allProjects.find((project) => project.slug === "demoredis")!;
  const top3 = allProjects.find((project) => project.slug === "sleepwakealert")!;
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug,
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-zinc-900/50 to-black overflow-hidden">
      {/* Futuristic grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      <div className="absolute top-2/3 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}} />
      
      {/* Particles */}
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={80}
      />
      
      {/* Navigation */}
      <nav className="absolute top-8 left-8 z-20">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-md border border-white/10 rounded-full text-zinc-300 hover:text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20"
        >
          <ArrowLeft size={16} />
          <span className="text-sm font-medium">Voltar</span>
        </Link>
      </nav>
      
      <div className="relative z-10 px-6 pt-24 mx-auto space-y-12 max-w-7xl lg:px-8 md:pt-32">
        {/* Header */}
        <div className="text-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-8 mx-auto" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-6">
            Projetos & Artigos
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Alguns projetos de estudos e artigos que desenvolvi ao longo da minha jornada como desenvolvedor.
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mt-8 mx-auto" />
        </div>

        {/* Featured Project */}
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-2">✨ Projeto em Destaque</h2>
            <p className="text-zinc-400">Projeto principal que demonstra minhas habilidades técnicas</p>
          </div>
          
          <div className="relative group">
            <Card>
              <Link href={`/projects/${featured.slug}`}>
                <article className="relative w-full h-full p-8 md:p-12">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full border border-blue-500/30">
                          DESTAQUE
                        </span>
                        <div className="text-xs text-zinc-300">
                          {featured.date ? (
                            <time dateTime={new Date(featured.date).toISOString()}>
                              {Intl.DateTimeFormat(undefined, {
                                dateStyle: "medium",
                              }).format(new Date(featured.date))}
                            </time>
                          ) : (
                            <span>EM BREVE</span>
                          )}
                        </div>
                      </div>
                      <span className="flex items-center gap-1 text-xs text-zinc-500">
                        <Eye className="w-4 h-4" />{" "}
                        {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                          views[featured.slug] ?? 0,
                        )}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300 font-display mb-4">
                      {featured.title}
                    </h2>
                    <p className="text-lg leading-relaxed text-zinc-300 group-hover:text-zinc-200 transition-colors duration-300 mb-6">
                      {featured.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      <span className="text-sm font-medium">Leia mais</span>
                      <ExternalLink size={14} />
                    </div>
                  </div>
                </article>
              </Link>
            </Card>
          </div>
        </div>

        {/* Top Projects */}
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-2">🚀 Projetos Principais</h2>
            <p className="text-zinc-400">Outros projetos importantes do meu portfólio</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[top2, top3].map((project, index) => (
              <div key={project.slug}>
                <Card>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects */}
        {sorted.length > 0 && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-2">📚 Todos os Projetos</h2>
              <p className="text-zinc-400">Explore todos os meus projetos e artigos técnicos</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sorted.map((project, index) => (
                <div key={project.slug}>
                  <Card>
                    <Article project={project} views={views[project.slug] ?? 0} />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-32 right-32 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
      <div className="absolute bottom-40 left-32 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}} />
      <div className="absolute top-2/3 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '2s'}} />
    </div>
  );
}