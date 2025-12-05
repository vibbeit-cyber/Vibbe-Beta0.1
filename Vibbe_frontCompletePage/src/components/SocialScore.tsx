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
    <section className="w-full pt-[53px] pb-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          className="
            text-4xl md:text-5xl font-bold mb-10 leading-tight
          "
        >
          Maintain your <span className="vibbe-text">Social Score</span>
          <br />
          to Boost Account Reach
        </h2>

        <div className="md:flex md:items-start md:gap-16">
          {/* Text */}
          <div className="md:w-1/3 md:flex-shrink-0">
            <p className="text-lg text-foreground/70 leading-relaxed mb-10">
              Vibbe provides social score for all the <br /> users which makes their profile relevant <br /> to their audience. You can manage your <br /> social score in few simple steps.
            </p>
          </div>

          {/* Icon Boxes */}
          <div className="flex-1">
            <div
              className="
                grid grid-cols-1 md:grid-cols-2
                gap-4
                w-full
              "
            >
              {features.map((f, i) => (
                <Card
                  key={i}
                  className="
                    rounded-3xl border-[2px] border-gray-300 bg-white
                    hover:shadow-md transition-all duration-200 ease-out
                    p-6
                    flex flex-col gap-3
                  "
                >
                  {/* ICON */}
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img
                      src={f.icon}
                      alt={f.title}
                      className="w-7 h-7 object-contain"
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold leading-tight">
                    {f.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-muted-foreground leading-snug">
                    {f.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialScore;