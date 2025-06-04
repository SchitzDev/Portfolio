"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { 
  Code, 
  Terminal, 
  Cpu, 
  Database, 
  Bot, 
  Globe,
  Rocket,
  Sparkles,
  Zap,
  Brain,
  Star,
  Layers,
  Key,
  Lock,
  RefreshCw,
  Shield,
  Bell,
  Upload,
  BarChart,
  ShoppingCart,
  Music,
  Calendar,
  MessageSquare,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  Code2,
  Users,
  Lightbulb,
  Heart,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  X
} from "lucide-react"

const skills = [
  { icon: <Code className="w-6 h-6" />, name: "HTML5/CSS3", color: "from-orange-500 to-red-500", description: "Front-end é onde a mágica acontece" },
  { icon: <Terminal className="w-6 h-6" />, name: "JavaScript", color: "from-yellow-400 to-yellow-600", description: "Minha linguagem favorita" },
  { icon: <Cpu className="w-6 h-6" />, name: "TypeScript", color: "from-blue-500 to-blue-700", description: "Código mais organizado e seguro" },
  { icon: <Database className="w-6 h-6" />, name: "Python", color: "from-green-500 to-blue-500", description: "Perfeito para automação" },
  { icon: <Bot className="w-6 h-6" />, name: "C/C++", color: "from-purple-500 to-pink-500", description: "Quando performance é crucial" },
  { icon: <Globe className="w-6 h-6" />, name: "Java", color: "from-red-500 to-orange-500", description: "Robusto e confiável" },
]

const projects = [
  {
    title: "Sistema de Autenticação",
    description: "Fiz um sistema de login completo com JWT e login social. Node.js + Express + MongoDB, tudo rodando liso.",
    icon: <Rocket className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "OAuth2"]
  },
  {
    title: "E-commerce Completo",
    description: "Loja online com Stripe, carrinho e avaliações. Foco total na experiência do usuário.",
    icon: <Sparkles className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500",
    tech: ["React", "Next.js", "Stripe", "Redux", "Tailwind"]
  },
  {
    title: "Dashboard Analytics",
    description: "Painel com gráficos e relatórios. Ajuda a galera a tomar decisões baseadas em dados.",
    icon: <Zap className="w-8 h-8" />,
    color: "from-yellow-500 to-orange-500",
    tech: ["React", "D3.js", "TypeScript", "Material-UI"]
  },
  {
    title: "Chat em Tempo Real",
    description: "Sistema de mensagens com WebSocket. Seguro e rápido, sem delays.",
    icon: <Brain className="w-8 h-8" />,
    color: "from-green-500 to-emerald-500",
    tech: ["Socket.io", "React", "Firebase", "Tailwind"]
  }
]

const apiExamples = [
  {
    title: "Autenticação JWT",
    description: "Login seguro e renovação automática",
    icon: <Lock className="w-6 h-6" />,
    demo: "auth",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Refresh Token",
    description: "Sessão sempre ativa, sem logouts",
    icon: <RefreshCw className="w-6 h-6" />,
    demo: "refresh",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Validação de Dados",
    description: "Feedback instantâneo pro usuário",
    icon: <Shield className="w-6 h-6" />,
    demo: "validation",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Notificações em Tempo Real",
    description: "Alertas instantâneos",
    icon: <Bell className="w-6 h-6" />,
    demo: "notifications",
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Upload de Arquivos",
    description: "Upload com preview e progresso",
    icon: <Upload className="w-6 h-6" />,
    demo: "upload",
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Dashboard Analytics",
    description: "Gráficos e métricas em tempo real",
    icon: <BarChart className="w-6 h-6" />,
    demo: "analytics",
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "E-commerce",
    description: "Carrinho e checkout simplificado",
    icon: <ShoppingCart className="w-6 h-6" />,
    demo: "ecommerce",
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Player de Mídia",
    description: "Player de áudio/vídeo com controles",
    icon: <Music className="w-6 h-6" />,
    demo: "media",
    color: "from-violet-500 to-purple-500"
  },
  {
    title: "Calendário",
    description: "Agenda e eventos organizados",
    icon: <Calendar className="w-6 h-6" />,
    demo: "calendar",
    color: "from-amber-500 to-orange-500"
  },
  {
    title: "Chat em Tempo Real",
    description: "Chat com interface moderna",
    icon: <MessageSquare className="w-6 h-6" />,
    demo: "chat",
    color: "from-rose-500 to-pink-500"
  }
]

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  return (
    <main className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50" />
        <div className="container relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Bruno Schitz
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Desenvolvedor Full Stack que ama criar coisas novas. 
              Sempre aprendendo, sempre codando, sempre melhorando.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button size="lg" variant="outline">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Star className="w-12 h-12 mx-auto text-primary mb-4" />
            </motion.div>
            <h2 className="text-4xl font-bold">O que eu sei fazer</h2>
            <p className="mt-4 text-muted-foreground">Tecnologias que uso no dia a dia</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4`}>
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Rocket className="w-12 h-12 mx-auto text-primary mb-4" />
            </motion.div>
            <h2 className="text-4xl font-bold">Meus Projetos</h2>
            <p className="mt-4 text-muted-foreground">Coisas que já fiz e funcionam</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center mb-4`}>
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Layers className="w-12 h-12 mx-auto text-primary mb-4" />
            </motion.div>
            <h2 className="text-4xl font-bold">Sobre Mim</h2>
            <p className="mt-4 text-muted-foreground">Um pouco da minha história</p>
          </div>
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
            <CardContent className="p-8 relative z-10">
              <p className="text-lg text-muted-foreground mb-8">
                Sou um dev que curte tecnologia e criar coisas novas. Sempre aprendendo algo diferente e tentando melhorar.
                Gosto de resolver problemas e ver as coisas funcionando. Cada projeto é uma chance de fazer algo legal.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contato</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">brunoschitz@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">+55 (47) 99645-1234</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">Blumenau, SC</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Formação</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">TECNOLOGIA EM GESTÃO DA SEGURANÇA E DEFESA CIBERNÉTICA - UNINTER</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* API Examples Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background/50 to-background">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Key className="w-12 h-12 mx-auto text-primary mb-4" />
            </motion.div>
            <h2 className="text-4xl font-bold">Coisas que Fiz</h2>
            <p className="mt-4 text-muted-foreground">Demonstrações visuais dos meus projetos</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apiExamples.map((example, index) => (
              <motion.div
                key={example.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${example.color} flex items-center justify-center mb-4`}>
                      {example.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
                    <p className="text-muted-foreground">{example.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  )
}
