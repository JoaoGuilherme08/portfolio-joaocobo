"use client";
import { Github, Mail, Linkedin, ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import Particles from "../components/particles";

const socials = [
	{
		icon: <Linkedin size={24} />,
		href: "https://www.linkedin.com/in/joaoguilhermecobo/",
		label: "LinkedIn",
		handle: "@joaoguilhermecobo",
		description: "Conecte-se comigo profissionalmente",
		color: "from-blue-500 to-blue-600",
		hoverColor: "hover:from-blue-600 hover:to-blue-700",
		glowColor: "hover:shadow-blue-500/25"
	},
	{
		icon: <Github size={24} />,
		href: "https://github.com/JoaoGuilherme08",
		label: "Github",
		handle: "JoaoGuilherme08",
		description: "Veja meus projetos e contribuições",
		color: "from-gray-700 to-gray-800",
		hoverColor: "hover:from-gray-800 hover:to-gray-900",
		glowColor: "hover:shadow-gray-500/25"
	},
	{
		icon: <Mail size={24} />,
		href: "mailto:joaocobo20@gmail.com",
		label: "Email",
		handle: "joaocobo20@gmail.com",
		description: "Entre em contato diretamente",
		color: "from-purple-500 to-purple-600",
		hoverColor: "hover:from-purple-600 hover:to-purple-700",
		glowColor: "hover:shadow-purple-500/25"
	},
];

export default function Contact() {
	return (
		<div className="relative min-h-screen bg-gradient-to-br from-black via-zinc-900/50 to-black overflow-hidden">
			{/* Futuristic grid background */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]" />
			
			{/* Animated orbs */}
			<div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
			<div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
			
			{/* Particles */}
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
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
			
			{/* Main content */}
			<div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
				{/* Header */}
				<div className="text-center mb-16">
					<div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-8 mx-auto" />
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-6">
						Vamos Conversar
					</h1>
					<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
						Estou sempre aberto a novas oportunidades e colaborações. Entre em contato através dos canais abaixo.
					</p>
					<div className="w-32 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mt-8 mx-auto" />
				</div>
				
				{/* Contact cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
					{socials.map((social, index) => (
						<div
							key={social.label}
							className=""
						>
							<Link
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								className="group block p-8 bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
							>
								{/* Gradient overlay */}
								<div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
								
								{/* Content */}
								<div className="relative z-10 flex flex-col items-center text-center space-y-4">
									{/* Icon */}
									<div className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${social.color} text-white shadow-lg ${social.glowColor} group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
										{social.icon}
									</div>
									
									{/* Label */}
									<h3 className="text-xl font-semibold text-white group-hover:text-blue-100 transition-colors duration-300">
										{social.label}
									</h3>
									
									{/* Handle */}
									<p className="text-zinc-300 font-mono text-sm group-hover:text-zinc-200 transition-colors duration-300">
										{social.handle}
									</p>
									
									{/* Description */}
									<p className="text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors duration-300">
										{social.description}
									</p>
									
									{/* External link icon */}
									<div className="flex items-center gap-2 text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300">
										<ExternalLink size={14} />
										<span className="text-xs">Abrir link</span>
									</div>
								</div>
							</Link>
						</div>
					))}
				</div>
				
				{/* Additional info */}
				<div className="mt-16 text-center">
					<div className="p-6 bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl max-w-2xl mx-auto">
						<p className="text-zinc-300 leading-relaxed">
							💡 <strong>Dica:</strong> Para oportunidades de trabalho ou colaborações técnicas, prefira o LinkedIn. 
							Para discussões sobre projetos específicos, o GitHub é ideal.
						</p>
					</div>
				</div>
			</div>
			
			{/* Floating elements */}
			<div className="absolute top-32 right-32 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
			<div className="absolute bottom-40 left-32 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}} />
			<div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '2s'}} />
		</div>
	);
}
