import Navbar from "../../components/landingpage/Navbar"
import Hero from "../../components/landingpage/Hero"
import Features from "../../components/landingpage/Features"
import HowItWorks from "../../components/landingpage/HowItWorks"
import Review from "../../components/landingpage/Review"
import CTA from "../../components/landingpage/CTA"
import Footer from "../../components/landingpage/Footer"

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Review />
      <CTA />
      <Footer />
    </>
  )
}

export default LandingPage
