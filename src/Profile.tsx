import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Code2, Mail, Github, Linkedin, Twitter } from "lucide-react"

export default function Portfolio() {
  return (

      <footer className="bg-black text-white py-8 relative border-t border-slate-700">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Code2 className="h-6 w-6 text-emerald-400" />
              <span className="font-bold text-xl text-white">Mi Portafolio</span>
            </div>
            <p className="text-gray-200 mb-4">Desarrollador Full Stack apasionado por crear soluciones innovadoras</p>
            <div className="flex justify-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-emerald-400">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-blue-400">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-purple-400">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-emerald-400">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
            <Separator className="my-4 bg-slate-700" />
            <p className="text-gray-400 text-sm">© 2024 Mi Portafolio. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
  )
}
