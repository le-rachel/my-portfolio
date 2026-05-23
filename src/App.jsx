import styles from './App.module.css' // way to import styles from css modules (use as variables so use ={styles.className} )
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from './components/About/About';

function App() {
  return (
  <div className={styles.App}>
    <Hero />
    <Navbar />
    <About />
  </div>
)}

export default App
