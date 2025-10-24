"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Sparkles, Zap, Users, Rocket, ChevronLeft, Calendar, Clock, Video, Phone } from "lucide-react"
import Image from "next/image"

export default function DigitalSchoolRD() {
  const [activeProduct, setActiveProduct] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [productSlides, setProductSlides] = useState([0, 0, 0, 0]) // Track current slide for each product
  const [showCalendly, setShowCalendly] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-advance slideshow
  useEffect(() => {
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
      subtitle: "All-in-One School Management System",
      description:
        "Multi-tenant franchise school management system with comprehensive features including CRM, SMS, billing, and more.",
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
      color: "from-blue-600 via-purple-600 to-blue-800",
      icon: <Zap className="w-8 h-8" />,
      screenshots: [
        "/placeholder.svg?height=400&width=600&text=DSOS+Dashboard",
        "/placeholder.svg?height=400&width=600&text=DSOS+CRM+Interface",
        "/placeholder.svg?height=400&width=600&text=DSOS+Analytics+View",
        "/placeholder.svg?height=400&width=600&text=DSOS+Mobile+App",
      ],
    },
    {
      name: "Houses",
      subtitle: "Next-Gen Edutainment Platform",
      description:
        "AI-powered personalized learning platform with gamified experiences. Fight aliens while solving coding questions and save sector planets!",
      features: [
        "AI-Powered Personalized Learning",
        "Auto-Generated Quizzes",
        "Gamified Universe Experience",
        "Interactive Coding Challenges",
        "Progress Tracking",
        "Adaptive Curriculum",
      ],
      status: "Live & Active Development",
      color: "from-emerald-500 via-teal-600 to-cyan-600",
      icon: <Sparkles className="w-8 h-8" />,
      screenshots: [
        "/placeholder.svg?height=400&width=600&text=Houses+Game+Universe",
        "/placeholder.svg?height=400&width=600&text=Houses+Coding+Challenge",
        "/placeholder.svg?height=400&width=600&text=Houses+AI+Learning",
        "/placeholder.svg?height=400&width=600&text=Houses+Progress+Dashboard",
      ],
    },
    {
      name: "DSGE",
      subtitle: "Block-Based Programming Platform",
      description:
        "Beautiful and innovative block-based learning programming platform, initially in Albanian with multi-language support planned.",
      features: [
        "Visual Block Programming",
        "AI Integration",
        "Albanian Language Support",
        "Multi-language Expansion",
        "Interactive Learning Modules",
        "Creative Project Building",
      ],
      status: "Launching September 2025",
      color: "from-orange-500 via-red-500 to-pink-600",
      icon: <Rocket className="w-8 h-8" />,
      screenshots: [
        "/placeholder.svg?height=400&width=600&text=DSGE+Block+Editor",
        "/placeholder.svg?height=400&width=600&text=DSGE+Project+Gallery",
        "/placeholder.svg?height=400&width=600&text=DSGE+Albanian+Interface",
        "/placeholder.svg?height=400&width=600&text=DSGE+AI+Assistant",
      ],
    },
    {
      name: "Parent App",
      subtitle: "Student Progress Tracking",
      description: "iOS & Android application for parents to track their children's progress in DSOS system.",
      features: [
        "Real-time Progress Tracking",
        "Grade Monitoring",
        "Communication with Teachers",
        "Assignment Updates",
        "Attendance Tracking",
        "Performance Analytics",
      ],
      status: "In Development",
      color: "from-violet-500 via-purple-600 to-indigo-600",
      icon: <Users className="w-8 h-8" />,
      screenshots: [
        "/placeholder.svg?height=400&width=600&text=Parent+App+Dashboard",
        "/placeholder.svg?height=400&width=600&text=Parent+App+Grades",
        "/placeholder.svg?height=400&width=600&text=Parent+App+Messages",
        "/placeholder.svg?height=400&width=600&text=Parent+App+Analytics",
      ],
    },
  ]

  const timeline = [
    {
      name: "DSOS",
      color: "from-blue-600 via-purple-600 to-blue-800",
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
      color: "from-emerald-500 via-teal-600 to-cyan-600",
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
          items: ["PvP Integration (Optional)", "Cross-platform with DSGE", "Advanced AI Personalization"],
        },
      ],
    },
    {
      name: "DSGE",
      color: "from-orange-500 via-red-500 to-pink-600",
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
      color: "from-violet-500 via-purple-600 to-indigo-600",
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
        lead: "AI Development",
        members: [
          { name: "Puhiza Rexha", role: "AI Developer", image: "/team/member1.png" },
          { name: "Ilir Kicmari", role: "AI Developer", image: "/team/member2.png" },
          { name: "Alma Kamberi", role: "AI Developer", image: "/team/member1.png" },
          { name: "Blerta Hajdini", role: "AI Developer", image: "/team/member2.png" },
        ],
      },
      {
        name: "DS Game Engine Team",
        lead: "Game Development",
        members: [
          { name: "Liridona Baliu", role: "Game Developer", image: "/team/member1.png" },
          { name: "Festa Rexhepi", role: "Game Developer", image: "/team/member2.png" },
        ],
      },
      {
        name: "Houses Team",
        lead: "Platform Development",
        members: [
          { name: "Dion Osmani", role: "Platform Developer", image: "/team/member1.png" },
          { name: "Vesa Osmani", role: "Platform Developer", image: "/team/member2.png" },
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
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100/50 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00014e] to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Image src="/logo.png" alt="Digital School" width={24} height={24} className="invert" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900 tracking-tight">Digital School</h1>
                <p className="text-sm text-gray-500 font-medium">R&D Team</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={openCalendly}
                className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Calendar className="w-4 h-4" />
                <span className="font-medium">Schedule Demo</span>
              </button>
              <a
                href="https://digitalschool.com"
                className="group bg-[#00014e] text-white px-6 py-3 rounded-full hover:bg-[#000238] transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span className="font-medium">Visit Main Site</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 py-2 mb-8 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#00014e]" />
              <span className="text-sm font-medium text-gray-700">Innovation at its finest</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[0.9] tracking-tight">
              <span className="text-gray-900">Innovate.</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00014e] via-blue-600 to-purple-600">
                Create.
              </span>
              <br />
              <span className="text-gray-900">Transform.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
              Pushing forward Digital School with cutting-edge products and curriculum, delivering the best quality to
              our franchises worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button
                onClick={openCalendly}
                className="group bg-gradient-to-r from-[#00014e] to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3"
              >
                <Video className="w-5 h-5" />
                <span>Book a Product Demo</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="https://digitalschool.com"
                className="group bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-full font-semibold hover:border-gray-300 hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3"
              >
                <span>Explore Franchise</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { number: "4", label: "Products", icon: <Rocket className="w-6 h-6" /> },
                { number: "10+", label: "Team Members", icon: <Users className="w-6 h-6" /> },
                { number: "2025", label: "Innovation Year", icon: <Sparkles className="w-6 h-6" /> },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-500"
                >
                  <div className="flex items-center justify-center mb-4 text-[#00014e] group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Meeting Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-emerald-100 border border-emerald-200 rounded-full px-4 py-2 mb-6">
                  <Calendar className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-medium text-emerald-700">Let's Connect</span>
                </div>

                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                  Ready to See Our Products in Action?
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                  Schedule a personalized demo with our R&D team. We'll show you how our innovative solutions can
                  transform your educational institution.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { icon: <Video className="w-5 h-5" />, text: "Live product demonstrations" },
                    { icon: <Users className="w-5 h-5" />, text: "Meet our development team" },
                    { icon: <Rocket className="w-5 h-5" />, text: "Discuss implementation roadmap" },
                    { icon: <Phone className="w-5 h-5" />, text: "Q&A with technical experts" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                        {item.icon}
                      </div>
                      <span className="text-gray-700 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={openCalendly}
                  className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-3"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Your Demo</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

                <div className="relative">
                  <h3 className="text-2xl font-bold mb-6">What You'll Get:</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">30-Minute Demo</h4>
                        <p className="text-emerald-100 text-sm">Comprehensive walkthrough of all products</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Technical Deep Dive</h4>
                        <p className="text-emerald-100 text-sm">Architecture and integration possibilities</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Custom Roadmap</h4>
                        <p className="text-emerald-100 text-sm">Tailored implementation plan for your needs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-[#00014e]/5 border border-[#00014e]/10 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-[#00014e] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[#00014e]">Our Mission</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">Redefining Education</h2>

            <p className="text-xl text-gray-600 leading-relaxed font-light">
              To push forward Digital School in products and curriculum, providing the best quality educational
              technology solutions to our franchises. We're committed to innovation, excellence, and transforming the
              future of education through technology.
            </p>
          </div>
        </div>
      </section>

      {/* Team Tree Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-purple-50 border border-purple-100 rounded-full px-4 py-2 mb-8">
              <Users className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Our Organization</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">Team Structure</h2>
            <p className="text-xl text-gray-600 font-light">The brilliant minds working together to innovate</p>
          </div>

          {/* Organizational Tree */}
          <div className="relative">
            {/* Leadership Level */}
            <div className="flex justify-center mb-16">
              <div className="flex space-x-12">
                {teamStructure.leadership.map((leader, index) => (
                  <div key={index} className="text-center">
                    <div className="group/card bg-white border-2 border-[#00014e]/20 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg">
                        <Image
                          src={leader.image || "/placeholder.svg"}
                          alt={leader.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">{leader.name}</h4>
                      <p className="text-[#00014e] font-semibold">{leader.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Connecting Lines */}
            <div className="absolute top-80 left-1/2 transform -translate-x-1/2 w-px h-16 border-l-2 border-dashed border-gray-300"></div>
            <div className="absolute top-96 left-1/4 right-1/4 h-px border-t-2 border-dashed border-gray-300"></div>

            {/* Team Branches */}
            <div className="grid md:grid-cols-3 gap-12 mt-16 relative">
              {/* Vertical connecting lines to each team */}
              <div className="absolute top-0 left-1/6 w-px h-8 border-l-2 border-dashed border-gray-300 transform translate-x-1/2"></div>
              <div className="absolute top-0 left-1/2 w-px h-8 border-l-2 border-dashed border-gray-300 transform -translate-x-1/2"></div>
              <div className="absolute top-0 right-1/6 w-px h-8 border-l-2 border-dashed border-gray-300 transform -translate-x-1/2"></div>

              {teamStructure.teams.map((team, teamIndex) => (
                <div key={teamIndex} className="text-center">
                  {/* Team Header */}
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 mb-8 border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">{team.name}</h3>
                    <p className="text-gray-600 font-medium">{team.lead}</p>
                  </div>

                  {/* Team Members */}
                  <div className="space-y-6">
                    {team.members.map((member, memberIndex) => (
                      <div key={memberIndex} className="relative">
                        {/* Connecting line to team header */}
                        {memberIndex === 0 && (
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-px h-8 border-l-2 border-dashed border-gray-300"></div>
                        )}

                        <div className="group/member bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-md flex-shrink-0">
                              <Image
                                src={member.image || "/placeholder.svg"}
                                alt={member.name}
                                width={64}
                                height={64}
                                className="w-full h-full object-cover group-hover/member:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <div className="text-left">
                              <h4 className="text-lg font-semibold text-gray-900 tracking-tight">{member.name}</h4>
                              <p className="text-gray-600 font-medium">{member.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-2 mb-8">
              <Calendar className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-medium text-indigo-700">Development Timeline</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">Roadmap to Innovation</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Our comprehensive development timeline showcasing the journey of each product from conception to launch
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="space-y-16">
            {timeline.map((project, projectIndex) => (
              <div key={projectIndex} className="relative">
                {/* Project Header */}
                <div className="flex items-center mb-12">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.color} flex items-center justify-center text-white shadow-lg mr-6`}
                  >
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 tracking-tight">{project.name}</h3>
                    <p className="text-lg text-gray-600 font-medium">Target: {project.mainDeadline}</p>
                  </div>
                </div>

                {/* Timeline Milestones */}
                <div className="relative">
                  {/* Main Timeline Line */}
                  <div
                    className={`absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b ${project.color} opacity-30`}
                  ></div>

                  <div className="space-y-8">
                    {project.milestones.map((milestone, milestoneIndex) => (
                      <div key={milestoneIndex} className="relative">
                        {/* Timeline Node */}
                        <div
                          className={`absolute left-6 w-5 h-5 rounded-full bg-gradient-to-r ${project.color} shadow-lg z-10`}
                        ></div>

                        {/* Milestone Content */}
                        <div className="ml-20">
                          <div
                            className={`${project.bgColor} ${project.borderColor} border-2 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300`}
                          >
                            <div className="flex items-center mb-6">
                              <Clock className={`w-5 h-5 ${project.textColor} mr-3`} />
                              <h4 className={`text-xl font-bold ${project.textColor} tracking-tight`}>
                                {milestone.period}
                              </h4>
                            </div>

                            {/* Milestone Items Grid */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {milestone.items.map((item, itemIndex) => (
                                <div
                                  key={itemIndex}
                                  className="group flex items-start space-x-3 p-4 bg-white/70 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-200"
                                >
                                  <div
                                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color} mt-2 group-hover:scale-125 transition-transform duration-200 flex-shrink-0`}
                                  ></div>
                                  <span className="text-gray-800 font-medium text-sm leading-relaxed group-hover:text-gray-900 transition-colors">
                                    {item}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Summary */}
          <div className="mt-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <div className="relative text-center">
              <h3 className="text-3xl font-bold mb-6 tracking-tight">Synchronized Development</h3>
              <p className="text-xl text-blue-100 font-light mb-8 max-w-3xl mx-auto">
                All products are being developed in parallel, with strategic integration points to create a seamless
                educational ecosystem.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {timeline.map((project, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center justify-center mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center`}
                      >
                        {project.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{project.name}</h4>
                    <p className="text-blue-100 text-sm font-light">{project.mainDeadline}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Portfolio Section with Slideshow */}
      <section className="py-32 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-8">
              <Rocket className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Our Portfolio</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">Innovation Showcase</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Discover our cutting-edge solutions that are revolutionizing education technology and transforming
              learning experiences worldwide.
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
                  <div className="relative group">
                    <div
                      className={`w-full h-96 rounded-3xl bg-gradient-to-br ${product.color} shadow-2xl relative overflow-hidden`}
                    >
                      {/* Screenshot Slideshow */}
                      <div className="absolute inset-4 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
                        <div className="relative w-full h-full">
                          <Image
                            src={product.screenshots[productSlides[index]] || "/placeholder.svg"}
                            alt={`${product.name} Screenshot ${productSlides[index] + 1}`}
                            fill
                            className="object-cover transition-opacity duration-500"
                          />

                          {/* Slideshow Controls */}
                          <button
                            onClick={() => prevSlide(index)}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => nextSlide(index)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200"
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
                          <p className="text-white/80 font-medium">{product.subtitle}</p>
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
                          {index === 0 ? "15+" : index === 1 ? "Live" : index === 2 ? "AI" : "iOS/Android"}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          {index === 0
                            ? "Features"
                            : index === 1
                              ? "Platform"
                              : index === 2
                                ? "Powered"
                                : "Native Apps"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""} space-y-8`}>
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-2 rounded-xl bg-gradient-to-r ${product.color}`}>
                        <div className="w-6 h-6 text-white">{product.icon}</div>
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          product.status.includes("Live")
                            ? "bg-green-100 text-green-800"
                            : product.status.includes("Coming")
                              ? "bg-blue-100 text-blue-800"
                              : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {product.status}
                      </div>
                    </div>

                    <h3 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">{product.name}</h3>
                    <h4 className="text-xl text-gray-600 font-medium mb-6">{product.subtitle}</h4>
                    <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">{product.description}</p>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-6">
                    <h5 className="text-xl font-semibold text-gray-900">Key Capabilities</h5>
                    <div className="grid gap-4">
                      {product.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-200"
                        >
                          <div
                            className={`w-3 h-3 rounded-full bg-gradient-to-r ${product.color} mt-2 group-hover:scale-125 transition-transform duration-200`}
                          />
                          <div>
                            <span className="text-gray-800 font-medium group-hover:text-gray-900 transition-colors">
                              {feature}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-6">
                    <button
                      onClick={openCalendly}
                      className={`group inline-flex items-center space-x-3 bg-gradient-to-r ${product.color} text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105`}
                    >
                      <span>Schedule Demo</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Portfolio Summary */}
          <div className="mt-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <div className="relative">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4 tracking-tight">Complete Education Ecosystem</h3>
                <p className="text-xl text-blue-100 font-light">
                  Our integrated suite of products creates a seamless educational experience from management to
                  learning.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Management",
                    desc: "DSOS handles all administrative needs",
                    icon: <Zap className="w-6 h-6" />,
                  },
                  {
                    title: "Learning",
                    desc: "Houses provides engaging education",
                    icon: <Sparkles className="w-6 h-6" />,
                  },
                  { title: "Programming", desc: "DSGE teaches coding skills", icon: <Rocket className="w-6 h-6" /> },
                  { title: "Tracking", desc: "Parent App monitors progress", icon: <Users className="w-6 h-6" /> },
                ].map((item, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-blue-100 text-sm font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#00014e] via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="max-w-5xl mx-auto text-center px-6 lg:px-8 relative">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-blue-300" />
            <span className="text-sm font-medium text-blue-100">Join the Revolution</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">Ready to Transform Education?</h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
            Join the Digital School franchise network and bring cutting-edge educational technology to your community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="group inline-flex items-center space-x-4 bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-full font-semibold transition-all duration-300 text-lg shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule Demo</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            <a
              href="https://digitalschool.com"
              className="group inline-flex items-center space-x-4 bg-white text-[#00014e] px-10 py-5 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-lg shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              <span>Explore Franchise Opportunities</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00014e] to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Image src="/logo.png" alt="Digital School" width={28} height={28} className="invert" />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight">Digital School R&D Team</h3>
                <p className="text-gray-400 font-medium">Innovating the future of education</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-1">© 2025 Digital School. All rights reserved.</p>
              <p className="text-gray-500 text-sm">Proudly built by our R&D Team</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
