import AiIcon from "@/assets/Gemini Ai.png";
import GiftIcon from "@/assets/Gift Card.png";
import MusicIcon from "@/assets/Metal Music.png";
import CommunityIcon from "@/assets/CentOS (1).png";
import { Card } from "@/components/ui/card";

const SocialScore = () => {
  const features = [
    {
      icon: AiIcon,
      title: "Create With AI",
      description: "Generate stunning posts in seconds using smart AI tools",
    },
    {
      icon: CommunityIcon,
      title: "Build Community",
      description: "Grow a loyal space where everyone feels connected.",
    },
    {
      icon: MusicIcon,
      title: "Host Events",
      description: "Plan and manage events effortlessly from one place.",
    },
    {
      icon: GiftIcon,
      title: "Gift Favourites",
      description: "Send digital gifts and surprises to people you care about.",
    },
  ];

  return (
    <section className="w-full bg-background">
      {/* ========== MOBILE LAYOUT (< md) ========== */}
      <div className="block md:hidden pt-[3rem] pb-[3rem] px-[1.5rem]">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2
            className="
              text-left
              text-[2rem]              /* ~32px */
              font-bold leading-tight
              mb-[1.75rem]
            "
          >
            Maintain your <span className="vibbe-text">Social Score </span>
          
            to Boost Account Reach
          </h2>

          {/* Text */}
          <p className="text-[1rem] text-foreground/70 leading-relaxed mb-[2rem]">
            Vibbe provides social score for all the users which makes their
            profile relevant to their audience. You can manage your social score
            in few simple steps.
          </p>

          {/* Cards – 1 column on mobile */}
          <div className="grid grid-cols-1 gap-[1rem] w-full">
            {features.map((f, i) => (
              <Card
                key={i}
                className="
                  rounded-3xl border-[2px] border-gray-300 bg-white
                  hover:shadow-md transition-all duration-200 ease-out
                  p-[1.5rem] flex flex-col gap-[0.75rem]
                "
              >
                <div className="w-[2.5rem] h-[2.5rem] flex items-center justify-center">
                  <img
                    src={f.icon}
                    alt={f.title}
                    className="w-[1.75rem] h-[1.75rem] object-contain"
                  />
                </div>

                <h3 className="text-[1.125rem] font-semibold leading-tight">
                  {f.title}
                </h3>

                <p className="text-[0.875rem] text-muted-foreground leading-snug">
                  {f.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* ========== DESKTOP / WEB LAYOUT (>= md) ========== */}
      <div className="hidden md:block pt-[3.3125rem] pb-[4rem] px-[2.5rem]">
        {/* Match CryptoRewards + Privacy alignment */}
        <div className="max-w-7xl mx-auto">
          {/* Heading (responsive for 1440) */}
          <h2
            className="
              text-left
              text-[2.5rem]         /* ~40px at md */
              lg:text-[3.25rem]     /* ~52px at lg */
              xl:text-[3.5rem]      /* ~56px at xl */
              font-bold leading-tight 
              mb-[2.5rem]
            "
          >
            Maintain your <span className="vibbe-text">Social Score</span>
            <br />
            to Boost Account Reach
          </h2>

          <div className="flex items-start gap-[1rem]">
            {/* Text Section */}
            <div className="w-1/3 flex-shrink-0">
              <p className="text-[1.125rem] text-foreground/70 leading-relaxed mb-[2.5rem]">
                Vibbe provides social score for all the <br />
                users which makes their profile relevant <br />
                to their audience. You can manage your <br />
                social score in few simple steps.
              </p>
            </div>

            {/* Icon Cards Section */}
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-[1rem] w-full">
                {features.map((f, i) => (
                  <Card
                    key={i}
                    className="
                      rounded-3xl border-[2px] border-gray-300 bg-white
                      hover:shadow-md transition-all duration-200 ease-out
                      p-[1.5rem] flex flex-col gap-[0.75rem]
                    "
                  >
                    <div className="w-[2.5rem] h-[2.5rem] flex items-center justify-center">
                      <img
                        src={f.icon}
                        alt={f.title}
                        className="w-[1.75rem] h-[1.75rem] object-contain"
                      />
                    </div>

                    <h3 className="text-[1.125rem] font-semibold leading-tight">
                      {f.title}
                    </h3>

                    <p className="text-[0.875rem] text-muted-foreground leading-snug">
                      {f.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialScore;