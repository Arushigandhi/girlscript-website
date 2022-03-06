import styles from '../styles/Home.module.scss'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import About from '../components/About'
import Team from '../components/Team'
import Community from '../components/Community'
import Faq from '../components/faq'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar/>
      <Hero/>
      <About/>
      <Team/>
      <Community/>
      <Faq/>
      <Footer/>
    </div>
  )
}
