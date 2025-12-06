const PrivacyFeatures = () => {
  const features = [
    {
      title: "Stay Discreet <br /> follow anonymous",
      description:
        "Blind date on Vibbe, lets you chat <br /> with anonymous. You can chat <br /> with random strangers without the <br /> pressure of revealing your identity.",
    },
    {
      title: "One Login <br /> Multiple Alter-Ego's",
      description:
        "You can manage multiple profiles <br /> under one sign-in keeping your <br /> friends and conversations <br /> independent in each profile.",
    },
    {
      title: "Know your <br /> Stalkers",
      description:
        "Vibbe premium keeps you informed <br /> about your profile visitors. You can <br /> now easily know those who are <br /> interested.",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-28 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2
          className="
            font-bold leading-tight
            text-[2rem] sm:text-[2.5rem] md:text-[3rem]
            mb-10 sm:mb-12
          "
        >
          Your New Social Network <br />
          Built for Privacy
        </h2>

        {/* Features Grid */}
        <div
          className="
            grid grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            gap-8 sm:gap-10 md:gap-14
          "
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                bg-white border border-gray-200 rounded-3xl
                p-6 sm:p-7 md:p-8 lg:p-10
                hover:shadow-md transition-shadow duration-200
                space-y-3
              "
            >
              {/* Title (support HTML line breaks) */}
              <h3
                className="
                  font-semibold
                  text-[1.125rem] md:text-[1.25rem] leading-snug
                "
                dangerouslySetInnerHTML={{ __html: feature.title }}
              />

              {/* Description (support HTML line breaks) */}
              <p
                className="
                  text-[0.95rem] md:text-[1rem]
                  text-foreground/70 
                  leading-relaxed
                "
                dangerouslySetInnerHTML={{ __html: feature.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyFeatures;
