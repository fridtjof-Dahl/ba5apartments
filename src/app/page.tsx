import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Features from '@/components/Features'
import Stats from '@/components/Stats'
import ApartmentShowcase from '@/components/ApartmentShowcase'
import MapSection from '@/components/MapSection'
import PhotoGallery from '@/components/PhotoGallery'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import BookingSection from '@/components/BookingSection'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Stats />
      <ApartmentShowcase />
      <MapSection />
      <PhotoGallery />
      <Testimonials />
      <FAQ />
      <BookingSection />
      <Contact />
      <Footer />
    </main>
  )
}
