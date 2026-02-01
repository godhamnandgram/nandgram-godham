import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ScrollToTop from '@/components/ScrollToTop';


import Home from "./pages/Home";
import Experiences from "./pages/Experiences";
import About from "./pages/About";
import PlanVisit from "./pages/PlanVisit";
import Facilities from "./pages/Facilities";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Experience sub-pages
import PicCity from "./pages/experiences/PicCity";
import Gautirth from "./pages/experiences/Gautirth";
import AapleGaon from "./pages/experiences/AapleGaon";
import Gaushala from "./pages/experiences/Gaushala";
import CarnivalStreet from "./pages/experiences/CarnivalStreet";
import BoatingPoint from "./pages/experiences/BoatingPoint";
import Shauryavan from "./pages/experiences/Shauryavan";
import PixoPark from "./pages/experiences/PixoPark";
import SwimmingPool from "./pages/experiences/SwimmingPool";
import Waterpark from "./pages/experiences/Waterpark";
import TentsCottages from "./pages/experiences/TentsCottages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experiences" element={<Experiences />} />
            {/*<Route path="/experiences/pic-city" element={<PicCity />} />
            <Route path="/experiences/gautirth" element={<Gautirth />} />
            <Route path="/experiences/aaple-gaon" element={<AapleGaon />} />
            <Route path="/experiences/gaushala" element={<Gaushala />} />
            <Route path="/experiences/carnival-street" element={<CarnivalStreet />} />
            <Route path="/experiences/boating-point" element={<BoatingPoint />} />
            <Route path="/experiences/shauryavan" element={<Shauryavan />} />
            <Route path="/experiences/pixo-park" element={<PixoPark />} />
            <Route path="/experiences/swimming-pool" element={<SwimmingPool />} />
            <Route path="/experiences/waterpark" element={<Waterpark />} />
            <Route path="/experiences/tents-cottages" element={<TentsCottages />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/plan-your-visit" element={<PlanVisit />} />
            {/* <Route path="/facilities" element={<Facilities />} /> */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;