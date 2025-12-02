import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const BetaSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle beta signup
    console.log("Beta signup:", email);
  };

  return (
    <section className="w-full py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Be the First<br />
              to be a <span className="italic lobster">Vibber</span>
            </h2>
          </div>
          
          <Card className="p-8 border-2">
            <p className="mb-6 text-foreground/80">
              Vibbe is soon to available for developers, creators, and Beta users. Take part in our grand launch.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-foreground/70 mb-2 block">
                  Join our Beta team.
                </label>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email ID"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                    required
                  />
                  <Button 
                    type="submit"
                    className="bg-vibbe-pink hover:bg-vibbe-pink/90 text-white rounded-full px-6"
                  >
                    Try Vibbe Beta
                  </Button>
                </div>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BetaSignup;
