"use client"

import Image from "next/image"
import { Linkedin, Mail, Shield, Server, Code, Network, Database, Lock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef } from "react"

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const activities = [
    {
      title: "College Fests Organizer",
      image: "/placeholder.svg?height=200&width=400&text=College+Fests",
      description: "AFOSEC 2023 and Explorika 2022",
      details: [
        "Led event coordination and management",
        "Managed cross-functional teams",
        "Demonstrated leadership skills",
      ],
    },
    {
      title: "NSS Student Volunteer",
      image: "/placeholder.svg?height=200&width=400&text=NSS+Volunteer",
      details: [
        "Community service initiatives",
        "Health and education campaigns",
        "Environmental sustainability projects",
      ],
    },
    {
      title: "NCC Cadet-B level",
      image: "/placeholder.svg?height=200&width=400&text=NCC+Cadet",
      details: ["Leadership training", "Adventure activities", "Community service"],
    },
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%"
    const matrixArray = matrix.split("")
    const fontSize = 10
    const columns = canvas.width / fontSize
    const drops: number[] = []

    for (let x = 0; x < columns; x++) {
      drops[x] = 1
    }

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "#0f0"
      ctx.font = fontSize + "px monospace"

      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 35)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#020817] text-white relative">
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full opacity-20 pointer-events-none" />

      <div className="relative">
        <header className="py-6 bg-black/50 backdrop-blur-sm sticky top-0 z-50 border-b border-teal-500/20">
          <nav className="container mx-auto px-4">
            <ul className="flex justify-center space-x-8">
              {["about", "education", "experience", "projects", "skills", "activities", "contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-teal-400 hover:text-teal-300 transition-colors capitalize font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-12">
          <section id="about" className="mb-20">
            <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-teal-500/20 shadow-[0_0_15px_rgba(45,212,191,0.1)]">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-[0_0_25px_rgba(45,212,191,0.3)]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5206-EDXI21p1ZtbbgbCXUncOBhvzDcKGTR.jpeg"
                    alt="Krishna Chaitanya Bodepudi"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text font-orbitron">
                    Krishna Chaitanya Bodepudi
                  </h1>
                  <p className="text-xl mb-6 text-teal-400">Cybersecurity Analyst | Information Systems Graduate</p>
                  <p className="text-gray-300">
                    Motivated graduate student specializing in cybersecurity and network analysis. Skilled in building
                    secure systems, analyzing network traffic, and implementing robust security measures to protect
                    digital assets.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="skills" className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text font-orbitron">
              Core Competencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Security Analysis",
                  skills: ["Threat Detection", "Vulnerability Assessment", "Security Monitoring"],
                },
                {
                  icon: Network,
                  title: "Network Security",
                  skills: ["Wireshark", "TCPDump", "Packet Analysis"],
                },
                {
                  icon: Code,
                  title: "Security Tools",
                  skills: ["Python Scripting", "Bash Scripting", "Security Automation"],
                },
                {
                  icon: Database,
                  title: "Data Security",
                  skills: ["SQL Security", "Data Protection", "Access Control"],
                },
                {
                  icon: Server,
                  title: "System Security",
                  skills: ["Linux Security", "Windows Security", "System Hardening"],
                },
                {
                  icon: Lock,
                  title: "Security Standards",
                  skills: ["Security Protocols", "Compliance", "Best Practices"],
                },
              ].map((skill, idx) => (
                <Card
                  key={idx}
                  className="bg-black/40 border-teal-500/20 hover:border-teal-500/40 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <skill.icon className="w-12 h-12 text-teal-400 mb-4" />
                    <h3 className="text-xl font-semibold text-teal-400 mb-4">{skill.title}</h3>
                    <ul className="space-y-2">
                      {skill.skills.map((item, i) => (
                        <li key={i} className="text-gray-300 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="projects" className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text font-orbitron">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-black/40 border-teal-500/20 hover:border-teal-500/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Network className="w-8 h-8 text-teal-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-teal-400 mb-3">
                        Analyze Network Traffic with TCPDump: Build a Logging Tool
                      </h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                          Captured and analyzed TCP traffic using tcpdump
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                          Developed Linux-based logging tool script for network packet capture
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                          Created and managed sequenced dump files for traffic analysis
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                          Decrypted and analyzed network traffic for TCP protocols
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                          Applied Linux commands and shell scripting for networking operations
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-teal-500/20 hover:border-teal-500/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="w-8 h-8 text-teal-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-teal-400 mb-3">
                        Wireshark for Beginners: Capture Packets
                      </h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                          Installed and configured Wireshark on Ubuntu
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                          Captured HTTP and HTTPS packets on Ethernet port
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                          Applied display filters for specific traffic identification
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                          Detected and isolated traffic patterns through packet analysis
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                          Conducted capstone task on Ethernet packet observation
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="experience" className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text font-orbitron">
              Professional Experience
            </h2>
            <Card className="bg-black/40 border-teal-500/20 hover:border-teal-500/40 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Code className="w-8 h-8 text-teal-400 flex-shrink-0" />
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2 mb-3">
                      <h3 className="text-xl font-semibold text-teal-400">
                        Robotic Process Automation (RPA) Virtual Internship
                      </h3>
                      <span className="text-gray-400">AICTE</span>
                      <span className="text-gray-400 text-sm">Nov 2022 - Dec 2022</span>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                        Gained foundational knowledge of RPA concepts and applications
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                        Learned to identify automation opportunities in business processes
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                        Explored creating and deploying RPA bots for data extraction
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                        Developed skills in process mapping and workflow optimization
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                        Understood RPA lifecycle including bot design, testing, and monitoring
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="education" className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text font-orbitron">
              Education
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  degree: "Masters in Information Systems",
                  school: "Saint Louis University",
                  period: "Jan 2024 - Dec 2025",
                  gpa: "4.0",
                },
                {
                  degree: "Bachelors of Technology, Electronics And Communication Engineering",
                  school: "Velagapudi Ramakrishna Siddhartha Engineering College",
                  period: "Aug 2019 - May 2023",
                  gpa: "3.3",
                },
              ].map((edu, idx) => (
                <Card
                  key={idx}
                  className="transform hover:scale-[1.02] transition-all duration-300 bg-black/40 border border-teal-500/20 hover:border-teal-500/40"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-teal-400">{edu.degree}</h3>
                    <p className="text-gray-300 mt-2">{edu.school}</p>
                    <p className="text-gray-300">{edu.period}</p>
                    <p className="text-gray-300">GPA: {edu.gpa}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="activities" className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text font-orbitron">
              Extra Curricular Activities and Volunteering
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {activities.map((activity, index) => (
                <Card
                  key={index}
                  className="bg-black/40 border-teal-500/20 hover:border-teal-500/40 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <div className="h-48 relative">
                        <Image
                          src={activity.image || "/placeholder.svg"}
                          alt={activity.title}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-cyan-400 mb-2">{activity.title}</h3>
                        {activity.description && <p className="text-gray-300 mb-2">{activity.description}</p>}
                        <ul className="space-y-1 text-gray-300">
                          {activity.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="contact" className="text-center">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-teal-500/20 shadow-[0_0_15px_rgba(45,212,191,0.1)] max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text font-orbitron">
                Connect With Me
              </h2>
              <p className="mb-6 text-gray-300">
                Ready to collaborate on cybersecurity projects or discuss opportunities?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="default"
                  className="bg-teal-500 hover:bg-teal-600 text-black font-medium"
                  as="a"
                  href="mailto:krishnachaitanya.bodepudi@slu.edu"
                >
                  <Mail className="mr-2 h-4 w-4" /> Email Me
                </Button>
                <Button
                  variant="outline"
                  className="border-teal-500 text-teal-400 hover:bg-teal-500/10"
                  as="a"
                  href="https://www.linkedin.com/in/krishna-chaitanya-bodepudi-427aa7193/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Button>
                <Button
                  variant="outline"
                  className="border-teal-500 text-teal-400 hover:bg-teal-500/10"
                  as="a"
                  href="tel:+16468211711"
                >
                  <Phone className="mr-2 h-4 w-4" /> (646) 821-1711
                </Button>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-black/50 border-t border-teal-500/20 text-gray-300 py-6 mt-20">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Krishna Chaitanya Bodepudi. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

