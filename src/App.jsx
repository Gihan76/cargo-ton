import { CounterSection } from "./components/CounterSection/CounterSection"
import { HeaderComp } from "./components/header"
import { ServicesSection } from "./components/ServicesSection/ServicesSection"
import { Slider } from "./components/Slider"
import { WelcomeSection } from "./components/WelcomeSection/WelcomeSection"

function App() {
  return (
    <>
      <HeaderComp />
      <Slider />
      <WelcomeSection />
      <ServicesSection />
      <CounterSection />
    </>
  )
}

export default App
