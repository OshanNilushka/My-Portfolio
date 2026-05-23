import { Home } from "./pages/Home";
import { Toaster } from "./Components/ui/toaster";
import { ToastProvider } from "./Components/ui/toast";

function App() {
  return (
    <ToastProvider>
      <Toaster />
      <Home />
    </ToastProvider>
  )
}

export default App
