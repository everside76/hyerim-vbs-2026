import Hero from './components/Hero'
import About from './components/About'
import Program from './components/Program'
import Schedule from './components/Schedule'
import Info from './components/Info'
import { useScrollFadeUp } from './hooks/useScrollFadeUp'

export default function App() {
  useScrollFadeUp()

  return (
    <>
      <Hero />
      <main>
        <About />
        <Program />
        <Schedule />
        <Info />
      </main>
    </>
  )
}
