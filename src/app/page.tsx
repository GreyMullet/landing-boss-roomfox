import Hero from '@/components/Hero'
import StickyNav from '@/components/StickyNav'
import StatsBar from '@/components/StatsBar'
import Features from '@/components/Features'
import InteractiveDemo from '@/components/InteractiveDemo'
import SavingsCalculator from '@/components/SavingsCalculator'
import Comparison from '@/components/Comparison'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import SeoContent from '@/components/SeoContent'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function Home(){
    return(
        <main>
            <StickyNav />
            <Hero />
            <StatsBar />

            <RevealOnScroll><Features /></RevealOnScroll>
            <RevealOnScroll><InteractiveDemo /></RevealOnScroll>
            <RevealOnScroll><SavingsCalculator /></RevealOnScroll>
            <RevealOnScroll><Comparison /></RevealOnScroll>
            <RevealOnScroll><HowItWorks /></RevealOnScroll>
            <RevealOnScroll><Testimonials /></RevealOnScroll>
            <RevealOnScroll><SeoContent /></RevealOnScroll>
            <RevealOnScroll><Pricing /></RevealOnScroll>

            <FAQ />
            <CTA />
            <Footer />
        </main>
    )
}