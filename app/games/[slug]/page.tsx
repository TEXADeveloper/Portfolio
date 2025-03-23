import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Github, ExternalLink, Gamepad2, Calendar, Users, Code, Clock, User, Puzzle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";

function getGames() {
  const filePath = path.join(process.cwd(), "public/info/games.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileData);
}

export default async function GameDetail({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const games = await getGames(); 
  const gameData = games[slug];

  if (!gameData) {
    return notFound();
  }


  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="fixed w-full bg-black/80 backdrop-blur-sm z-50 border-b border-green-500/20">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-green-500 font-bold text-lg sm:text-xl hover:text-green-400 transition">
              Inti Fernández
            </Link>
            <Badge variant="outline" className="text-green-400 border-green-500/50 hidden sm:inline-flex">
              Programmer
            </Badge>
          </div>

          <Link
            href="/#games"
            className="flex items-center gap-2 text-white/80 hover:text-green-400 transition text-sm sm:text-base"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back To Games</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-8">
        <div className="container mx-auto px-4">
          <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
            <Image
              src={`${gameData.picture}?height=400&width=120`}
              alt={gameData.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 p-4 sm:p-6 z-20">
              <Badge className="mb-2 bg-green-500 text-black">{gameData.type}</Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">{gameData.title}</h1>
              <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl">{gameData.tagline}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="md:w-2/3">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full grid grid-cols-3 bg-zinc-900/80 border border-green-500/20">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="mt-6">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-green-500">About the Game</h2>
                      {Array.isArray(gameData.gameDescription) ? (
                        gameData.gameDescription.map((desc, index) => (
                          <>
                            <p className="text-white/80 text-sm sm:text-base leading-relaxed" key={index}>
                              <span dangerouslySetInnerHTML={{ __html: desc }} />
                            </p>
                            {index !== gameData.gameDescription.length - 1 && <br />}
                          </>
                        ))
                      ) : (
                        <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                          {gameData.gameDescription}
                        </p>
                      )}
                    
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-zinc-900/80 border border-green-500/20 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Calendar className="text-green-500 w-5 h-5" />
                          <h3 className="font-medium">Release Date</h3>
                        </div>
                        <p className="text-white/80 text-sm pb-4">{gameData.date}</p>

                        <div className="flex items-center gap-2 mb-3">
                          <Clock className="text-green-500 w-5 h-5" />
                          <h3 className="font-medium">Dedicated Time</h3>
                        </div>
                        <p className="text-white/80 text-sm pb-1">{gameData.time}</p>
                      </div>

                      <div className="bg-zinc-900/80 border border-green-500/20 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Users className="text-green-500 w-5 h-5" />
                          <h3 className="font-medium">Team</h3>
                        </div>
                        <ul className="text-white/80 text-sm space-y-1">
                          {gameData.team.map((member, index) => (
                            <li key={index}>{member}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-zinc-900/80 border border-green-500/20 rounded-lg p-4 sm:col-span-2">
                        <div className="flex items-center gap-2 mb-3">
                          <Code className="text-green-500 w-5 h-5" />
                          <h3 className="font-medium">Technologies</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {gameData.technologies.map((tech, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Features Tab */}
                <TabsContent value="features" className="mt-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-green-500">Game Features</h2>
                    <ul className="space-y-4">
                      {gameData.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 bg-zinc-900/80 border border-green-500/20 rounded-lg p-4"
                        >
                          <span className="w-6 h-6 rounded-full bg-green-500 text-black flex items-center justify-center flex-shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          <p className="text-white/80 text-sm sm:text-base">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                {/* Gallery Tab */}
                <TabsContent value="gallery" className="mt-6">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-green-500">Screenshots</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {gameData.screenshots.map((screenshot, index) => (
                      <Card key={index} className="bg-zinc-900/80 border-green-500/20 overflow-hidden">
                        <CardContent className="p-0">
                          <div className="relative aspect-video">
                            <Image
                              src={`${screenshot || "/placeholder.svg"}?height=400&width=600`}
                              alt={`${gameData.title} screenshot ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="md:w-1/3">
              <div className="bg-zinc-900/80 border border-green-500/20 rounded-lg p-4 sm:p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4 text-green-500">Play the Game</h2>

                <div className="space-y-4">
                  <Button className="w-full bg-green-500 hover:bg-green-200 text-black flex items-center gap-2">
                    <a href={gameData.links.page} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Gamepad2 className="w-4 h-4" />
                      Game Page
                    </a>
                  </Button>

                  <Button variant="ghost" className="border px-2.5 border-green-500/20 text-green-500 hover:text-zinc-900/80 hover:bg-green-600 w-full flex items-center gap-2">
                    <a href={gameData.links.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      View Source
                    </a>
                  </Button>

                  <div className="pt-4 border-t border-green-500/20">
                    <h3 className="text-lg font-medium mb-2">Project Details</h3>
                    <div className="flex gap-2 mb-3">
                      <User className="text-green-500 w-5 h-5" />
                      <p className="text-white/80 text-m"><span className="text-white/100 text">Role:</span> {gameData.role}</p>
                    </div>
                    <div className="flex gap-2">
                      <Puzzle className="text-green-500 w-5 h-5" />
                      <p className="text-white/80 text-m"><span className="text-white/100">Genere:</span> {gameData.genere}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Games */}
      {games && Object.keys(games).length > 1 ? (
      <section className="py-12 sm:py-16 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-green-500">More Games</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Related Game Card */}
              {Object.entries(games)
                .filter(([slug, thisGame]) => thisGame !== gameData)
                .sort(() => Math.random() - 0.5)
                .slice(0, 3)
                .map(([slug, thisGame]) => (
                  <Card key={slug} className="bg-zinc-900/80 border-green-500/20 overflow-hidden hover:border-green-500/50 transition group">
                    <Link href={`/games/${slug}`} passHref>
                      <div className="relative h-40 overflow-hidden">
                        {/* Unique key error here */}
                        <Image
                          src={`${thisGame.picture}?height=160&width=320`}
                          alt={thisGame.title}
                          width={320}
                          height={160}
                          className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                        />
                      </div>
                    </Link>
                    <div className="p-4">
                      <Link href={`/games/${slug}`} passHref>
                        <h3 className="text-green-500 font-medium mb-1">{thisGame.title}</h3>
                        <p className="text-white/70 text-sm line-clamp-2 mb-3">
                          {thisGame.tagline}
                        </p>
                      </Link>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline" className="text-xs">
                          {thisGame.type}
                        </Badge>
                        <Button asChild variant="ghost" size="sm" className="h-8 px-0 text-green-500 hover:text-primary-foreground">
                          <a href={thisGame.links.page} target="_blank" rel="noopener noreferrer" className="flex h-8 px-2 gap-0 items-center">
                            <ExternalLink className="w-4 h-4 mr-2" /> Play
                          </a>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
          </div>
        </div>
      </section>
      ) : null }

      {/* Footer */}
      <footer className="py-6 sm:py-8 border-t border-green-500/20"> </footer>
    </div>
  )
}

