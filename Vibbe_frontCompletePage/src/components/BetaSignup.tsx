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
    <section className="w-full py-16 sm:py-20 md:py-28 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* 3-column layout on md+ to match SocialScore responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 items-start">

          {/* HEADING LEFT */}
          <div className="md:col-span-1">
            <h2
              className="
                text-left font-bold leading-tight
                text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.25rem]
                mb-8 md:mb-0
              "
            >
              Be the First <br />
              to be a <span className="lobster">Vibber</span>
            </h2>
          </div>

          {/* CARD RIGHT */}
          <div className="md:col-span-2 w-full">
            <Card
              className="
                w-full bg-white border-2 rounded-3xl shadow-sm
                px-8 py-10 sm:px-12 sm:py-14
                lg:px-16 lg:py-16
                box-border
              "
            >

              {/* CONTENT WRAPPER */}
              <div className="w-full max-w-2xl">

                {/* Paragraph */}
                <p
                  className="
                    text-base sm:text-lg text-foreground/80 leading-relaxed
                    mb-10 sm:mb-12 lg:mb-14
                    max-w-lg
                  "
                >
                  Vibbe is soon to be available for developers, <br /> creators, and
                  Beta users. Take part in our <br /> grand launch.
                </p>

                {/* Label */}
                <label
                  className="
                    text-sm text-foreground/80 block
                    mb-3 sm:mb-4 lg:mb-5
                  "
                >
                  Join our Beta team.
                </label>

                {/* INPUT + BUTTON */}
                <form onSubmit={handleSubmit} className="w-full">
                  <div
                    className="
                      flex w-full bg-white border border-gray-300
                      rounded-full overflow-hidden items-center
                    "
                  >
                    {/* INPUT */}
                    <Input
                      type="email"
                      placeholder="Enter your Email ID"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="
                        flex-1 border-none shadow-none
                        px-6 py-4 sm:px-8 sm:py-5
                        text-sm sm:text-base
                        focus-visible:ring-0
                      "
                    />

                    {/* BUTTON */}
                    <Button
                      type="submit"
                      className="
                        bg-vibbe-pink hover:bg-vibbe-pink/90
                        text-white text-sm sm:text-base font-medium
                        rounded-full
                        px-6 py-3 sm:px-8 sm:py-4
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
