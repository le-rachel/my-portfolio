import styles from './App.module.css' // way to import styles from css modules (use as variables so use ={styles.className} )
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
  <div className={styles.App}>
    <Hero />
    <Navbar />
    <About />
    <Projects />
    <Contact />
    <Footer />
    <Analytics />
    <SpeedInsights />
  </div>
)}

export default App
