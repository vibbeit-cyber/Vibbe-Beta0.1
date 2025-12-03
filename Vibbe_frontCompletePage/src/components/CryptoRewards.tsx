import VibbeCoins from "@/assets/Vibbe Coins.png";
import VibbeWhite from "@/assets/Vibbe White text logo 1.png";

const CryptoRewards = () => {
  return (
    <section className="relative w-full bg-[hsl(var(--dark-section))] text-white py-24 px-6">

      {/* CENTERED CONTAINER */}
      <div className="max-w-5xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* LEFT: HEADING */}
{/* CENTERED CONTENT BLOCK WITH LEFT BIAS ON DESKTOP */}
<div className="max-w-4xl mx-auto md:ml-0 flex flex-col gap-16">

  {/* LEFT: HEADING */}
  <h2 className="text-4xl md:text-5xl font-bold leading-tight text-left">
    Earn Rewards in <br /> Crypto.
  </h2>

  {/* rest of content... */}

</div>


          {/* RIGHT: PARAGRAPH + INLINE ICONS */}
          <div className="flex flex-col w-full">

            {/* TEXT */}
            <p className="text-lg leading-relaxed text-white/90 mb-8 max-w-sm text-left md:text-left mx-auto md:mx-0">
              Build on Blockchain, Vibbe rewards all users in Vibbe Tokens which
              could be converted to an Crypto-coins on your preferred crypto wallet.
            </p>

            {/* ICONS ROW RIGHT-ALIGNED */}
            <div className="flex justify-end items-center gap-6 pr-2">

              <img
                src={VibbeCoins}
                alt="Vibbe coins"
                className="h-14 md:h-16"
              />

              <img
                src={VibbeWhite}
                alt="Vibbe"
                className="h-10 md:h-12 opacity-90"
              />

            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default CryptoRewards;
