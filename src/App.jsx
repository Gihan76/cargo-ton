import { ClientsSection } from "./components/ClientsSection/ClientsSection"
import { CounterSection } from "./components/CounterSection/CounterSection"
import { Footer } from "./components/FooterSection/Footer"
import { HeaderComp } from "./components/HeaderSection/Header"
import { LatestNewsSection } from "./components/LatestNewsSection/LatestNewsSection"
import { ServicesSection } from "./components/ServicesSection/ServicesSection"
import { Slider } from "./components/HeaderSection/Slider"
import { TestimoniolCombinedSection } from "./components/TestimoniolCombinedSection"
import { WelcomeSection } from "./components/WelcomeSection/WelcomeSection"

function App() {
  return (
    <>
      <HeaderComp />
      <Slider />
      <WelcomeSection />
      <ServicesSection />
      <CounterSection />
      <TestimoniolCombinedSection />
      <ClientsSection />
      <LatestNewsSection />
      <Footer />
    </>
  )
}

export default App
