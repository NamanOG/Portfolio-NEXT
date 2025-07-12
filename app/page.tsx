"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ExternalLink,
  Menu,
  X,
  Code,
  Palette,
  Megaphone,
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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)

  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  const typingStrings = [
    "Web Developer",
    "Open-Source Contributor",
    "GDSC Member",
    "Music Enthusiast",
    "Digital Artisan",
    "Food Enthusiast",
  ]

  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    })
  }, [])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    const throttledMouseMove = (e: MouseEvent) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => handleMouseMove(e), 16) // ~60fps
    }

    window.addEventListener("mousemove", throttledMouseMove, { passive: true })
    return () => {
      window.removeEventListener("mousemove", throttledMouseMove)
      clearTimeout(timeoutId)
    }
  }, [handleMouseMove])

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
    },
    {
      id: 2,
      title: "Mercedes AMG-Formula 1",
      description:
        "A sleek and responsive landing page showcasing the Mercedes-AMG Petronas Formula 1 Team with modern web technologies.",
      image: "/images/projects/amg_formula1.png",
      tech: ["HTML5", "CSS", "Next.js", "Vercel"],
      category: "web",
      link: "http://amg-formula1.vercel.app/",
      github: "https://github.com/NamanOG/AMG-Formula1",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js, featuring smooth animations and interactive elements.",
      image: "/images/projects/Portfolio.png",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      category: "web",
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Apple Music Clone",
      description: "A sleek and responsive web application that replicates the Apple Music experience using modern web technologies.",
      image: "/images/projects/apple_music.png",
      tech: ["HTML5", "CSS", "JavaScript",],
      category: "web",
      link: "http://namanbagdiya.me/Apple-Music/",
      github: "https://github.com/NamanOG/Apple-Music",
    },
    {
      id: 5,
      title: "Netflix Clone",
      description:
        "A pixel-perfect recreation of Netflix's landing page showcasing advanced CSS skills and responsive design principles.",
      image: "/images/projects/Netflix.png",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "web",
      link: "https://namanflix.netlify.app/",
      github: "https://github.com/NamanOG/Netflix-Clone",
    },
    {
      id: 6,
      title: "Windows 11 Clone",
      description: "A project that replicates the Windows 11 interface using modern web technologies.",
      image: "/images/projects/win11_cover.png",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "web",
      link: "#",
      github: "#",
      isEmpty: true,
    },
  ]

  const experiences = [
    {
      title: "InventX ",
      company: "InventX Inventor",
      period: "2024 - Future",
      description: "Helping in the development of innovative projects and contributing to the InventX community.",
    },
    {
      title: "Web Developer Intern",
      company: "Acmegrade",
      period: "2024",
      description: "Developed responsive web applications and gained hands-on experience with modern web technologies.",
    },
    {
      title: "GDSC Member",
      company: "RV Institute of Technology",
      period: "2023 - Current",
      description: "College GDSC Member responsible for completing various Cloud challenges",
    },
    {
      title: "Youth Ambassador",
      company: "ViralFission",
      period: "2023",
      description: "Brand Management and Marketing role focusing on digital marketing strategies and brand promotion.",
    },
  ]

  const skills = [
    { name: "HTML", level: 90, category: "frontend" },
    { name: "CSS", level: 80, category: "frontend" },
    { name: "JavaScript", level: 80, category: "backend" },
    { name: "Python", level: 60, category: "backend" },
    { name: "C", level: 50, category: "backend" },
    { name: "Kotlin", level: 35, category: "mobile" },
    { name: "React", level: 60, category: "backend" },
    { name: "DaVinchi Resolve", level: 40, category: "tools" },
  ]

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight
          const progress = (window.scrollY / totalHeight) * 100
          setScrollProgress(progress)
          setShowScrollTop(window.scrollY > 500)

          const sections = [
            { id: "home", element: document.getElementById("home") },
            { id: "about", element: document.getElementById("about") },
            { id: "skills", element: document.getElementById("skills") },
            { id: "projects", element: document.getElementById("projects") },
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

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full mx-auto mb-4"
            style={{ boxShadow: "0 0 20px #00ffff" }}
          />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-cyan-400 font-mono text-xl">
            {"<LOADING_PORTFOLIO />"}
          </motion.p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/50 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 to-lime-400"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Simplified static grid background */}
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
      {/* Reduce floating elements from 8 to 4 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${25 + i * 20}%`,
              top: `${15 + i * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 6 + i,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Simplified neon cursor */}
      <motion.div
        className="fixed w-3 h-3 bg-cyan-400 rounded-full pointer-events-none z-50 opacity-60"
        style={{
          left: mousePosition.x - 6,
          top: mousePosition.y - 6,
          boxShadow: "0 0 10px #00ffff",
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50 }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-xl border-b border-cyan-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center cursor-pointer"
              style={{ textShadow: "0 0 10px #00ffff" }}
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToTop()}
            >
              <img
                src="/naman_omoji.png"
                alt="Naman Omoji"
                className="w-12 h-15 rounded-full border-2 border-cyan-400 shadow-lg bg-black"
                style={{ boxShadow: "0 0 10px #00ffff" }}
              />
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <motion.button
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
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                      style={{ boxShadow: "0 0 10px #00ffff" }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-cyan-400/10 border border-cyan-400/30 text-cyan-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-30 bg-black/95 backdrop-blur-xl border-b border-cyan-400/20 md:hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => {
                    const sectionId = item.toLowerCase()
                    setActiveSection(sectionId)
                    scrollToSection(sectionId)
                    setIsMenuOpen(false)
                  }}
                  className="block w-full text-left px-3 py-2 text-lg font-medium text-gray-300 hover:text-cyan-400 transition-colors font-mono"
                  whileHover={{ x: 10 }}
                >
                  {"> " + item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
        <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" style={{ y: y2 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              className="inline-block mb-6"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Terminal size={60} className="text-lime-400" style={{ filter: "drop-shadow(0 0 20px #39ff14)" }} />
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 font-mono"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.span
                className="text-gray-300"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Greetings,
              </motion.span>
              <br />
              <motion.span
                className="text-cyan-400"
                style={{ textShadow: "0 0 20px #00ffff, 0 0 40px #00ffff" }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Naman Bagdiya
              </motion.span>
            </motion.h1>

            <motion.div
              className="text-2xl md:text-3xl text-gray-300 mb-12 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              I'm a{" "}
              <span 
                className="font-bold" 
                style={{ 
                  fontFamily: "'Exan', sans-serif", 
                  color: "#FF5733",
                  textShadow: "0 0 10px #FF5733" 
                }}
              >
                {currentText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  className="text-cyan-400"
                >
                  |
                </motion.span>
              </span>
            </motion.div>

            <motion.div
              className="flex justify-center space-x-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {[
                { icon: Github, href: "https://github.com/NamanOG", label: "GitHub", color: "hover:text-gray-400" },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/namanog",
                  label: "LinkedIn",
                  color: "hover:text-blue-400",
                },
                { icon: Mail, href: "mailto:namanbagdiya@outlook.com", label: "Email", color: "hover:text-red-400" },
                { icon: Phone, href: "tel:+91-9300681625", label: "Phone", color: "hover:text-green-400" },
              ].map(({ icon: Icon, href, label, color }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-lg bg-white/5 border border-cyan-400/30 text-cyan-400 ${color} transition-all duration-300 group backdrop-blur-sm`}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    boxShadow: "0 0 30px rgba(0, 255, 255, 0.6)",
                    rotate: [0, -5, 5, 0],
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                >
                  <Icon size={24} className="group-hover:drop-shadow-lg transition-all duration-300" />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-lime-500 hover:from-cyan-400 hover:to-lime-400 text-black px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 font-mono text-lg border-2 border-transparent hover:border-cyan-400 relative overflow-hidden group"
                  onClick={() => window.open("/naman_resume.pdf", "_blank")}
                  style={{ boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-lime-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    initial={false}
                  />
                  <Download className="mr-2" size={20} />
                  DOWNLOAD_RESUME.exe
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
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
              {"<ABOUT_ME />"}
            </motion.h2>
            <p className="text-gray-400 text-lg font-mono">My short introduction!</p>
          </motion.div>

          <div className="space-y-8">
            {/* Top Section: Image + Right Side Content with Equal Heights */}
            <div className="grid lg:grid-cols-3 gap-6 items-stretch">
              {/* Left Column - Profile Image + Status (Full Height) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-1"
              >
                <motion.div
                  className="relative h-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-lime-400/20 rounded-2xl blur-xl"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <div className="relative bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 h-full flex flex-col">
                    {/* Profile Image - Takes up most space */}
                    <div className="flex-1 relative overflow-hidden rounded-xl group mb-6">
                      <motion.img
                        src="/naman_omoji.png"
                        alt="Naman Bagdiya"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <motion.div
                        className="absolute top-4 right-4 bg-lime-400/20 backdrop-blur-sm rounded-full p-2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <Sparkles className="text-lime-400" size={16} />
                      </motion.div>
                    </div>

                    {/* Status Info - Compact at bottom */}
                    <div className="space-y-3">
                      <motion.div className="flex items-center justify-center space-x-3" whileHover={{ scale: 1.05 }}>
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <Zap className="text-lime-400" size={18} />
                        </motion.div>
                        <span className="text-lime-400 font-mono font-bold text-sm">STATUS: AVAILABLE</span>
                      </motion.div>

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
                </motion.div>
              </motion.div>

              {/* Right Side Content - Matching Height */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-2 flex flex-col space-y-4 h-full"
              >
                {/* Introduction Section - Takes more space */}
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
                      2026).
                    </motion.p>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                      I am a tech enthusiast who loves to be Creative in his projects and I try to explore as much as I
                      can! From Raipur, Chhattisgarh, I'm passionate about Web development, Full-stack development, and UI/UX
                      design.
                    </motion.p>
                  </div>
                </motion.div>

                {/* Skills Row - Compact at bottom */}
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Key Skills */}
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
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge className="bg-lime-400/20 text-lime-400 border-lime-400/30 font-mono text-xs">
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Learning */}
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
                        {["Python", "C", "Kotlin", "UI/UX"].map((skill, index) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge className="bg-orange-400/20 text-orange-400 border-orange-400/30 font-mono text-xs">
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Row: Experience Section - Full Width */}
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
                <h4 className="text-pink-400 font-bold mb-6 font-mono text-2xl text-center">{"> EXPERIENCE"}</h4>
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

      {/* Skills Section with Progress Bars */}
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
              {"<SKILLS />"}
            </h2>
            <p className="text-gray-400 text-lg font-mono">Skills I've been working on!</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Code,
                title: "Web Development",
                description: "I love to be Creative while developing websites",
                color: "cyan",
                borderColor: "border-cyan-400/30",
                bgColor: "bg-cyan-400/10",
                textColor: "text-cyan-400",
              },
              {
                icon: Megaphone,
                title: "Video Editing",
                description: "Creating and editing videos for various platforms. Gaining knowledge on video production and editing",
                color: "lime",
                borderColor: "border-lime-400/30",
                bgColor: "bg-lime-400/10",
                textColor: "text-lime-400",
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
                    <motion.div
                      className={`inline-flex p-4 rounded-full ${skill.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <skill.icon size={32} className={skill.textColor} />
                    </motion.div>
                    <h3 className={`text-xl font-bold mb-4 ${skill.textColor} font-mono`}>{skill.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Skills Progress Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="bg-black/50 backdrop-blur-sm border border-cyan-400/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6 font-mono text-center">{"> SKILL_LEVELS"}</h3>
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
              <CardContent className="p-8 text-center">
                <motion.div
                  className="inline-flex p-4 rounded-full bg-orange-400/10 mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Wrench size={32} className="text-orange-400" />
                </motion.div>
                <h3 className="text-xl font-bold mb-4 text-orange-400 font-mono">{"> OTHER_SKILLS"}</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {["React", "C", "Javascript", "Node.js", "DaVinchi Resolve"].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge className="bg-orange-400/20 text-orange-400 border-orange-400/30 font-mono">{skill}</Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
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
              {"<PROJECTS />"}
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
                    <motion.img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <motion.div
                      className="absolute top-4 right-4"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Badge
                        className={`${
                          project.isEmpty
                            ? "bg-gray-500/20 text-gray-500 border-gray-500/30"
                            : "bg-lime-400/20 text-lime-400 border-lime-400/30"
                        } font-mono`}
                      >
                        {project.category.toUpperCase()}
                      </Badge>
                    </motion.div>
                    {project.isEmpty && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Plus className="text-gray-500" size={48} />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <motion.div className="flex items-center space-x-2 mb-3" whileHover={{ x: 5 }}>
                      <h3 className="text-xl font-bold text-cyan-400 font-mono">{project.title}</h3>
                      {project.isEmpty && <Plus className="text-gray-500" size={16} />}
                    </motion.div>
                    <p className="text-gray-400 mb-4 leading-relaxed text-sm">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge
                            className={`text-xs font-mono ${
                              project.isEmpty
                                ? "bg-gray-500/20 text-gray-500 border-gray-500/30"
                                : "bg-orange-400/20 text-orange-400 border-orange-400/30"
                            }`}
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <motion.div className="flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                      </motion.div>
                      <motion.div className="flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                      </motion.div>
                    </div>
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
            className="text-center mt-16"
          >
            <motion.div
              className="inline-block px-8 py-4 bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg"
              whileHover={{ scale: 1.05, borderColor: "rgba(0, 255, 255, 0.6)" }}
            >
              <p className="text-cyan-400 text-lg font-mono">{"// More projects coming soon..."}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
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
              {"<CONNECT />"}
            </h2>
            <p className="text-gray-400 text-lg font-mono">Get in touch!</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-black/50 backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300">
                <CardContent className="p-8">
                  <motion.p
                    className="text-gray-300 text-center mb-8 text-lg font-mono"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {"// Currently looking for new opportunities"}
                    <br />
                    {"// My inbox is always open"}
                  </motion.p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <motion.div
                        className="flex items-center space-x-4 p-4 bg-cyan-400/10 border border-cyan-400/30 rounded-lg hover:border-cyan-400/50 transition-all duration-300"
                        whileHover={{ x: 5, scale: 1.02 }}
                      >
                        <div className="p-3 rounded-full bg-cyan-400/20">
                          <Mail size={24} className="text-cyan-400" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm font-mono">EMAIL</p>
                          <a
                            href="mailto:namanbagdiya@outlook.com"
                            className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
                          >
                            namanbagdiya@outlook.com
                          </a>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-center space-x-4 p-4 bg-lime-400/10 border border-lime-400/30 rounded-lg hover:border-lime-400/50 transition-all duration-300"
                        whileHover={{ x: 5, scale: 1.02 }}
                      >
                        <div className="p-3 rounded-full bg-lime-400/20">
                          <Phone size={24} className="text-lime-400" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm font-mono">PHONE</p>
                          <a
                            href="tel:+91-9300681625"
                            className="text-lime-400 hover:text-lime-300 transition-colors font-mono"
                          >
                            +91-9300681625
                          </a>
                        </div>
                      </motion.div>

                      <div className="flex space-x-4 pt-4">
                        {[
                          {
                            icon: Github,
                            href: "https://github.com/NamanOG",
                            color: "text-gray-400 hover:text-gray-300",
                          },
                          {
                            icon: Linkedin,
                            href: "https://linkedin.com/in/namanog",
                            color: "text-blue-400 hover:text-blue-300",
                          },
                        ].map(({ icon: Icon, href, color }, index) => (
                          <motion.a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-3 rounded-lg bg-white/5 border border-white/10 ${color} transition-all duration-300`}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Icon size={20} />
                          </motion.a>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col justify-center space-y-4">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-cyan-500 to-lime-500 hover:from-cyan-400 hover:to-lime-400 text-black px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 font-mono text-lg w-full relative overflow-hidden group"
                          onClick={() => window.open("/naman_resume.pdf", "_blank")}
                          style={{ boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)" }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-lime-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                            initial={false}
                          />
                          <Download className="mr-2" size={20} />
                          DOWNLOAD_RESUME.exe
                        </Button>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-pink-400/30 text-pink-400 hover:bg-pink-400/20 hover:border-pink-400/50 font-mono text-lg w-full bg-transparent transition-all duration-300"
                          onClick={() => window.open("mailto:hello@namanbagdiya.co", "_blank")}
                        >
                          <ArrowRight className="mr-2" size={20} />
                          SEND_MESSAGE()
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-cyan-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p className="text-gray-400 font-mono" whileHover={{ scale: 1.05 }}>
            {"© 2025 Naman Bagdiya | Made after consuming lots of ☕ | </>"}
          </motion.p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-cyan-500 to-lime-500 text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 group"
            style={{ boxShadow: "0 0 20px rgba(0, 255, 255, 0.4)" }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 30px rgba(0, 255, 255, 0.6)",
              rotate: -360,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp size={24} className="group-hover:animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
