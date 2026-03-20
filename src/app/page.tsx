import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import ApartmentShowcase from '@/components/ApartmentShowcase'
import Neighborhoods from '@/components/Neighborhoods'
import Testimonials from '@/components/Testimonials'
import Activities from '@/components/Activities'
import BookingSection from '@/components/BookingSection'
import CompanyAgreements from '@/components/CompanyAgreements'
import RentOut from '@/components/RentOut'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <ApartmentShowcase />
      <BookingSection />
      <Neighborhoods />
      <Testimonials />
      <Activities />
      <CompanyAgreements />
      <RentOut />
      <Contact />
      <Footer />
    </main>
  )
}
