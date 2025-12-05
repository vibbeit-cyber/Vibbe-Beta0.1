import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/privacypolicy";
import TermsPage from "./pages/TermsAndServices";
import CancellationPolicyPage from "./pages/cancellation";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
<Routes>
<Route path="/" element={<Index />} />
<Route path="/privacypolicy" element={<PrivacyPolicy />} />
<Route path="/terms" element={<TermsPage />} />
<Route path="/cancellation" element={<CancellationPolicyPage />} /> 
<Route path="*" element={<NotFound />} />
</Routes>



      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
