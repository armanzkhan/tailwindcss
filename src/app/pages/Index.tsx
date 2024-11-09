import About from "@/components/About"
import Intro from "@/components/Intro"
import Projects from "@/components/Projects"
import { headerItems } from "@/constants/Constant"
import { FC } from "react"

const Index:React.FC = () => {
  return (
    <section >
      <div className="lg:mx-32 md:mx-4">
        <Intro />
        <About />
        <Projects />
      </div>
    
    </section>
    
  )
}

export default Index