import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./Components/ui/toaster";
import { ToastProvider } from "./Components/ui/toast";

function App() {
  return (
    <ToastProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  )
}

export default App
