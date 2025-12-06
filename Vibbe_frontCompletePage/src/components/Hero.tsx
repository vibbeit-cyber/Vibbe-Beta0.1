import VibbePink from "@/assets/Vibbe pink  text logo.png";

const Hero = () => {
  return (
    <section className="w-full py-16 md:py-24 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-5xl md:text-7xl mb-6 leading-tight">
      Find people,<br />
      who match your<br />
      <img
        src= {VibbePink}
        alt="VibbePink"
        className="inline-block h-16 md:h-20 mb-2"
      />
    </h1>

    <p className="text-lg md:text-xl text-foreground/80 max-w-md mx-auto">
      World's First Social Media Platform that <br /> rewards every user
    </p>
  </div>
</section>

  );
};

export default Hero;