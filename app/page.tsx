"use client"

import { useState, useEffect } from "react"
import { motion, MotionConfig } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Instagram,
  Twitter,
  Keyboard,
  Download,
  ExternalLink,
  Menu,
  X,
  Code,
  Palette,
  Wrench,
  ArrowRight,
  Terminal,
  Zap,
  ChevronUp,
  Sparkles,
  MapPin,
  GraduationCap,
  Calendar,
  Plus,
  Camera,
  Clapperboard,
  CodeXml,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const typingStrings = [
    "Full-Stack Developer",
    "UI/UX Artisan",
    "Frontend Performance Nerd",
    "Creative Coder",
    "Digital Artisan",
    "Pixel-Perfect Finisher",
    "Vibe-Driven Maker",
  ]

  useEffect(() => {
    const typeSpeed = 150
    const backSpeed = 50
    const backDelay = 2000

    const timeout = setTimeout(
      () => {
        const current = typingStrings[currentIndex]

        if (!isDeleting) {
          if (currentText.length < current.length) {
            setCurrentText(current.substring(0, currentText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), backDelay)
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(current.substring(0, currentText.length - 1))
          } else {
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % typingStrings.length)
          }
        }
      },
      isDeleting ? backSpeed : typeSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, typingStrings])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 100
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const resumeUrl = "/naman_resume_final.pdf"

  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "Naman_Bagdiya_Resume.pdf"
    link.rel = "noopener"
    document.body.appendChild(link)
    link.click()
    link.remove()
    window.open(resumeUrl, "_blank", "noopener,noreferrer")
  }

  const projects = [
    {
      id: 1,
      title: "Raipurlife",
      description:
        "A Community-driven guide to the best places, authentic food, and unforgettable experiences in the heart of Chhattisgarh",
      image: "/images/projects/raipurlife.png",
      tech: ["HTML", "React", "CSS", "Next.js"],
      category: "web",
      link: "https://raipurlife.vercel.app/",
      github: "https://github.com/NamanOG/RaipurLife",
      isEmpty: false,
    },
    {
      id: 2,
      title: "Eden Nori",
      description:
        "EdenNori is a modern, tech-enabled cloud kitchen delivering authentic Asian vegetarian cuisine across Raipur, Chhattisgarh. Our mission is to bring the vibrant flavors of Japanese, Chinese, Thai, and Indo-Asian fusion food directly to your doorstep.",
      image: "/images/projects/edennori.png",
      tech: ["Next.js", "Tailwind CSS", "npm", "Vercel", "git"],
      category: "web",
      link: "https://eden-nori.vercel.app/",
      github: "https://github.com/NamanOG/EdenNori",
      isEmpty: false,
    },
    {
      id: 3,
      title: "Mercedes-AMG Formula 1",
      description:
        "A sleek and responsive landing page showcasing the Mercedes-AMG Petronas Formula 1 Team with modern web technologies.",
      image: "/images/projects/amg_formula1.png",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "git", "Vercel"],
      category: "web",
      link: "https://amg-formula1.vercel.app/",
      github: "https://github.com/NamanOG/AMG-Formula1",
      isEmpty: false,
    },
    {
      id: 4,
      title: "F1-Station",
      description: "A High performance f1 website focusses on stats of teams, their position, their live telemetry data, track conditions i.e. weather, etc.",
      image: "/images/projects/f1_station.png",
      tech: ["Next.js", "Tailwind CSS", "TypeScript", "git", "Vercel"],
      category: "web",
      link: "https://f1-station.vercel.app/",
      github: "https://github.com/NamanOG/F1-Station",
      isEmpty: false,
    },
    {
      id: 5,
      title: "Games Frame",
      description: "Game Frame is a Vibecoded curated gallery of screenshots from my favorite games, organized by title with detailed information about each game's story, characters, and personal impressions. Each game entry includes protagonist details, story overviews, and the moments that made these experiences unforgettable.",
      image: "/images/projects/gameframe.png",
        tech: ["Generative Ai", "v0", "figma", "Vercel", "git"],
      category: "web",
      link: "https://games-frame.vercel.app/",
      github: "https://github.com/NamanOG/Game-Frame",
      isEmpty: false,
    },
    {
      id: 6,
      title: "Apple Music Clone",
      description: "A project that replicates the Apple Music web app interface, demonstrating proficiency in front-end development and design and fuctionality.",
      image: "/images/projects/apple_music.png",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "web",
      link: "https://namanog.github.io/Apple-Music/",
      github: "https://github.com/NamanOG/Apple-Music",
      isEmpty: false,
    },
  ]

  const experiences = [
    {
      title: "InventX ",
      company: "InventX Inventor",
      period: "2024 - Future",
      description: "Helping in the development of innovative projects and contributing to the InventX community.",
      isEmpty: false,
    },
    {
      title: "Web Developer Trainee",
      company: "Acmegrade",
      period: "2024",
      description: "Developed responsive web applications and gained hands-on experience with modern web technologies.",
      isEmpty: false,
    },
    {
      title: "GDSC Member",
      company: "RV Institute of Technology",
      period: "2023 - 2024",
      description: "College GDSC Member responsible for completing various Cloud challenges.",
      isEmpty: false,
    },
    {
      title: "Youth Ambassador",
      company: "ViralFission",
      period: "2023-2024",
      description: "Brand Management and Marketing role focusing on digital marketing strategies and brand promotion.",
      isEmpty: false,
    },
  ]

  const skills = [
    { name: "React", level: 90, category: "frontend" },
    { name: "CSS", level: 80, category: "frontend" },
    { name: "JavaScript", level: 80, category: "backend" },
    { name: "Typescript", level: 60, category: "backend" },
    { name: "Git", level: 90, category: "Version Control" },
    { name: "C", level: 40, category: "backend" },
    { name: "Figma", level:40, category: "Design" },
    { name: "Node.js", level: 50, category: "backend" },
    { name: "DaVinchi Resolve", level: 40, category: "Video Editing" },
  ]

  const certifications = [
    {
      title: "Full-Stack Developer",
      provider: "by IBM",
      issuer: "Coursera",
      year: "2026",
      status: "In progress",
    },
    {
      title: "Fundamentals of Operating Systems",
      provider: "by Scaler Academy",
      issuer: "Scaler",
      year: "2024",
      status: "Completed",
    },
    {
      title: "Programming in C",
      provider: "by Udemy",
      issuer: "Udemy",
      year: "2023",
      status: "Completed",
    },
    {
      title: "ChatGPT for Startups",
      provider: "by Ajay batra",
      issuer: "Udemy",
      year: "2023",
      status: "Completed",
    },
    {
      title: "Creating Virtual Private Cloud using AWS",
      provider: "by Coursera",
      issuer: "Coursera",
      year: "2023",
      status: "Completed",
    },
    {
      title: "The Fundamentals of Digital Marketing",
      provider: "by Google",
      issuer: "Google Digital Garage",
      year: "2023",
      status: "Completed",
    },
  ]

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 500)

          const sections = [
            { id: "home", element: document.getElementById("home") },
            { id: "about", element: document.getElementById("about") },
            { id: "skills", element: document.getElementById("skills") },
            { id: "projects", element: document.getElementById("projects") },
            { id: "certifications", element: document.getElementById("certifications") },
            { id: "contact", element: document.getElementById("contact") },
          ]

          const scrollPosition = window.scrollY + 150

          let currentSection = "home"
          for (let i = 0; i < sections.length; i++) {
            const section = sections[i]
            if (section.element) {
              const sectionTop = section.element.offsetTop
              const sectionHeight = section.element.offsetHeight
              const sectionBottom = sectionTop + sectionHeight

              if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                currentSection = section.id
                break
              }
            }
          }
          setActiveSection(currentSection)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
        <div className="fixed inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
        linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
      `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        <div
          className="fixed inset-0 pointer-events-none opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 20%, rgba(0, 255, 170, 0.25), transparent 40%)," +
              "radial-gradient(circle at 80% 30%, rgba(0, 140, 255, 0.25), transparent 45%)," +
              "radial-gradient(circle at 70% 75%, rgba(180, 255, 60, 0.2), transparent 45%)," +
              "radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.12), transparent 50%)",
          }}
        />
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(0,255,255,0.16),transparent_60%)] blur-3xl" />
          <div className="absolute bottom-0 right-[-10%] h-[420px] w-[640px] bg-[radial-gradient(circle,rgba(170,255,0,0.12),transparent_60%)] blur-3xl" />
          <div className="absolute top-[20%] left-[-10%] h-[360px] w-[540px] bg-[radial-gradient(circle,rgba(80,140,255,0.12),transparent_65%)] blur-3xl" />
        </div>

        <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-xl border-b border-cyan-400/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div
                className="flex items-center cursor-pointer"
                style={{ textShadow: "0 0 10px #00ffff" }}
                onClick={() => scrollToTop()}
              >
                <img
                  src="/naman_omoji.png"
                  alt="Naman Omoji"
                  className="w-12 h-15 rounded-full border-2 border-cyan-400 shadow-lg bg-black"
                  style={{ boxShadow: "0 0 10px #00ffff" }}
                />
              </div>

              <div className="hidden md:flex space-x-8">
                {["Home", "About", "Skills", "Projects", "Certifications", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const sectionId = item.toLowerCase()
                      setActiveSection(sectionId)
                      scrollToSection(sectionId)
                    }}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 font-mono ${
                      activeSection === item.toLowerCase() ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"
                    }`}
                    style={activeSection === item.toLowerCase() ? { textShadow: "0 0 10px #00ffff" } : {}}
                  >
                    {item}
                    {activeSection === item.toLowerCase() && (
                      <div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                        style={{ boxShadow: "0 0 10px #00ffff" }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-cyan-400/10 border border-cyan-400/30 text-cyan-400"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </nav>

            {isMenuOpen && (
          <div className="fixed top-16 left-0 right-0 z-30 bg-black/95 backdrop-blur-xl border-b border-cyan-400/20 md:hidden">
            <div className="px-4 py-6 space-y-4">
              {["Home", "About", "Skills", "Projects", "Certifications", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const sectionId = item.toLowerCase()
                    setActiveSection(sectionId)
                    scrollToSection(sectionId)
                    setIsMenuOpen(false)
                  }}
                  className="block w-full text-left px-3 py-2 text-lg font-medium text-gray-300 hover:text-cyan-400 transition-colors font-mono"
                >
                  {"> " + item}
                </button>
              ))}
            </div>
          </div>
        )}

        <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-mono">
                  <span className="text-gray-300">Greetings,</span>
                  <br />
                  <span className="text-cyan-300" style={{ textShadow: "0 0 20px #00ffff, 0 0 40px #00ffff" }}>
                    Naman Bagdiya
                  </span>
                </h1>

                <div className="text-2xl md:text-3xl text-gray-300 mb-10 font-mono">
                  I&apos;m a{" "}
                  <span
                    className="font-bold"
                    style={{
                      fontFamily: "'Exan', sans-serif",
                      color: "#A9FF68",
                      textShadow: "0 0 12px rgba(169, 255, 104, 0.8)",
                    }}
                  >
                    {currentText}
                    <span className="text-cyan-300">|</span>
                  </span>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
                  {[
                    { icon: Github, href: "https://github.com/NamanOG", label: "GitHub", color: "hover:text-gray-300" },
                    {
                      icon: Linkedin,
                      href: "https://linkedin.com/in/namanbagdiya",
                      label: "LinkedIn",
                      color: "hover:text-blue-300",
                    },
                    { icon: Mail, href: "mailto:namanbagdiya@outlook.com", label: "Email", color: "hover:text-emerald-300" },
                    { icon: Phone, href: "tel:+91-9300681625", label: "Phone", color: "hover:text-lime-300" },
                  ].map(({ icon: Icon, href, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg bg-white/5 border border-cyan-400/30 text-cyan-300 ${color} transition-all duration-300 group backdrop-blur-sm`}
                    >
                      <Icon size={22} className="group-hover:drop-shadow-lg transition-all duration-300" />
                    </a>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-400 to-lime-400 hover:from-cyan-300 hover:to-lime-300 text-black px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 font-mono text-lg border-2 border-transparent hover:border-cyan-300 relative overflow-hidden group"
                    onClick={handleResumeDownload}
                    style={{ boxShadow: "0 0 24px rgba(0, 255, 255, 0.35)" }}
                  >
                    <Download className="mr-2" size={20} />
                    DOWNLOAD_RESUME.exe
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-lime-300 text-black border border-transparent hover:from-emerald-200 hover:via-cyan-200 hover:to-lime-200 font-mono text-lg shadow-lg"
                    onClick={() => scrollToSection("projects")}
                  >
                    VIEW_PROJECTS()
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative"
              >
                <div className="relative bg-black/40 border border-cyan-400/20 rounded-2xl p-6 backdrop-blur-md shadow-[0_0_60px_rgba(0,255,255,0.08)]">
                  <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.15),transparent_60%)]" />
                  <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(transparent,rgba(255,255,255,0.04),transparent)] opacity-40" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(169,255,104,0.8)]" />
                        <span className="text-xs uppercase tracking-[0.25em] text-cyan-300">Neural Console</span>
                      </div>
                      <span className="text-xs text-gray-400 font-mono">v2.7</span>
                    </div>

                    <div className="space-y-4 text-sm font-mono">
                      <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 px-4 py-3">
                        <span className="text-gray-300">Focus</span>
                        <span className="text-cyan-300">Full-stack + UI/UX</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 px-4 py-3">
                        <span className="text-gray-300">Build Mode</span>
                        <span className="text-lime-300">Systems + Stories</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 px-4 py-3">
                        <span className="text-gray-300">Signal</span>
                        <span className="text-blue-300">Open to collaborations</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">Active Nodes</div>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { label: "React", tone: "text-cyan-300" },
                          { label: "Next.js", tone: "text-lime-300" },
                          { label: "TypeScript", tone: "text-blue-300" },
                          { label: "Design Systems", tone: "text-cyan-200" },
                        ].map((node) => (
                          <div
                            key={node.label}
                            className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-xs"
                          >
                            <span className={node.tone}>{node.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-4 text-cyan-400 font-mono"
              style={{ textShadow: "0 0 20px #00ffff" }}
            >
              {"ABOUT ME"}
            </motion.h2>
            <p className="text-gray-400 text-lg font-mono">My short introduction!</p>
          </motion.div>

          <div className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-6 items-stretch">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-1"
              >
                <div className="relative h-full">
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-lime-400/20 rounded-2xl blur-xl" />
                  <div className="relative bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 h-full flex flex-col">
                    <div className="flex-1 relative overflow-hidden rounded-xl group mb-6">
                      <img
                        src="/naman_omoji.png"
                        alt="Naman Bagdiya"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4 bg-lime-400/20 backdrop-blur-sm rounded-full p-2">
                        <Sparkles className="text-lime-400" size={16} />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-center space-x-3">
                        <Zap className="text-lime-400" size={18} />
                        <span className="text-lime-400 font-mono font-bold text-sm">STATUS: AVAILABLE</span>
                      </div>

                      <div className="space-y-2 text-xs font-mono">
                        <motion.div
                          className="flex items-center justify-between hover:bg-white/5 p-2 rounded transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <div className="flex items-center space-x-2">
                            <MapPin className="text-cyan-400" size={14} />
                            <span className="text-gray-400">LOCATION:</span>
                          </div>
                          <span className="text-cyan-400">Raipur, Chhattisgarh</span>
                        </motion.div>
                        <motion.div
                          className="flex items-center justify-between hover:bg-white/5 p-2 rounded transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <div className="flex items-center space-x-2">
                            <GraduationCap className="text-cyan-400" size={14} />
                            <span className="text-gray-400">EDUCATION:</span>
                          </div>
                          <span className="text-cyan-400">B.E in CSE</span>
                        </motion.div>
                        <motion.div
                          className="flex items-center justify-between hover:bg-white/5 p-2 rounded transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <div className="flex items-center space-x-2">
                            <Calendar className="text-cyan-400" size={14} />
                            <span className="text-gray-400">Graduation:</span>
                          </div>
                          <span className="text-cyan-400">2027</span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-2 flex flex-col space-y-4 h-full"
              >
                <motion.div
                  className="bg-black/30 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 flex-1"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-2xl font-bold text-lime-400 mb-6 font-mono">{"> INTRODUCTION"}</h3>
                  <div className="space-y-4 text-gray-300 font-mono leading-relaxed">
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                      Hi, This is <span className="text-cyan-400 font-bold">Naman Bagdiya</span>, pursuing B.Tech in{" "}
                      <span className="text-lime-400 font-bold">Computer Science Engineering</span> from{" "}
                      <span className="text-cyan-400 font-bold">RV Institute of Technology, Bangalore</span> (batch of
                      2027).
                    </motion.p>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                      Aspiring Full Stack Developer pursuing a Bachelors Degree in Computer Science Engineering. 
                      Passionate about modern web technologies, especially Next.js. Eager to grow through hands-on projects and continuous learning. 
                      My projects can be found on my Github, Open to new opportunities and collaborations.
                    </motion.p>
                  </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="bg-black/30 backdrop-blur-sm border border-lime-400/30 rounded-2xl p-6 hover:border-lime-400/50 transition-all duration-300 h-full"
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <h4 className="text-lime-400 font-bold mb-4 font-mono text-lg">{"> KEY_SKILLS"}</h4>
                      <div className="flex flex-wrap gap-2">
                        {["HTML", "CSS", "JavaScript", "Next.js", "React", "Video editing", "Node.js"].map((skill, index) => (
                          <div key={skill}>
                            <Badge className="bg-lime-400/20 text-lime-400 border-lime-400/30 font-mono text-xs">
                              {skill}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="bg-black/30 backdrop-blur-sm border border-orange-400/30 rounded-2xl p-6 hover:border-orange-400/50 transition-all duration-300 h-full"
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <h4 className="text-orange-400 font-bold mb-4 font-mono text-lg">{"> LEARNING"}</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Python", "Typescript", "JavaScript", "UI/UX"].map((skill, index) => (
                          <div key={skill}>
                            <Badge className="bg-orange-400/20 text-orange-400 border-orange-400/30 font-mono text-xs">
                              {skill}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-black/30 backdrop-blur-sm border border-pink-400/30 rounded-2xl p-8 hover:border-pink-400/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <h4 className="text-pink-400 font-bold mb-6 font-mono text-2xl text-left">{"> EXPERIENCE"}</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      className={`border-l-2 ${
                        exp.isEmpty ? "border-gray-600/50" : "border-pink-400/50"
                      } pl-4 hover:border-pink-400 transition-colors ${exp.isEmpty ? "opacity-60" : ""}`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: exp.isEmpty ? 0.6 : 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center space-x-2">
                        <h5 className="font-bold text-white font-mono text-sm">{exp.title}</h5>
                        {exp.isEmpty && <Plus className="text-gray-500" size={14} />}
                      </div>
                      <p className={`text-xs font-mono ${exp.isEmpty ? "text-gray-500" : "text-pink-400"}`}>
                        {exp.company} • {exp.period}
                      </p>
                      <p className="text-gray-400 text-xs mt-1 leading-relaxed">{exp.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-5xl md:text-6xl font-bold mb-4 text-cyan-400 font-mono"
              style={{ textShadow: "0 0 20px #00ffff" }}
            >
              {"SKILLS"}
            </h2>
            <p className="text-gray-400 text-lg font-mono">Skills I've been working on!</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: CodeXml,
                title: "Full Stack Development",
                description: "I love to develop and design websites and web applications using modern technologies like Next.js, React, and Node.js.",
                color: "cyan",
                borderColor: "border-cyan-400/30",
                bgColor: "bg-cyan-400/10",
                textColor: "text-cyan-400",
              },
              {
                icon: Palette,
                title: "UI/UX Designing",
                description: "Learning Designing to make websites look more attractive with tools like Figma and Canva",
                color: "pink",
                borderColor: "border-pink-400/30",
                bgColor: "bg-pink-400/10",
                textColor: "text-pink-400",
              },
              {
                icon: Clapperboard,
                title: "Video Editing",
                description: "Creating and editing videos for various platforms. Gaining knowledge on video production and editing",
                color: "lime",
                borderColor: "border-lime-400/30",
                bgColor: "bg-lime-400/10",
                textColor: "text-lime-400",
              },
              {
                icon: Camera,
                title: "Photography",
                description: "Passionate about capturing moments and creating visual stories through photography. Exploring different styles and techniques to enhance my skills.",
                color: "yellow",
                borderColor: "border-yellow-400/30",
                bgColor: "bg-yellow-400/10",
                textColor: "text-yellow-400",
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card
                  className={`bg-black/50 backdrop-blur-sm border ${skill.borderColor} hover:border-${skill.color}-400/60 transition-all duration-300 group h-full`}
                >
                  <CardContent className="p-8 text-center">
                    <div className={`inline-flex p-4 rounded-full ${skill.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon size={32} className={skill.textColor} />
                    </div>
                    <h3 className={`text-xl font-bold mb-4 ${skill.textColor} font-mono`}>{skill.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="bg-black/50 backdrop-blur-sm border border-cyan-400/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6 font-mono text-left">{"> SKILL_LEVELS"}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-mono">{skill.name}</span>
                        <span className="text-lime-400 font-mono text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-cyan-400 to-lime-400 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Card className="bg-black/50 backdrop-blur-sm border border-orange-400/30 hover:border-orange-400/60 transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-[180px_1fr] gap-6 items-center">
                  <div className="flex md:flex-col items-center md:items-start gap-4">
                    <div className="inline-flex p-4 rounded-full bg-orange-400/10">
                      <Wrench size={28} className="text-orange-400" />
                    </div>
                    <h3 className="text-lg font-bold text-orange-400 font-mono">{"> OTHER_SKILLS"}</h3>
                  </div>
                  <div className="flex flex-wrap justify-start md:justify-center gap-3">
                    {["React", "TypeScript", "Javascript", "Node.js", "DaVinchi Resolve"].map((skill) => (
                      <div key={skill}>
                        <Badge className="bg-orange-400/20 text-orange-400 border-orange-400/30 font-mono text-sm md:text-base px-3 py-1.5">
                          {skill}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-5xl md:text-6xl font-bold mb-4 text-cyan-400 font-mono"
              style={{ textShadow: "0 0 20px #00ffff" }}
            >
              {"PROJECTS"}
            </h2>
            <p className="text-gray-400 text-lg font-mono">Projects I've worked on</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card
                  className={`bg-black/50 backdrop-blur-sm border ${
                    project.isEmpty ? "border-gray-600/30" : "border-cyan-400/30"
                  } hover:border-cyan-400/60 transition-all duration-300 group overflow-hidden h-full ${
                    project.isEmpty ? "opacity-70" : ""
                  }`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge
                        className={`${
                          project.isEmpty
                            ? "bg-gray-500/20 text-gray-500 border-gray-500/30"
                            : "bg-lime-400/20 text-lime-400 border-lime-400/30"
                        } font-mono`}
                      >
                        {project.category.toUpperCase()}
                      </Badge>
                    </div>
                    {project.isEmpty && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Plus className="text-gray-500" size={48} />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <h3 className="text-xl font-bold text-cyan-400 font-mono">{project.title}</h3>
                      {project.isEmpty && <Plus className="text-gray-500" size={16} />}
                    </div>
                    <p className="text-gray-400 mb-4 leading-relaxed text-sm">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <div key={tech}>
                          <Badge
                            className={`text-xs font-mono ${
                              project.isEmpty
                                ? "bg-gray-500/20 text-gray-500 border-gray-500/30"
                                : "bg-orange-400/20 text-orange-400 border-orange-400/30"
                            }`}
                          >
                            {tech}
                          </Badge>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <Button
                          size="sm"
                          className={`w-full font-mono ${
                            project.isEmpty
                              ? "bg-gray-600/20 border border-gray-600/30 text-gray-500 hover:bg-gray-600/30"
                              : "bg-cyan-400/20 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/30"
                          }`}
                          onClick={() => !project.isEmpty && window.open(project.link, "_blank")}
                          disabled={project.isEmpty}
                        >
                          <ExternalLink size={16} className="mr-2" />
                          LIVE
                        </Button>
                      </div>
                      <div className="flex-1">
                        <Button
                          size="sm"
                          className={`w-full font-mono ${
                            project.isEmpty
                              ? "bg-gray-600/20 border border-gray-600/30 text-gray-500 hover:bg-gray-600/30"
                              : "bg-lime-400/20 border border-lime-400/30 text-lime-400 hover:bg-lime-400/30"
                          }`}
                          onClick={() => !project.isEmpty && window.open(project.github, "_blank")}
                          disabled={project.isEmpty}
                        >
                          <Github size={16} className="mr-2" />
                          CODE
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <div className="marquee-band">
              <div className="marquee-track">
                {Array.from({ length: 2 }).map((_, i) => (
                  <div key={i} className="marquee-row">
                    {Array.from({ length: 6 }).map((__, j) => (
                      <span key={`${i}-${j}`} className="marquee-item">
                        MORE PROJECTS LOADING
                        <span className="marquee-dot" />
                      </span>
                    ))}
                  </div>
                ))}
              </div>
              <div className="marquee-fade marquee-fade-left" />
              <div className="marquee-fade marquee-fade-right" />
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-5xl md:text-6xl font-bold mb-4 text-lime-300"
              style={{ fontFamily: "'Exan', sans-serif", textShadow: "0 0 24px rgba(169, 255, 104, 0.6)" }}
            >
              {"CERTIFICATIONS"}
            </h2>
            <p className="text-gray-400 text-lg font-mono">Verified learning and ongoing upskilling</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={`${cert.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="relative bg-black/40 border border-lime-400/20 hover:border-lime-400/50 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(169,255,104,0.18),transparent_55%)]" />
                  <CardContent className="relative p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs uppercase tracking-[0.35em] text-gray-500 font-mono">{cert.year}</span>
                      <Badge
                        className={`font-mono text-xs ${
                          cert.status.toLowerCase() === "in progress"
                            ? "bg-orange-400/10 text-orange-300 border-orange-400/30"
                            : "bg-lime-400/10 text-lime-300 border-lime-400/30"
                        }`}
                      >
                        {cert.status}
                      </Badge>
                    </div>
                    <h3
                      className="text-lg font-bold text-white mb-2"
                      style={{ fontFamily: "'Exan', sans-serif" }}
                    >
                      {cert.title}
                    </h3>
                    <div className="space-y-1">
                      <p className="text-sm text-lime-200 font-bold" style={{ fontFamily: "'Exan', sans-serif" }}>
                        {cert.provider}
                      </p>
                      <p className="text-xs text-gray-400 font-mono uppercase tracking-[0.25em]">
                        Issued via {cert.issuer}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16" 
          >
            <h2
              className="text-5xl md:text-6xl font-bold mb-4 text-cyan-400 font-mono"
              style={{ textShadow: "0 0 20px #00ffff" }}
            >
              {"CONNECT"}
            </h2>
            <p className="text-gray-400 text-lg font-mono">Get in touch!</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div>
              <Card className="relative bg-black/40 border border-cyan-400/20 rounded-2xl overflow-hidden shadow-[0_0_70px_rgba(0,255,255,0.08)]">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-8 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                      <span className="text-xs uppercase tracking-[0.3em] text-cyan-200 font-mono">Incoming Transmission</span>
                    </div>
                    <span className="text-xs text-gray-400 font-mono">Response &lt; 24h</span>
                  </div>

                  <div className="text-center mb-8">
                    <p className="text-gray-300 text-lg font-mono">Open for internships, collabs, and product builds.</p>
                    <p className="text-gray-500 text-sm font-mono mt-2">Prefer email for quick context and links.</p>
                  </div>

                  <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4 p-4 rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/15 via-black/50 to-black/80 hover:border-cyan-400/50 transition-all duration-300">
                        <div className="p-3 rounded-full bg-cyan-400/20">
                          <Mail size={24} className="text-cyan-400" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs font-mono uppercase tracking-[0.3em]">Email</p>
                          <a
                            href="mailto:namanbagdiya@outlook.com"
                            className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
                          >
                            namanbagdiya@outlook.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 p-4 rounded-xl border border-lime-400/20 bg-gradient-to-br from-lime-400/15 via-black/50 to-black/80 hover:border-lime-400/50 transition-all duration-300">
                        <div className="p-3 rounded-full bg-lime-400/20">
                          <Phone size={24} className="text-lime-400" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs font-mono uppercase tracking-[0.3em]">Phone</p>
                          <a
                            href="tel:+91-9300681625"
                            className="text-lime-400 hover:text-lime-300 transition-colors font-mono"
                          >
                            +91-9300681625
                          </a>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 pt-4">
                        {[
                          {
                            icon: Github,
                            href: "https://github.com/NamanOG",
                            color: "text-gray-400 hover:text-gray-300",
                          },
                          {
                            icon: Linkedin,
                            href: "https://www.linkedin.com/in/namanbagdiya/",
                            color: "text-blue-400 hover:text-blue-300",
                          },
                          {
                            icon: Instagram,
                            href: "https://instagram.com/namaan_b",
                            color: "text-pink-400 hover:text-pink-300",
                          },
                          {
                            icon: Twitter,
                            href: "https://x.com/iamnamaan_b",
                            color: "text-cyan-300 hover:text-cyan-200",
                          },
                          {
                            icon: Keyboard,
                            href: "https://monkeytype.com/profile/NamanOG",
                            color: "text-lime-300 hover:text-lime-200",
                          },
                        ].map(({ icon: Icon, href, color }) => (
                          <a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-3 rounded-lg bg-white/5 border border-white/10 ${color} transition-all duration-300 hover:border-cyan-400/40`}
                          >
                            <Icon size={20} />
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col justify-between gap-4">
                      <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-4">
                        <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-mono mb-3">Quick Info</div>
                        <div className="space-y-2 text-sm font-mono text-gray-300">
                          <div className="flex items-center justify-between">
                            <span>Timezone</span>
                            <span className="text-cyan-300">IST (GMT+5:30)</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Availability</span>
                            <span className="text-lime-300">Open for collaborations</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Preferred</span>
                            <span className="text-emerald-300">Email</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-cyan-400 via-emerald-300 to-lime-300 hover:from-cyan-300 hover:via-emerald-200 hover:to-lime-200 text-black px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 font-mono text-lg w-full relative overflow-hidden group"
                          onClick={handleResumeDownload}
                          style={{ boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)" }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-lime-300 to-cyan-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                          <Download className="mr-2" size={20} />
                          DOWNLOAD_RESUME.exe
                        </Button>
                      </div>

                      <div>
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-pink-400/30 text-pink-300 hover:bg-pink-400/20 hover:border-pink-400/50 font-mono text-lg w-full bg-transparent transition-all duration-300"
                          onClick={() => window.open("mailto:namanbagdiya@outlook.com", "_blank")}
                        >
                          <ArrowRight className="mr-2" size={20} />
                          SEND_MESSAGE()
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-cyan-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center justify-center space-x-2 text-sm font-mono text-gray-400">
              <span>© 2026 Naman Bagdiya</span>
              <span className="text-gray-500">|</span>
              <span>Made after consuming lots of ☕</span>
              <span className="text-gray-500">|</span>
              <a
                href="https://github.com/NamanOG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-cyan-400 hover:text-lime-400 transition-colors duration-300"
              >
                <Code className="h-4 w-4" />
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-cyan-500 to-lime-500 text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
          style={{ boxShadow: "0 0 20px rgba(0, 255, 255, 0.4)" }}
        >
          <ChevronUp size={24} />
        </button>
      )}
      </div>
    </MotionConfig>
  )
}
