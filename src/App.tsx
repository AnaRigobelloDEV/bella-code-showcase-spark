
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/tattoo/Header";
import Home from "./pages/Home";
import Tatuadores from "./pages/Tatuadores";
import Cursos from "./pages/Cursos";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import WhatsappButton from "@/components/ui/WhatsappButton";
import WhatsappPopup from "./components/ui/WhatsappPopup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tatuadores" element={<Tatuadores />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
      <WhatsappButton />
      <WhatsappPopup />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
