const PrivacyFeatures = () => {
  const features = [
    {
      title: "Stay Discreet <br /> follow anonymous",
      description: "Blind date on Vibbe, lets you chat <br /> with anonymous. You can chat <br /> with random strangers without the <br /> pressure of revealing your identity."
    },
    {
      title: "One Login <br /> Multiple Alter-Ego's",
      description: "You can manage multiple profiles <br /> under one sign-in keeping your <br /> friends and conversations independent in each profile."
    },
    {
      title: "Know your <br /> Stalkers",
      description: "Vibbe premium keeps you informed <br /> about your profile visitors. You can <br /> now easily know those who are <br /> interested."
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Your New Social Network<br />
          Built for Privacy.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">

              {/* IMPORTANT: React does NOT render <br> in strings, so we must use innerHTML */}
              <h3
                className="text-xl font-semibold"
                dangerouslySetInnerHTML={{ __html: feature.title }}
              ></h3>

              <p
                className="text-foreground/70 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: feature.description }}
              ></p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyFeatures;
