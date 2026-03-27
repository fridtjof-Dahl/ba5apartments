import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import ApartmentShowcase from '@/components/ApartmentShowcase'
import Testimonials from '@/components/Testimonials'
import BookingSection from '@/components/BookingSection'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <ApartmentShowcase />
      <Testimonials />
      <BookingSection />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
