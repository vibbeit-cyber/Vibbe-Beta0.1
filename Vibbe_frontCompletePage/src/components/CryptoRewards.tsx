import VibbeCoins from "@/assets/Vibbe Coins.png";
import VibbeWhite from "@/assets/Vibbe White text logo 1.png";

const CryptoRewards = () => {
  return (
    <section className="w-full py-16 md:py-24 px-6 bg-[hsl(var(--dark-section))] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="bg-black text-white py-16 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

    {/* LEFT SIDE – Left aligned heading */}
    <div className="text-left">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
        Earn Rewards in<br />
        Crypto.
      </h2>
    </div>

    {/* RIGHT SIDE – Center aligned content */}
    <div className="text-center">
      <p className="text-lg leading-relaxed text-white/90 mb-8">
        Build on Blockchain, Vibbe rewards <br /> 
        all users in Vibbe Tokens which could <br /> 
        be converted to Crypto-coins <br />
        on your preferred crypto wallet. <br />
      </p>

      <div className="flex justify-center">
        <img
          src={VibbeCoins}
          alt="Vibbe coins"
          className="h-16"
        />
      </div>
    </div>

  </div>
</div>


          <div className="flex items-center justify-end h-full">
            <img src={VibbeWhite} alt="Vibbe" className="h-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoRewards;
