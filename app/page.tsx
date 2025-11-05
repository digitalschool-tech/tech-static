"use client"

import { useState, useEffect } from "react"
import {
  ChevronRight,
  Sparkles,
  Zap,
  Users,
  Rocket,
  ChevronLeft,
  Calendar,
  Clock,
  Video,
  Phone,
  Server,
  BrainCircuit,
  CloudCog,
  Code2,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import { DSButton } from "../components/DSButton"

export default function DigitalSchoolRD() {
  const [activeProduct, setActiveProduct] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [productSlides, setProductSlides] = useState([0, 0, 0, 0, 0]) 
  const [showCalendly, setShowCalendly] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-advance slideshow
  useEffect(() => {
    const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const interval = setInterval(() => {
      setProductSlides((prev) => prev.map((slide, index) => (slide + 1) % products[index].screenshots.length))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Load Calendly script
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const products = [
    {
      name: "DSOS",
      features: [
        "Rebranding & AveHR Integration",
        "Mobile App & Ticketing System",
        "CRM with Lead Injection",
        "Branch Management",
        "Multi-channel Messaging (SMS, Email, WhatsApp)",
        "Advanced Reporting & Analytics",
        "Payment Processing & SaaS Integration",
        "LMS Integration & Website Builder",
      ],
      status: "Coming January 2026",
      color: "from-[#050f54] to-[#0f8cfa]",
      icon: <Zap className="w-8 h-8" />,
      screenshots: [
        "/products/dsos/dsos-image-1.png",
        "/products/dsos/dsos-image-2.png",
        "/products/dsos/dsos-image-3.png",
        "/products/dsos/dsos-image-4.jpg",
      ],
    },
    {
      name: "Houses",
      features: [
        "AI-Powered Personalized Learning",
        "Auto-Generated Quizzes",
        "Gamified Universe Experience",
        "Interactive Coding Challenges",
        "Progress Tracking",
        "Adaptive Curriculum",
      ],
      status: "Live & Active Development",
      color: "from-[#9433eb] to-[#7017d4]",
      icon: <Sparkles className="w-8 h-8" />,
      screenshots: [
        "/products/houses/houses-image-1.png",
        "/products/houses/houses-image-2.png",
        "/products/houses/houses-image-3.png",
        "/products/houses/houses-image-4.png",
      ],
    },
    {
      name: "dBlox",
      features: [
        "Visual Block Programming",
        "AI Integration",
        "Multi-language Expansion",
        "Interactive Learning Modules",
        "Creative Project Building",
      ],
      status: "Live & Active Development",
      color: "from-[#a3ff00] to-[#6eb800]",
      icon: <Rocket className="w-8 h-8" />,
      screenshots: [
        "/products/dblox/dblox-image-1.png",
        "/products/dblox/dblox-image-2.png",
        "/products/dblox/dblox-image-3.png",
        "/products/dblox/dblox-image-4.png",
      ],
    },
    {
      name: "Parent App",
      features: [
        "Real-time Progress Tracking",
        "Grade Monitoring",
        "Communication with Teachers",
        "Assignment Updates",
        "Attendance Tracking",
        "Performance Analytics",
      ],
      status: "In Development",
      color: "from-[#ff2e30] to-[#dc0000]",
      icon: <Users className="w-8 h-8" />,
      screenshots: [
        "/products/parent-app/parent-app-image-1.png",
        "/products/parent-app/parent-app-image-2.png",
        "/products/parent-app/parent-app-image-3.png",
        "/products/parent-app/parent-app-image-4.png",
      ],
    },
    {
      name: "AI Automation",
      features: [
        "Intelligent Process Automation",
        "AI-Powered Workflow Optimization",
        "Automated Content Generation",
        "Smart Data Processing",
        "Predictive Analytics Integration",
        "Natural Language Processing",
        "Automated Report Generation",
        "Intelligent Task Scheduling",
      ],
      status: "In Development",
      color: "from-[#ff6b35] to-[#ff8c42]",
      icon: <BrainCircuit className="w-8 h-8" />,
      screenshots: [
        "/placeholder.svg?height=400&width=600&text=AI+Automation+Dashboard",
        "/placeholder.svg?height=400&width=600&text=AI+Workflow+Builder",
        "/placeholder.svg?height=400&width=600&text=AI+Analytics+View",
        "/placeholder.svg?height=400&width=600&text=AI+Process+Monitor",
      ],
    },
  ]

  const timeline = [
    {
      name: "DSOS",
      color: "from-ds.blue to-ds.blueLight",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-900",
      icon: <Zap className="w-6 h-6" />,
      mainDeadline: "January 2026",
      milestones: [
        {
          period: "Before September 2025",
          items: [
            "Rebranding & UI Overhaul",
            "AveHR Integration & Embedded Systems",
            "Mobile APP Development",
            "Ticketing System Implementation",
            "CRM with Lead Injection",
            "Branch Management System",
            "Billing & Payment Processing",
            "Multi-channel Messaging (SMS, Email, WhatsApp)",
            "Authentication & Security",
            "Advanced Reporting & Analytics",
            "Calendar Integration",
            "App Content & Lessons Management",
            "User Management System",
            "Class Health Monitoring",
            "Payment Connectors",
            "SaaS Infrastructure",
            "LMS Integration",
            "Website Builder",
          ],
        },
      ],
    },
    {
      name: "Houses",
      color: "from-ds.purple to-ds.purpleDark",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-900",
      icon: <Sparkles className="w-6 h-6" />,
      mainDeadline: "Ongoing Development",
      milestones: [
        {
          period: "2024 Completed",
          items: [
            "AI Built Missions (Riddles & Personalized)",
            "Daily Login Rewards System",
            "240+ Day Reward Cycles",
            "Character Unlocks (Ghrush, Visix)",
            "Sieges Implementation",
          ],
        },
        {
          period: "Early 2025",
          items: ["Battle Mode Bugs Planet", "Timer System for Bug Planets", "Bag Implementation System"],
        },
        {
          period: "Q2 2025",
          items: [
            "Voting System & Government",
            "Substitute Kahoot Integration",
            "Custom League Builder",
            "School Award System",
          ],
        },
        {
          period: "September 2025",
          items: [
            "House Council Launch",
            "Leaderboard Reconstruction",
            "Building Structures System",
            "Reality Check & Stamina Bar",
            "Sorting Hat Feature",
            "Platform Rebranding",
          ],
        },
        {
          period: "Late 2025/2026",
          items: ["PvP Integration (Optional)", "Cross-platform with dBlox", "Advanced AI Personalization"],
        },
      ],
    },
    {
      name: "dBlox",
      color: "from-ds.purple to-ds.purpleDark",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-900",
      icon: <Rocket className="w-6 h-6" />,
      mainDeadline: "September 2025",
      milestones: [
        {
          period: "September 2025",
          items: [
            "Initial Platform Launch",
            "Block-based Programming Interface",
            "Albanian Language Support",
            "Basic Project Templates",
            "Student Progress Tracking",
          ],
        },
        {
          period: "Q4 2025",
          items: [
            "Advanced Design Customization",
            "Theme Builder & Templates",
            "Enhanced Block Library",
            "Multi-language Expansion Prep",
          ],
        },
        {
          period: "2026",
          items: [
            "PvP Integration with Houses",
            "Cross-platform Challenges",
            "AI-Powered Code Suggestions",
            "Advanced Project Sharing",
            "International Language Support",
          ],
        },
      ],
    },
    {
      name: "Parent App",
      color: "from-ds.blueLight to-ds.blue",
      bgColor: "bg-violet-50",
      borderColor: "border-violet-200",
      textColor: "text-violet-900",
      icon: <Users className="w-6 h-6" />,
      mainDeadline: "Q3 2025",
      milestones: [
        {
          period: "Q1 2025",
          items: [
            "iOS App Development",
            "Android App Development",
            "Basic Progress Tracking",
            "Grade Monitoring System",
            "Push Notifications Setup",
          ],
        },
        {
          period: "Q2 2025",
          items: [
            "Teacher Communication Portal",
            "Assignment Tracking",
            "Attendance Monitoring",
            "Performance Analytics Dashboard",
            "Multi-child Support",
          ],
        },
        {
          period: "Q3 2025",
          items: [
            "DSOS Integration Complete",
            "Real-time Sync",
            "Advanced Reporting",
            "Parent-Teacher Conferences",
            "App Store Launch",
          ],
        },
        {
          period: "Q4 2025",
          items: [
            "AI-Powered Insights",
            "Learning Recommendations",
            "Behavioral Analytics",
            "Multi-language Support",
            "Offline Mode",
          ],
        },
      ],
    },
  ]

  const teamStructure = {
    leadership: [
      { name: "Drinor Shala", role: "Head of Product", image: "/team/drinor.png" },
      { name: "Ardit Xhaferi", role: "Head of Development", image: "/team/ardit.png" },
    ],
    teams: [
      {
        name: "AI Team",
        members: [
          { name: "Puhiza Rexha", role: "AI Engineer", image: "/team/member1.png" },
          { name: "Alba Pozhegu", role: "AI Engineer", image: "/team/member2.png" },
        ],
      },
      {
        name: "Development Team",
        members: [
          { name: "Rigon Ramajli", role: "Software Engineer", image: "/team/member1.png" },
          { name: "Granit Orllati", role: "Devops Engineer", image: "/team/member1.png" },
          { name: "Altin Shabani", role: "QA Automation Engineer", image: "/team/member2.png" },
          { name: "Valmir Gashi", role: "AI Artist", image: "/team/member3.png" },
        ],
      },
      {
        name: "Platform Support Team",
        members: [
          { name: "Dion Osmani", role: "Game Master & AI Engineer" },
          { name: "Ilaz Gashi", role: "Platform Support", image: "/team/member1.png" },
          { name: "Liridona Baliu", role: "dBlox Support", image: "/team/member2.png" },
          { name: "Festa Rexhepi", role: "dBlox Support", image: "/team/member3.png" },
        ],
      },
    ],
  }

  const nextSlide = (productIndex: number) => {
    setProductSlides((prev) =>
      prev.map((slide, index) =>
        index === productIndex ? (slide + 1) % products[productIndex].screenshots.length : slide,
      ),
    )
  }

  const prevSlide = (productIndex: number) => {
    setProductSlides((prev) =>
      prev.map((slide, index) =>
        index === productIndex
          ? (slide - 1 + products[productIndex].screenshots.length) % products[productIndex].screenshots.length
          : slide,
      ),
    )
  }

  const openCalendly = () => {
    if (typeof window !== "undefined" && (window as any).Calendly) {
      ;(window as any).Calendly.initPopupWidget({
        url: "https://calendly.com/your-calendly-link", // Replace with your actual Calendly link
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Menu Backdrop - Outside header for proper layering */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-[#050f54] z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrollY > 50 ? 'bg-[#050f54]/95 backdrop-blur-xl border-white/10' : 'bg-transparent border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 flex items-center justify-center shadow-lg">
                <Image src="/logo.png" alt="Digital School" width={40} height={40} />
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('products')}
                className="text-white font-bold hover:text-[#a3ff00] transition-colors duration-200"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-white font-bold hover:text-[#a3ff00] transition-colors duration-200"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection('technology')}
                className="text-white font-bold hover:text-[#a3ff00] transition-colors duration-200"
              >
                Technology
              </button>
              <button
                onClick={() => scrollToSection('mission')}
                className="text-white font-bold hover:text-[#a3ff00] transition-colors duration-200"
              >
                Mission
              </button>
              <DSButton 
                onClick={openCalendly} 
                className="px-6 py-2.5 bg-[#a3ff00] hover:bg-[#6eb800] text-[#050f54] font-black rounded-full text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Demo</span>
              </DSButton>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-6 pt-4 border-t border-white/10 animate-in slide-in-from-top relative z-50 bg-[#050f54]">
              <nav className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-left text-white font-bold hover:text-[#a3ff00] transition-colors py-2 text-sm"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-left text-white font-bold hover:text-[#a3ff00] transition-colors py-2 text-sm"
                >
                  Products
                </button>
                <button
                  onClick={() => scrollToSection('team')}
                  className="text-left text-white font-bold hover:text-[#a3ff00] transition-colors py-2 text-sm"
                >
                  Team
                </button>
                <button
                  onClick={() => scrollToSection('technology')}
                  className="text-left text-white font-bold hover:text-[#a3ff00] transition-colors py-2 text-sm"
                >
                  Technology
                </button>
                <button
                  onClick={() => scrollToSection('mission')}
                  className="text-left text-white font-bold hover:text-[#a3ff00] transition-colors py-2 text-sm"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection('demo')}
                  className="text-left text-white font-bold hover:text-[#a3ff00] transition-colors py-2 text-sm"
                >
                  Contact
                </button>
                <DSButton 
                  onClick={openCalendly} 
                  className="w-full px-6 py-3 bg-[#a3ff00] hover:bg-[#6eb800] text-[#050f54] font-black rounded-full text-sm transition-all duration-300 shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Demo</span>
                </DSButton>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-24 relative overflow-hidden bg-[#050f54]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center space-x-2 bg-[#a3ff00]/20 backdrop-blur-sm border border-[#a3ff00]/30 rounded-full px-5 py-2 mb-8">
                <Sparkles className="w-4 h-4 text-[#a3ff00]" />
                <span className="text-sm font-bold text-[#a3ff00]">Future Ready</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white mb-8 leading-tight">
                <span className="block text-[#0f8cfa]">Meet. Create.</span>
                <span className="block text-[#a3ff00]">Celebrate.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8 font-medium">
                improvise. code. overcome.
              </p>
              <p className="text-base md:text-lg text-white/70 max-w-2xl mb-12 leading-relaxed">
                Pushing forward Digital School with cutting-edge products and curriculum, delivering the best quality educational technology to our franchises worldwide.
              </p>
              
              {/* Statistics Blocks */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {[
                  { number: "5", label: "ACTIVE PRODUCTS", color: "#ff2e30" },
                  { number: "20K+", label: "STUDENTS", color: "#9433eb" },
                  { number: "500+", label: "APPLICATIONS", color: "#a3ff00" },
                  { number: "100%", label: "SUCCESS RATE", color: "#0f8cfa" },
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="rounded-2xl p-6 shadow-2xl hover:scale-105 transition-transform duration-300"
                    style={{ backgroundColor: stat.color }}
                  >
                    <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.number}</div>
                    <div className="text-white/90 font-black text-xs uppercase tracking-wider leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <DSButton onClick={openCalendly} className="px-10 py-4 bg-[#ff2e30] hover:bg-[#dc0000] text-white font-black rounded-full text-lg shadow-2xl hover:scale-105 transition-all duration-300">
                  <Video className="h-5 w-5" /> 
                  <span>Book a Demo</span>
                </DSButton>
                <DSButton 
                  onClick={() => scrollToSection('products')} 
                  className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-black rounded-full text-lg backdrop-blur-sm transition-all duration-300"
                >
                  <span>Explore Products</span>
                  <ChevronRight className="h-5 w-5" />
                </DSButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Portfolio Section with Slideshow */}
      <section id="products" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-left mb-20">
            <div className="inline-flex items-center space-x-2 bg-[#ff2e30] rounded-full px-5 py-2 mb-8">
              <Rocket className="w-4 h-4 text-white" />
              <span className="text-sm font-black text-white uppercase tracking-wide">Our Products</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-[#050f54] mb-8 tracking-tight leading-tight">
              Innovation <span className="text-[#ff2e30]">Showcase</span>
            </h2>
            <p className="text-2xl text-gray-700 font-medium max-w-3xl">
              Discover our cutting-edge solutions revolutionizing education technology and transforming learning experiences worldwide.
            </p>
          </div>

          {/* Product Showcase Grid with Slideshow */}
          <div className="space-y-32">
            {products.map((product, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Product Visual with Slideshow */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  {(() => {
                    const isParentApp = product.name === "Parent App"
                    return (
                      <div className={`relative group ${isParentApp ? "flex justify-center" : ""}`}>
                        <div className={`${isParentApp ? "w-full max-w-[380px] h-[640px] md:max-w-[420px] md:h-[700px]" : "w-full h-96"} rounded-[32px] bg-gradient-to-br ${product.color} shadow-2xl relative overflow-hidden border-4 border-white`}>
                      {/* Screenshot Slideshow */}
                      <div className="absolute inset-4 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
                        <div className="relative w-full h-full">
                          <Image
                            src={product.screenshots[productSlides[index]] || "/placeholder.svg"}
                            alt={`${product.name} Screenshot ${productSlides[index] + 1}`}
                            fill
                            className={`${isParentApp ? "object-contain" : "object-cover"} transition-opacity duration-500`}
                          />
                          <div className="absolute inset-0 bg-black/50 pointer-events-none" aria-hidden="true" />

                          {/* Slideshow Controls */}
                          <button
                            onClick={() => prevSlide(index)}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ds-blueLight"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => nextSlide(index)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ds-blueLight"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>

                          {/* Slide Indicators */}
                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {product.screenshots.map((_, slideIndex) => (
                              <button
                                key={slideIndex}
                                onClick={() =>
                                  setProductSlides((prev) =>
                                    prev.map((slide, pIndex) => (pIndex === index ? slideIndex : slide)),
                                  )
                                }
                                aria-current={productSlides[index] === slideIndex ? 'true' : 'false'}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                  productSlides[index] === slideIndex ? "bg-white" : "bg-white/50 hover:bg-white/75"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Product Icon and Name Overlay */}
                      <div className="absolute top-8 left-8 flex items-center space-x-4 text-white z-10">
                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">{product.icon}</div>
                        <div>
                          <h3 className="text-2xl font-bold">{product.name}</h3>
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div className="absolute top-8 right-8 z-10">
                        <div
                          className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm ${
                            product.status.includes("Live")
                              ? "bg-green-500/20 text-green-100 border border-green-400/30"
                              : product.status.includes("Coming")
                                ? "bg-blue-500/20 text-blue-100 border border-blue-400/30"
                                : "bg-orange-500/20 text-orange-100 border border-orange-400/30"
                          }`}
                        >
                          {product.status}
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
                      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                    </div>

                    {/* Floating Stats */}
                    <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 group-hover:scale-105 transition-transform duration-300">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          {index === 0 ? "15+" : index === 1 ? "Live" : index === 2 ? "AI" : index === 3 ? "iOS/Android" : "Automated"}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          {index === 0
                            ? "Features"
                            : index === 1
                              ? "Platform"
                              : index === 2
                                ? "Powered"
                                : index === 3
                                  ? "Native Apps"
                                  : "Workflows"}
                        </div>
                      </div>
                        </div>
                      </div>
                    )
                  })()}
                </div>

                {/* Product Details */}
                <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""} space-y-8`}>
                  <div>
                      <div className="flex items-center space-x-3 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${product.color} shadow-lg`}>
                        <div className="w-6 h-6 text-white">{product.icon}</div>
                      </div>
                      <div
                        className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider ${
                          product.status.includes("Live")
                            ? "bg-[#a3ff00] text-[#050f54]"
                            : product.status.includes("Coming")
                              ? "bg-[#0f8cfa] text-white"
                              : "bg-[#ff2e30] text-white"
                        }`}
                      >
                        {product.status}
                      </div>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-black text-[#050f54] mb-4 tracking-tight leading-tight">{product.name}</h3>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-6">
                    <h5 className="text-2xl font-black text-[#050f54]">Key Capabilities</h5>
                    <div className="grid gap-3">
                      {product.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="group flex items-start space-x-4 p-4 rounded-2xl bg-gray-50 hover:bg-white border-2 border-transparent hover:border-[#9433eb] transition-all duration-200"
                        >
                          <div className={`w-3 h-3 rounded-full mt-2 group-hover:scale-125 transition-transform duration-200`} 
                            style={{ 
                              backgroundColor: index === 0 ? '#0f8cfa' : 
                                             index === 1 ? '#9433eb' : 
                                             index === 2 ? '#a3ff00' : 
                                             index === 3 ? '#ff2e30' :
                                             '#ff6b35'
                            }} 
                          />
                          <div>
                            <span className="text-gray-800 font-bold group-hover:text-[#050f54] transition-colors text-lg">
                              {feature}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-6">
                    <DSButton onClick={openCalendly} className="px-10 py-4 bg-[#ff2e30] hover:bg-[#dc0000] text-white font-black rounded-full text-lg shadow-xl hover:scale-105 transition-all duration-300">
                      <span>Explore {product.name}</span>
                      <ChevronRight className="w-5 h-5" />
                    </DSButton>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-32 bg-[#050f54] text-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 text-left">
              <div className="inline-flex items-center space-x-2 bg-[#9433eb] rounded-full px-5 py-2 mb-8">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-black text-white uppercase tracking-wide">Our Mission</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
                Redefining <span className="text-[#a3ff00]">Education</span>
              </h2>

              <p className="text-xl text-white/90 leading-relaxed mb-8 font-medium">
                To push forward Digital School in products and curriculum, providing the best quality educational
                technology solutions to our franchises worldwide.
              </p>
              
              <p className="text-lg text-white/70 leading-relaxed font-medium">
                We're committed to innovation, excellence, and transforming the future of education through cutting-edge technology and engaging learning experiences.
              </p>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: "🎯", title: "Innovation", desc: "Cutting-edge solutions" },
                  { icon: "💡", title: "Excellence", desc: "Highest quality" },
                  { icon: "🚀", title: "Impact", desc: "Transform education" },
                ].map((item, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h3 className="text-xl font-black text-white mb-2">{item.title}</h3>
                    <p className="text-white/70 font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Tree Section */}
      <section id="team" className="py-32 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          {/* Header Section */}
          <div className="mb-24 text-center">
            <div className="inline-flex items-center justify-center space-x-3 bg-[#9433eb] rounded-full px-6 py-3 mb-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <Users className="w-5 h-5 text-white" />
              <span className="text-sm font-black text-white uppercase tracking-wider">OUR TEAM</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-[#050f54] mb-6 tracking-tight leading-tight">
              Meet the <span className="text-[#ff2e30]">Innovators</span>
            </h2>
            <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
              The brilliant minds pushing education forward
            </p>
          </div>

          {/* Leadership - Floating Cards with Rotation */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {teamStructure.leadership.map((leader, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-[32px] p-8 bg-gradient-to-br from-[#0f8cfa] via-[#050f54] to-[#0f8cfa] shadow-xl hover:shadow-2xl transition-all duration-700 group"
                style={{
                  transform: `rotate(${index === 0 ? '-1.5deg' : '1.5deg'})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#a3ff00]/10 via-transparent to-[#9433eb]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#a3ff00]/20 rounded-full blur-3xl group-hover:scale-150 transition-all duration-700" />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#9433eb]/20 rounded-full blur-3xl group-hover:scale-150 transition-all duration-700" />
                
                <div className="relative z-10">
                  <h4 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight leading-tight group-hover:text-[#a3ff00] transition-colors duration-500">
                    {leader.name}
                  </h4>
                  <p className="text-[#a3ff00] font-black text-xl md:text-2xl">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Teams - Horizontal Grid Layout */}
          <div className="grid md:grid-cols-3 gap-6">
            {teamStructure.teams.map((team, teamIndex) => {
              const teamConfig = [
                { 
                  gradient: 'from-[#9433eb] via-[#0f8cfa] to-[#9433eb]',
                  accent: '#9433eb',
                  icon: <Sparkles className="w-6 h-6" />
                },
                { 
                  gradient: 'from-[#a3ff00] via-[#6eb800] to-[#a3ff00]',
                  accent: '#a3ff00',
                  icon: <Code2 className="w-6 h-6" />
                },
                { 
                  gradient: 'from-[#ff2e30] via-[#9433eb] to-[#ff2e30]',
                  accent: '#ff2e30',
                  icon: <Users className="w-6 h-6" />
                },
              ]
              const config = teamConfig[teamIndex]
              
              return (
                <div
                  key={teamIndex}
                  className="relative transition-all duration-700 hover:scale-[1.02] group h-full flex flex-col"
                >
                  {/* Main Team Container */}
                  <div className="relative bg-white rounded-[28px] shadow-xl overflow-hidden border-2 border-gray-100 group-hover:border-gray-200 transition-all duration-500 flex flex-col h-full">
                    {/* Animated Gradient Header */}
                    <div className={`h-3 bg-gradient-to-r ${config.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </div>
                    
                    {/* Team Header Section */}
                    <div className="p-6 pb-5">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-start space-x-3 flex-1 min-w-0">
                          <div 
                            className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0"
                            style={{ 
                              background: `linear-gradient(135deg, ${config.accent}, ${config.accent}dd)`
                            }}
                          >
                            {config.icon}
                          </div>
                          <div className="flex-1 pt-1 min-w-0">
                            <h3 className="text-xl md:text-2xl font-black text-[#050f54] tracking-tight mb-2 break-words">
                              {team.name}
                            </h3>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 rounded-full bg-[#a3ff00] animate-pulse flex-shrink-0" />
                              <span className="text-xs font-bold text-gray-500 whitespace-nowrap">{team.members.length} Talented Professionals</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Team Members - Vertical Stack with Enhanced Cards */}
                    <div className="px-6 pb-6 flex-1">
                      <div className="space-y-3">
                        {team.members.map((member, memberIndex) => (
                          <div
                            key={memberIndex}
                            className="group/member relative overflow-hidden rounded-2xl p-4 bg-gradient-to-br from-gray-50 via-white to-gray-50 hover:from-white hover:via-gray-50 hover:to-white border-2 border-transparent hover:border-gray-200 transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
                          >
                            {/* Animated Accent Line */}
                            <div 
                              className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-current to-transparent opacity-0 group-hover/member:opacity-100 transition-opacity duration-300"
                              style={{ color: config.accent }}
                            />
                            
                            <div className="flex items-start justify-between pl-3 min-w-0">
                              <div className="flex-1 min-w-0 pr-3">
                                <h4 
                                  className="text-base font-black mb-1 transition-colors duration-300 break-words"
                                  style={{
                                    color: '#050f54'
                                  }}
                                  onMouseEnter={(e) => {
                                    const style = e.currentTarget.style as any
                                    style.background = `linear-gradient(to right, ${config.accent}, ${config.accent}dd)`
                                    style.webkitBackgroundClip = 'text'
                                    style.backgroundClip = 'text'
                                    style.WebkitTextFillColor = 'transparent'
                                  }}
                                  onMouseLeave={(e) => {
                                    const style = e.currentTarget.style as any
                                    style.background = 'none'
                                    style.webkitBackgroundClip = 'unset'
                                    style.backgroundClip = 'unset'
                                    style.WebkitTextFillColor = 'unset'
                                  }}
                                >
                                  {member.name}
                                </h4>
                                <p className="text-sm text-gray-600 font-semibold break-words leading-tight">{member.role}</p>
                              </div>
                              <div className="flex items-center space-x-2 ml-3 flex-shrink-0">
                                <div 
                                  className="w-3 h-3 rounded-full flex-shrink-0 group-hover/member:scale-125 group-hover/member:shadow-lg transition-all duration-500"
                                  style={{ 
                                    backgroundColor: config.accent,
                                    boxShadow: `0 0 0 0 ${config.accent}40`
                                  }}
                                />
                              </div>
                            </div>
                            
                            {/* Hover Glow Effect */}
                            <div 
                              className="absolute inset-0 rounded-2xl opacity-0 group-hover/member:opacity-20 transition-opacity duration-500 blur-xl"
                              style={{ 
                                background: `radial-gradient(circle at center, ${config.accent}, transparent)`
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Floating Decorative Elements */}
                  <div 
                    className="absolute -top-6 -right-6 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                    style={{ backgroundColor: config.accent }}
                  />
                  <div 
                    className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                    style={{ backgroundColor: config.accent }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Technology Section */}
      <section id="technology" className="py-32 bg-[#050f54] text-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mb-20 text-left">
            <div className="inline-flex items-center space-x-2 bg-[#0f8cfa] rounded-full px-5 py-2 mb-6">
              <Code2 className="w-4 h-4 text-white" />
              <span className="text-sm font-black text-white uppercase tracking-wide">Tech Stack</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              Powered by <span className="text-[#a3ff00]">Innovation</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl font-medium">
              We leverage cutting-edge technology to build scalable, robust educational products that transform learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Frontend",
                icon: <Code2 className="w-8 h-8" />,
                tech: ["React", "Vue.js", "TypeScript"],
                color: "#0f8cfa",
              },
              {
                category: "Backend",
                icon: <Server className="w-8 h-8" />,
                tech: ["Laravel", "Inertia", "GraphQL / REST"],
                color: "#9433eb",
              },
              {
                category: "AI & ML",
                icon: <BrainCircuit className="w-8 h-8" />,
                tech: ["Python", "TensorFlow", "LangChain"],
                color: "#a3ff00",
              },
              {
                category: "DevOps",
                icon: <CloudCog className="w-8 h-8" />,
                tech: ["AWS / DigitalOcean", "Docker", "CI/CD"],
                color: "#ff2e30",
              },
            ].map((stack, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300"
              >
                <div
                  className="flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-lg"
                  style={{ backgroundColor: stack.color }}
                >
                  <div className="text-white">
                    {stack.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-white mb-6 group-hover:text-[#a3ff00] transition-colors">{stack.category}</h3>
                <ul className="space-y-3">
                  {stack.tech.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: stack.color }} />
                      <span className="text-white/90 font-medium group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Meeting Section */}
      <section id="demo" className="py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="bg-gradient-to-br from-[#0f8cfa] to-[#050f54] rounded-[32px] p-12 md:p-16 shadow-2xl overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center relative">
              {/* Left Side Content */}
              <div>
                <div className="inline-flex items-center space-x-2 bg-[#a3ff00]/90 border border-[#a3ff00] rounded-full px-5 py-2 mb-6">
                  <Calendar className="w-4 h-4 text-[#050f54]" />
                  <span className="text-sm font-black text-[#050f54] uppercase tracking-wide">LET'S CONNECT</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                  Ready to Transform Education?
                </h2>
                <p className="text-lg text-white/90 mb-10 leading-relaxed font-medium">
                  Book a personalized demo with our R&D team and discover how we're revolutionizing learning for the next generation.
                </p>

                <div className="space-y-4 mb-10">
                  {[
                    { icon: <Video className="w-5 h-5" />, text: "Live product demonstrations", color: "#ff2e30" },
                    { icon: <Users className="w-5 h-5" />, text: "Meet our brilliant team", color: "#9433eb" },
                    { icon: <Rocket className="w-5 h-5" />, text: "Custom implementation plan", color: "#a3ff00" },
                    { icon: <Phone className="w-5 h-5" />, text: "Q&A with tech experts", color: "#0f8cfa" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: item.color }}>
                        {item.icon}
                      </div>
                      <span className="text-white font-bold text-lg group-hover:translate-x-2 transition-transform duration-200">{item.text}</span>
                    </div>
                  ))}
                </div>

                <DSButton onClick={openCalendly} className="px-10 py-4 bg-[#ff2e30] hover:bg-[#dc0000] text-white font-black rounded-full text-lg shadow-2xl hover:scale-105 transition-all duration-300">
                  <Calendar className="w-5 h-5" />
                  <span>Book Your Demo Now</span>
                  <ChevronRight className="w-5 h-5" />
                </DSButton>
              </div>

              {/* Right Side Content */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 relative">
                <h3 className="text-2xl font-black text-white mb-8">What You'll Experience:</h3>
                <div className="space-y-6">
                  {[
                    { icon: "🎯", title: "30-Min Live Demo", desc: "Full product walkthrough" },
                    { icon: "🚀", title: "Tech Deep Dive", desc: "Architecture & integrations" },
                    { icon: "📋", title: "Custom Roadmap", desc: "Tailored for your needs" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors duration-200">
                      <div className="text-3xl">{item.icon}</div>
                      <div>
                        <h4 className="font-black text-white mb-1 text-lg">{item.title}</h4>
                        <p className="text-white/80 text-sm font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050f54] text-white py-20 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 flex items-center justify-center shadow-xl">
                <Image src="/logo.png" alt="Digital School" width={40} height={40} />
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tight">Digital School</h3>
                <p className="text-[#a3ff00] font-bold text-lg">R&D Team</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white/90 mb-2 font-bold text-lg">© 2025 Digital School. All rights reserved.</p>
              <div className="flex items-center justify-center md:justify-end gap-3 mt-4">
                {[
                  { color: "#0f8cfa", label: "Innovation" },
                  { color: "#9433eb", label: "Excellence" },
                  { color: "#a3ff00", label: "Impact" },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                    title={item.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
