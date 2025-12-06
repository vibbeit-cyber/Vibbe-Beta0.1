import VibbeCoins from "@/assets/Vibbe Coins.png";
import VibbeWhite from "@/assets/Vibbe White text logo 1.png";
import React from "react";

/**
 * CryptoRewards
 * - Mobile (< md): simple stacked layout
 * - Desktop (>= md): pixel-perfect absolute layout with reserved spacer
 */
const CryptoRewards = () => {
  return (
    <section className="relative w-full bg-[hsl(var(--dark-section))] text-white">
      {/* ===== MOBILE LAYOUT (smaller screens) ===== */}
      <div className="block md:hidden w-full py-12 px-6">
        <div className="max-w-xl mx-auto flex flex-col gap-6">
          {/* Heading */}
          <h2
            className="
              text-left
              text-[2rem]               /* ~32px */
              sm:text-[2.25rem]         /* ~36px if sm exists on some devices */
              font-bold leading-tight
            "
          >
            Earn Rewards in <br /> Crypto
          </h2>

          {/* Text */}
          <p className="text-[1rem] leading-relaxed text-white/90">
            Build on Blockchain, Vibbe rewards all users in Vibbe Tokens which
            could be converted to Crypto-coins on your preferred crypto wallet.
          </p>

          {/* Icons row */}
          <div className="flex items-center justify-between gap-4 mt-2">
            <img src={VibbeCoins} alt="Vibbe coins" className="h-10" />
            <img src={VibbeWhite} alt="Vibbe" className="h-8 opacity-90" />
          </div>
      </div>
</div>
      {/* ===== DESKTOP / WEB LAYOUT (md and up) ===== */}
      <div className="hidden md:block">
        {/* Main artboard container: center to match Figma (change 1440 if your artboard differs) */}
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-0">
          {/* Wrapper that contains absolute-positioned elements on desktop */}
          <div className="relative">
            {/* HEADING: pixel-perfect on md+ */}
            <div
              className="
                w-full md:w-[445px] h-auto md:h-[94px]
                mb-8 md:mb-0
                md:absolute md:left-[90px] md:top-[70px]
                z-20
              "
              aria-hidden={false}
            >
              <h2 className="text-[1.875rem] sm:text-[2.25rem] md:text-[3rem] font-bold leading-tight">
                Earn Rewards in <br /> Crypto
              </h2>
            </div>

            {/* INNER DARK CARD: pixel-perfect box on md+ */}
            <div
              className="
                w-full md:w-[714px] h-auto md:h-[392px]
                bg-[rgba(0,0,0,0.35)]
                md:backdrop-blur-sm
                md:rounded-[32px] overflow-hidden
                p-6 md:p-0
                md:absolute md:left-[606px] md:top-[80px]
                box-border
                z-10
              "
              role="region"
              aria-label="Vibbe crypto rewards panel"
            >
              {/* Use a relative container so child absolute placements use this as origin */}
              <div className="relative w-full h-full md:p-0 md:pl-0 md:pr-0">
                {/* Paragraph block — positioned inside the card (pixel offsets from card top-left) */}
                <div className="w-full md:w-[360px] md:absolute md:left-[32px] md:top-[32px]">
                  <p className="text-base md:text-lg leading-relaxed text-white/90">
                    Build on Blockchain, Vibbe rewards all users in Vibbe Tokens which
                    could be converted to Crypto-coins on your preferred crypto wallet.
                  </p>
                </div>

                {/* Coins (bottom-left inside the card) */}
                <img
                  src={VibbeCoins}
                  alt="Vibbe coins"
                  className="hidden md:block md:absolute md:left-[24px] md:bottom-[24px] h-12 md:h-14"
                  aria-hidden={false}
                />

                {/* Vibbe logo (bottom-right inside the card) */}
                <img
                  src={VibbeWhite}
                  alt="Vibbe"
                  className="hidden md:block md:absolute md:right-[24px] md:bottom-[24px] h-8 md:h-12 opacity-90"
                />
              </div>
            </div>
</div>
          {/* Spacer to prevent overlap with next sections on desktop */}
          <div className="hidden md:block md:h-[560px]" />
        </div>
      </div>
    </section>
  );
};

export default CryptoRewards;