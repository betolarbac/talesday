import Header from "../components/header/header"
import Hero from "../components/hero/hero"
import HomePost from "../components/home/home"
import  styles  from "../styles/Home.module.scss"

export default function Home() {
  return (
    <div >
      <div className={styles.content}>
      <Header />
      <Hero />
      </div>
      <HomePost />
    </div>
  )
}
