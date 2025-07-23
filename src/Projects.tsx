import { Briefcase, Code2, ExternalLink, FolderOpen, Github, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";

export default function Projects() {
  return (
      <section id="proyectos" className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-gray-900"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12">
            <FolderOpen className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Proyectos
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto">Algunos de mis trabajos más destacados</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 bg-slate-800/50 backdrop-blur-md border-slate-600 hover:border-emerald-500/50">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg mb-4 flex items-center justify-center shadow-lg">
                  <Code2 className="h-16 w-16 text-white" />
                </div>
                <CardTitle className="text-white text-lg">E-commerce Platform</CardTitle>
                <CardDescription className="text-gray-200">
                  Plataforma completa de comercio electrónico con carrito de compras, pagos y panel de administración.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-emerald-400 text-emerald-300 bg-emerald-500/10">
                    React
                  </Badge>
                  <Badge variant="outline" className="border-blue-400 text-blue-300 bg-blue-500/10">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="border-yellow-400 text-yellow-300 bg-yellow-500/10">
                    MongoDB
                  </Badge>
                </div>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-emerald-400 text-emerald-300 hover:bg-emerald-500/20 bg-transparent"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-slate-400 text-slate-300 hover:bg-slate-500/20 bg-transparent"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Código
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 bg-slate-800/50 backdrop-blur-md border-slate-600 hover:border-blue-500/50">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center shadow-lg">
                  <User className="h-16 w-16 text-white" />
                </div>
                <CardTitle className="text-white text-lg">Task Management App</CardTitle>
                <CardDescription className="text-gray-200">
                  Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real y notificaciones.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-blue-400 text-blue-300 bg-blue-500/10">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="border-purple-400 text-purple-300 bg-purple-500/10">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="border-indigo-400 text-indigo-300 bg-indigo-500/10">
                    PostgreSQL
                  </Badge>
                </div>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-blue-400 text-blue-300 hover:bg-blue-500/20 bg-transparent"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-slate-400 text-slate-300 hover:bg-slate-500/20 bg-transparent"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Código
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 bg-slate-800/50 backdrop-blur-md border-slate-600 hover:border-purple-500/50">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg mb-4 flex items-center justify-center shadow-lg">
                  <Briefcase className="h-16 w-16 text-white" />
                </div>
                <CardTitle className="text-white text-lg">Weather Dashboard</CardTitle>
                <CardDescription className="text-gray-200">
                  Dashboard del clima con pronósticos, mapas interactivos y alertas meteorológicas personalizadas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-purple-400 text-purple-300 bg-purple-500/10">
                    React
                  </Badge>
                  <Badge variant="outline" className="border-pink-400 text-pink-300 bg-pink-500/10">
                    API Integration
                  </Badge>
                  <Badge variant="outline" className="border-orange-400 text-orange-300 bg-orange-500/10">
                    Charts.js
                  </Badge>
                </div>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-400 text-purple-300 hover:bg-purple-500/20 bg-transparent"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-slate-400 text-slate-300 hover:bg-slate-500/20 bg-transparent"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Código
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  )
}
