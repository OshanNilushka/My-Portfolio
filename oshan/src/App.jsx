import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Home } from "./pages/Home";
import { IntroScreen } from "./Components/IntroScreen";
import { Toaster } from "./Components/ui/toaster";
import { ToastProvider } from "./Components/ui/toast";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <ToastProvider>
      <Toaster />
      <AnimatePresence mode="wait">
        {showIntro && (
          <IntroScreen key="intro" onFinish={() => setShowIntro(false)} />
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Home />
      </motion.div>
    </ToastProvider>
  );
}

export default App;
