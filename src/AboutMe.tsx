import { Github, User } from "lucide-react";
import { Badge } from "@/components/ui/badge"
import { Button } from "./components/ui/button";

export default function AboutMe() {
  return (
    <section id="inicio" className="pt-16 pb-16 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-gray-900/50 to-black/50"></div>
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center mb-6 shadow-2xl ring-4 ring-emerald-400/30">
              <User className="h-16 w-16 text-white" />
            </div>
            <h2 className="text-4xl font-semibold text-gray-200">David Gutierrez</h2>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Desarrollador Frontend
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Soy desarrollador Fullstack Jr. con más de 2 años de experiencia creando interfaces modernas y funcionales. 
              Me especializo en frontend con React y Next.js, y tengo conocimientos sólidos en backend con NestJS y MySQL. 
              Disfruto resolver problemas, trabajar en equipo y seguir aprendiendo cada día.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                React
              </Badge>
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                Next.js
              </Badge>
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                TypeScript
              </Badge>
              <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                SQL
              </Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-300 border-red-500/30">
                Nest.js
              </Badge>
              <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                TypeOrm
              </Badge>
            </div>
            <a
              href="https://github.com/David2474"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-emerald-400 text-emerald-300 hover:bg-emerald-500/10 hover:text-gray-400 bg-transparent"
              >
                <Github className="mr-2 h-4 w-4" />
                Ver GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
