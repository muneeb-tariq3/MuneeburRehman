import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Blog from "./components/Blog";

function AnimatedRoutes() {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, y: 12 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: {
      opacity: 0,
      y: -8,
      transition: { duration: 0.3, ease: [0.55, 0.055, 0.675, 0.19] },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Home /></motion.div>} />
        <Route path="/about" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><About /></motion.div>} />
        <Route path="/skills" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Skills /></motion.div>} />
        <Route path="/projects" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Projects /></motion.div>} />
        <Route path="/education" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Education /></motion.div>} />
        <Route path="/blog" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Blog /></motion.div>} />
        <Route path="/contact" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Contact /></motion.div>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        
        {/* Global Background */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 obsidian-grid opacity-40" />
          <div className="absolute top-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl" />
        </div>

        {/* CHANGED: Added flex, flex-col, and min-h-screen here to make a vertical column layout */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />

          {/* CHANGED: Wrapped AnimatedRoutes in a main tag with flex-1 to claim all remaining empty space */}
          <main className="flex-1">
            <AnimatedRoutes />
          </main>

          <Footer />
        </div>

      </div>
    </Router>
  );
}

export default App;