import { ClientsSection } from "./components/ClientsSection/ClientsSection"
import { CounterSection } from "./components/CounterSection/CounterSection"
import { HeaderComp } from "./components/header"
import { LatestNewsSection } from "./components/LatestNewsSection/LatestNewsSection"
import { ServicesSection } from "./components/ServicesSection/ServicesSection"
import { Slider } from "./components/Slider"
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
    </>
  )
}

export default App
