import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Separator } from "./components/ui/separator";
import { Button } from "./components/ui/button";

export default function Contact() {
  return (
    <section id="contacto" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-gray-900 to-black"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <Mail className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Contacto
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">¿Tienes un proyecto en mente? ¡Hablemos!</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/70 backdrop-blur-md border-slate-600 shadow-xl">
              <CardHeader>
                <CardTitle className="text-white text-lg">Información de Contacto</CardTitle>
                <CardDescription className="text-gray-200">
                  Puedes contactarme a través de cualquiera de estos medios
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-emerald-400" />
                  <span className="text-gray-100">dg427938@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-emerald-400" />
                  <span className="text-gray-100">Ciudad de México, México</span>
                </div>
                <Separator className="bg-slate-600" />
                <div className="space-y-3">
                  <h4 className="font-semibold text-white">Redes Sociales</h4>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-emerald-400 text-emerald-300 hover:bg-emerald-500/20 bg-transparent"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-400 text-blue-300 hover:bg-blue-500/20 bg-transparent"
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
