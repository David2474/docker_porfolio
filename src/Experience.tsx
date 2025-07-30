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
              Mi Experiencia
            </h2>
          </div>

          <div className="max-w-3xl mx-auto relative">
            {/* Timeline Line */}
            <div
              className="absolute left-10 w-0.5 bg-gradient-to-b from-emerald-400 via-blue-500 to-purple-500"
              style={{ top: "0", bottom: "0" }}
            ></div>

            <div className="space-y-16 relative">
              {/* Timeline Item 1 */}
              <div className="relative flex items-start">
                <div className="absolute left-10 transform -translate-x-1/2 w-6 h-6 bg-emerald-400 rounded-full border-4 border-slate-900 shadow-lg mt-8"></div>
                <div className="ml-20 flex-1">
                  <Card className="bg-slate-800/70 backdrop-blur-md border-slate-600 text-white shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-emerald-400 text-lg">Desarrollador Web</CardTitle>
                      <CardDescription className="text-gray-200 font-medium">Bit Technologies</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-start mb-2">
                        <Badge variant="outline" className="border-emerald-400 text-emerald-300 bg-emerald-500/10">
                          Octubre 2023 - Noviembre 2024
                        </Badge>
                      </div>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
                      <li>Desarrolle páginas web optimizadas aumentando el tiempo de permanencia de los usuarios.</li>
                      <li>Colaboré con el equipo de diseño para garantizar la coherencia visual y funcional entre el frontend.</li>
                      <li>Resolví problemas técnicos y aseguré la compatibilidad de las aplicaciones con múltiples navegadores y
                        dispositivos.</li>
                      <li>Colabore con equipos de backend para integrar APIs y garantizar la funcionalidad completa de las
                        aplicaciones web</li>
                    </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative flex items-start">
                <div className="absolute left-10 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-900 shadow-lg mt-8"></div>
                <div className="ml-20 flex-1">
                  <Card className="bg-slate-800/70 backdrop-blur-md border-slate-600 text-white shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-blue-400 text-lg">Desarrollador Frontend</CardTitle>
                      <CardDescription className="text-gray-200 font-medium">Nisosi</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-start mb-2">
                        <Badge variant="outline" className="border-blue-400 text-blue-300 bg-blue-500/10">
                          Octubre 2021 - Octubre 2022
                        </Badge>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
                        <li>Transforme diseños estáticos en interfaces interactivas y funcionales alineadas con los objetivos del
                        usuario.</li>
                        <li>Diseñé y maqueté sitios web responsivos utilizando tecnologías como HTML, CSS y JavaScript
                        garantizando una experiencia de usuario intuitiva.</li>
                        <li>Añadí formularios, animaciones y validaciones al frontend, asegurando una experiencia fluida para el
                        usuario.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative flex items-start">
                <div className="absolute left-10 transform -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-slate-900 shadow-lg mt-8"></div>
                <div className="ml-20 flex-1">
                  <Card className="bg-slate-800/70 backdrop-blur-md border-slate-600 text-white shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-purple-400 text-lg">Desarrollador Frontend</CardTitle>
                      <CardDescription className="text-gray-200 font-medium">Freelance</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-start mb-2">
                        <Badge variant="outline" className="border-purple-400 text-purple-300 bg-purple-500/10">
                          Abril 2021- Octubre 2021
                        </Badge>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
                        <li>Desarrolle interfaces de usuario responsivas utilizando tecnologías como HTML y CSS mejorando la
                        experiencia de usuario en dispositivos móviles.</li>
                        <li>Implemente sistemas de control de versiones para coordinar cambios y optimizar el flujo de trabajo en
                        equipo.</li>                       
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
