import { Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";


export default function Experience() {
  return (
      <section id="experiencia" className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <Briefcase className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Mi Trayectoria
            </h2>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div
              className="absolute left-1/2 transform -translate-x-px w-0.5 bg-gradient-to-b from-emerald-400 via-blue-500 to-purple-500"
              style={{ top: "0", bottom: "0" }}
            ></div>

            <div className="space-y-12 relative">
              {/* Timeline Item 1 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <Card className="bg-slate-800/70 backdrop-blur-md border-slate-600 text-white shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-emerald-400 text-lg">Desarrollador Full Stack Senior</CardTitle>
                      <CardDescription className="text-gray-200 font-medium">TechCorp Solutions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-end mb-2">
                        <Badge variant="outline" className="border-emerald-400 text-emerald-300 bg-emerald-500/10">
                          2022 - Presente
                        </Badge>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
                        <li>Desarrollo de aplicaciones web con React, Next.js y TypeScript</li>
                        <li>Implementación de APIs RESTful con Node.js y Express</li>
                        <li>Gestión de bases de datos PostgreSQL y MongoDB</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full border-4 border-slate-900 shadow-lg"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 shadow-lg"></div>
                <div className="flex-1 pl-8">
                  <Card className="bg-slate-800/70 backdrop-blur-md border-slate-600 text-white shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-blue-400 text-lg">Desarrollador Frontend</CardTitle>
                      <CardDescription className="text-gray-200 font-medium">StartupXYZ</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-start mb-2">
                        <Badge variant="outline" className="border-blue-400 text-blue-300 bg-blue-500/10">
                          2020 - 2022
                        </Badge>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
                        <li>Creación de interfaces de usuario responsivas con React</li>
                        <li>Optimización de rendimiento y experiencia de usuario</li>
                        <li>Integración con APIs y servicios de terceros</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <Card className="bg-slate-800/70 backdrop-blur-md border-slate-600 text-white shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-purple-400 text-lg">Desarrollador Junior</CardTitle>
                      <CardDescription className="text-gray-200 font-medium">WebDev Agency</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-end mb-2">
                        <Badge variant="outline" className="border-purple-400 text-purple-300 bg-purple-500/10">
                          2019 - 2020
                        </Badge>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
                        <li>Desarrollo de sitios web estáticos y dinámicos</li>
                        <li>Aprendizaje de tecnologías modernas</li>
                        <li>Colaboración en proyectos de equipo</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900 shadow-lg"></div>
                <div className="flex-1 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
