import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const BetaSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Beta signup:", email);
  };

  return (
    <section className="w-full py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-32 items-start">
          {/* Heading - Left side with fixed width */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Be the First <br />
              to be a <span className="lobster">Vibber</span>
            </h2>
          </div>

          {/* Card - Right side with full remaining width */}
          <div>
            <Card
              className="
                border-2 rounded-3xl bg-white
                px-16 pt-12 pb-14
                shadow-sm
                w-full
              "
            >
              {/* CONTENT WRAPPER */}
              <div className="w-full">
                {/* Paragraph */}
                <p className="text-base text-foreground/80 leading-relaxed mb-16">
                  Vibbe is soon to be available for developers,<br />
                  creators, and Beta users. Take part in our<br />
                  grand launch.
                </p>

                {/* Label */}
                <label className="text-sm text-foreground/80 block mb-3">
                  Join our Beta team.
                </label>

                {/* Input + Button Row */}
                <form onSubmit={handleSubmit} className="w-full">
                  <div
                    className="
                      flex w-full
                      bg-white border border-gray-300
                      rounded-full overflow-hidden
                      items-center
                    "
                  >
                    {/* INPUT - increased width significantly */}
                    <Input
                      type="email"
                      placeholder="Submit your Email ID"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="
                        flex-[4]
                        border-none shadow-none
                        px-8 py-5
                        text-sm
                        focus-visible:ring-0
                      "
                    />

                    {/* BUTTON */}
                    <Button
                      type="submit"
                      className="
                        bg-vibbe-pink hover:bg-vibbe-pink/90
                        text-white text-sm font-medium
                        rounded-full
                        px-8 py-5
                        whitespace-nowrap
                        flex-shrink-0
                      "
                    >
                      Try Vibbe Beta
                    </Button>
                  </div>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetaSignup;