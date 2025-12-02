import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PrivacyFeatures from "@/components/PrivacyFeatures";
import CryptoRewards from "@/components/CryptoRewards";
import SocialScore from "@/components/SocialScore";
import BetaSignup from "@/components/BetaSignup";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PrivacyFeatures />
      <CryptoRewards />
      <SocialScore />
      <BetaSignup />
      <Footer />
    </div>
  );
};

export default Index;
