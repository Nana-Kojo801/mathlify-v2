import { createFileRoute } from '@tanstack/react-router'
import AnimatedBackground from './-components/animated-background'
import Header from './-components/header'
import HeroSection from './-components/sections/hero-section'
import GameModes from './-components/sections/game-modes'
import Features from './-components/sections/features'
import Testimonials from './-components/sections/testimonials'
import CtaSection from './-components/sections/cta-section'
import Footer from './-components/footer'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col overflow-hidden">
      {/* Animated background elements */}
      <AnimatedBackground />

      <div className="relative z-10">
        <Header />
        <HeroSection />
        <GameModes />
        <Features />
        <Testimonials />
        <CtaSection />
        <Footer />
      </div>
    </div>
  )
}
