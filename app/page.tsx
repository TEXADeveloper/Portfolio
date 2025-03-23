import Image from "next/image"
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ExternalLink,
  Menu,
  Home,
  Gamepad2,
  Code2,
  BookOpen,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import fs from "fs";
import path from "path";
import Link from "next/link";

function getGames() {
  const filePath = path.join(process.cwd(), "public/info/games.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileData);
}

function getEducation() {
  const filePath = path.join(process.cwd(), "public/info/education.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileData);
}

function getSkills() {
  const filePath = path.join(process.cwd(), "public/info/skills.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileData);
}

function getSocial() {
  const filePath = path.join(process.cwd(), "public/info/social.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileData);
}

export default function Portfolio() {

  const games = getGames();
  const skills = getSkills();
  const education = getEducation();
  const social = getSocial();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="fixed w-full bg-black/80 backdrop-blur-sm z-50 border-b border-green-500/20">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-green-500 font-bold text-lg sm:text-xl">Inti Fernández</span>
            <Badge variant="outline" className="text-green-400 border-green-500/50 hidden sm:inline-flex">
              Programmer
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-green-500 hover:text-green-400 transition">
              Home
            </a>
            <a href="#games" className="text-white/80 hover:text-green-400 transition">
              Games
            </a>
            <a href="#skills" className="text-white/80 hover:text-green-400 transition">
              Skills
            </a>
            <a href="#education" className="text-white/80 hover:text-green-400 transition">
              Education
            </a>
            <a href="#contact" className="text-white/80 hover:text-green-400 transition">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="px-0 border border-white/80 text-white/80 hover:border-green-500 hover:bg-green-500 hover:text-black hidden sm:flex"
            >
              <a href={social.cv} target="_blank" rel="noopener noreferrer" className="px-3 h-full w-full flex items-center ">
                <FileText className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
                <span className="hidden sm:inline">Resume</span>
              </a>
            </Button>

            <div className="hidden sm:flex items-center gap-1 sm:gap-2">
              <Button variant="ghost" size="icon" className="m-0 text-white/80 hover:text-black h-8 w-8 sm:h-9 sm:w-9">
                <a href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 sm:w-9 h-full flex justify-center items-center gap-2"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="m-0 text-white/80 hover:text-black h-8 w-8 sm:h-9 sm:w-9">
                <a href={social.itch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 sm:w-9 h-full flex justify-center items-center gap-2"
                >
                  <Gamepad2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="m-0 text-white/80 hover:text-black h-8 w-8 sm:h-9 sm:w-9">
                <a href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 sm:w-9 h-full flex justify-center items-center gap-2"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="m-0 text-white/80 hover:text-black h-8 w-8 sm:h-9 sm:w-9">
                <a href="#contact"
                  rel="noopener noreferrer"
                  className="w-8 sm:w-9 h-full flex justify-center items-center gap-2"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-white/80 hover:text-green-400">
                  <Menu className="w-8 h-8" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-zinc-900 border-green-500/20 w-[250px] sm:w-[300px]">
                <div className="flex flex-col h-full">
                  <div className="py-6 border-b border-green-500/20">
                    <h3 className="text-lg font-semibold text-green-500 mb-1">Inti Fernández</h3>
                    <p className="text-sm text-white/60">Gameplay Programmer</p>
                  </div>

                  <nav className="flex flex-col gap-1 py-6">
                    <a
                      href="#home"
                      className="flex items-center gap-3 px-2 py-2 text-white/80 hover:text-green-400 hover:bg-white/5 rounded-md transition"
                    >
                      <Home className="w-4 h-4" />
                      <span>Home</span>
                    </a>
                    <a
                      href="#games"
                      className="flex items-center gap-3 px-2 py-2 text-white/80 hover:text-green-400 hover:bg-white/5 rounded-md transition"
                    >
                      <Gamepad2 className="w-4 h-4" />
                      <span>Games</span>
                    </a>
                    <a
                      href="#skills"
                      className="flex items-center gap-3 px-2 py-2 text-white/80 hover:text-green-400 hover:bg-white/5 rounded-md transition"
                    >
                      <Code2 className="w-4 h-4" />
                      <span>Skills</span>
                    </a>
                    <a
                      href="#education"
                      className="flex items-center gap-3 px-2 py-2 text-white/80 hover:text-green-400 hover:bg-white/5 rounded-md transition"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Education</span>
                    </a>
                    <a
                      href="#contact"
                      className="flex items-center gap-3 px-2 py-2 text-white/80 hover:text-green-400 hover:bg-white/5 rounded-md transition"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Contact</span>
                    </a>
                  </nav>

                  <div className="mt-auto py-6 border-t border-green-500/20">
                    <Button className="px-0 py-0 w-full flex bg-green-500 hover:bg-green-200 text-black">
                      <a href={social.cv}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center w-full h-full"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Resume
                      </a>
                    </Button>
                    <div className="flex justify-center gap-4 mt-4">
                      <Button variant="ghost" size="icon" className="text-white/80 hover:bg-green-500 hover:text-black h-9 w-9">
                        <a href={social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 sm:w-9 h-full flex justify-center items-center gap-2"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" className="text-white/80 hover:bg-green-500 hover:text-black h-9 w-9">
                        <a href={social.itch}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 sm:w-9 h-full flex justify-center items-center gap-2"
                        >
                          <Gamepad2 className="w-5 h-5" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" className="text-white/80 hover:bg-green-500 hover:text-black h-9 w-9">
                        <a href={social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 sm:w-9 h-full flex justify-center items-center gap-2"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" className="text-white/80 hover:bg-green-500 hover:text-black h-9 w-9">
                        <a href="#contact"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 sm:w-9 h-full flex justify-center items-center gap-2"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <section id="home" className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
            <div className="md:w-2/3 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="text-green-500">Gameplay</span> and <span className="text-green-500">Mechanics</span>{" "}
                Programmer
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
                I specialize in creating engaging gameplay experiences, although I'm adaptable to other areas. I enjoy
                solving problems by writing neat and clean code.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <Button className="bg-green-500 hover:bg-green-200 text-black px-0 py-0">
                  <a href="#games"
                    className="px-4 py-2 w-full sm:w-auto">
                    See My Work
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  className="px-0 py-0 border border-green-500 text-green-500 hover:bg-green-600 hover:text-black w-full sm:w-auto"
                >
                  <a href="#contact"
                    className="px-4 py-2 w-full sm:w-auto">
                    Contact Me
                  </a>
                </Button>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-green-500/30 shadow-lg shadow-green-500/20">
                <Image
                  src={social.picture}
                  alt="Inti Fernández"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      {games && Object.keys(games).length > 0 ? (
        <section id="games" className="py-16 sm:py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center md:text-left">
              <span className="text-green-500">Games</span> I've Created
            </h2>
            <p className="text-white/60 mb-8 sm:mb-12 text-center md:text-left">
              Check out some of my game development projects
            </p>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Game Cards */}
              {Object.entries(games).map(([slug, game]) => (
                <Card key={slug} className="bg-zinc-900/80 border-green-500/20 overflow-hidden hover:border-green-500/50 transition group">
                  <Link href={`/games/${slug}`} passHref>
                    <div className="relative h-48 sm:h-60 overflow-hidden">
                      <Image
                        src={`${game.picture}?height=240&width=600`}
                        alt={game.title}
                        width={600}
                        height={240}
                        className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                      />
                    </div>
                    <CardHeader className="p-4 sm:p-6">
                      <CardTitle className="text-green-500 text-xl sm:text-2xl">{game.title}</CardTitle>
                      {Array.isArray(game.cardDescription) ? (
                        game.cardDescription.map((desc, index) => (
                          <CardDescription className="text-white/70 text-sm sm:text-base" key={index}>
                            <span dangerouslySetInnerHTML={{ __html: desc }} />
                          </CardDescription>
                        ))
                      ) : (
                        <CardDescription className="text-white/70 text-sm sm:text-base">
                          {game.cardDescription}
                        </CardDescription>
                      )}
                    </CardHeader>
                  </Link>
                  <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 p-4 sm:p-6">
                    <Badge variant="outline" className="text-xs sm:text-sm">
                      {game.type}
                    </Badge>
                    <Button variant="ghost" size="sm" className="text-green-500 hover:text-primary-foreground">
                      <a href={game.links.page} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4 mr-2" /> Play
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Skills Section */}
      {skills && Object.keys(skills).length > 0 ? (
        <section id="skills" className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center md:text-left">
              <span className="text-green-500">Skills</span> & Expertise
            </h2>
            <p className="text-white/60 mb-8 sm:mb-12 text-center md:text-left">Technologies and tools I work with</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <SkillCard key={category} title={category} items={items} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Education Section */}
      {games && Object.keys(games).length > 0 ? (
        <section id="education" className="py-16 sm:py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center md:text-left">
              <span className="text-green-500">Education</span> & Certifications
            </h2>
            <p className="text-white/60 mb-8 sm:mb-12 text-center md:text-left">
              My academic background and professional development
            </p>

            <div className="space-y-6">
              {/* Education Items */}
              {Object.entries(education).map(([slug, edu]) => (
                <a
                  key={slug}
                  href={edu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-zinc-900/80 border border-green-500/20 rounded-lg p-4 sm:p-6 hover:border-green-500/50 transition hover:bg-zinc-900/90 no-underline"
                >
                  <div className="flex flex-col md:flex-row gap-4 md:items-center">
                    <div className="md:w-1/5 flex justify-center">
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden border border-green-500/30">
                        <Image
                          src={`${edu.picture}?height=96&width=96`}
                          alt="University Logo"
                          width={96}
                          height={96}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/5">
                      <div className="bg-black/30 p-3 rounded-md inline-block">
                        <span className="text-green-500 font-bold text-lg sm:text-xl">{edu.date}</span>
                      </div>
                    </div>
                    <div className="md:w-3/5">
                      <h3 className="text-xl font-semibold mb-1">{edu.title}</h3>
                      <h4 className="text-green-400 mb-3">{edu.institute}</h4>
                      <p className="text-white/80 text-sm sm:text-base">
                        <span dangerouslySetInnerHTML={{ __html: edu.description }} />
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center md:text-left">
            <span className="text-green-500">Contact</span> Me
          </h2>
          <p className="text-white/60 mb-8 sm:mb-12 text-center md:text-left">
            Interested in working together? Let's connect!
          </p>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
            <div className="space-y-6 order-2 md:order-1">
              <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                Feel free to reach out through any of the methods below.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <a href="mailto:intifernandez2004@gmail.com" className="flex gap-3 items-center">
                    <Mail className="text-green-500 w-5 h-5 flex-shrink-0" />
                    <span className="text-white/80 text-sm sm:text-base pt-0.5 break-all"><span className="text-green-500"><b>Mail:</b></span> intifernandez2004@gmail.com</span>
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <a href={social.linkedin} target="_blank" className="flex gap-3 items-center">
                    <Linkedin className="text-green-500 w-5 h-5 flex-shrink-0" />
                    <span className="text-white/80 text-sm sm:text-base pt-0.5 break-all"><span className="text-green-500"><b>LinkedIn:</b></span> Inti Ferández Paz</span>
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <a href={social.github} target="_blank" className="flex gap-3 items-center">
                    <Github className="text-green-500 w-5 h-5 flex-shrink-0" />
                    <span className="text-white/80 text-sm sm:text-base pt-0.5 break-all"><span className="text-green-500"><b>GitHub:</b></span> TEXADeveloper</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/80 p-4 sm:p-6 rounded-lg border border-green-500/20 order-1 md:order-2">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-white/80 text-sm">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-black/50 border border-green-500/30 rounded p-2 text-white focus:border-green-500 focus:outline-none text-sm sm:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-white/80 text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-black/50 border border-green-500/30 rounded p-2 text-white focus:border-green-500 focus:outline-none text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-white/80 text-sm">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-black/50 border border-green-500/30 rounded p-2 text-white focus:border-green-500 focus:outline-none text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-white/80 text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-black/50 border border-green-500/30 rounded p-2 text-white focus:border-green-500 focus:outline-none text-sm sm:text-base"
                  ></textarea>
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-200 text-black">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="sm:py-5 border-t border-green-500/20">
      </footer>
    </div>
  )
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="bg-zinc-900/80 border-green-500/20">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-green-500 text-lg sm:text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></span>
              <span className="text-white/80 text-sm sm:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
