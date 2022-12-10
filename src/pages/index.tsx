import Header from "../components/header/header"
import Hero from "../components/hero/hero"
import  styles  from "../styles/Home.module.scss"

export default function Home() {
  return (
    <div className={styles.content}>
      <Header />
      <Hero />
    </div>
  )
}
