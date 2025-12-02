import AiIcon from "@/assets/Gemini Ai.png";
import GiftIcon from "@/assets/Gift Card.png";
import MusicIcon from "@/assets/Metal Music.png";
import CommunityIcon from "@/assets/CentOS (1).png";
import { Card } from "@/components/ui/card";

const SocialScore = () => {
  const features = [
    { icon: AiIcon, title: "Create With AI" },
    { icon: CommunityIcon, title: "Build Community" },
    { icon: MusicIcon, title: "Host Events" },
    { icon: GiftIcon, title: "Gift Favourites" },
  ];

  return (
    <section className="w-full py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex md:items-start md:gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Maintain your <span className="vibbe-text">Social Score</span>
              <br />
              to Boost Account Reach
            </h2>

            <p className="text-lg text-foreground/70 max-w-lg leading-relaxed mb-8">
              Vibbe provides social score for all the users which makes their profile relevant to their audience. You can manage your social score in few simple steps.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-end">
            <div className="grid grid-cols-2 gap-6 w-full max-w-md">
              {features.map((f, i) => (
                <Card key={i} className="p-6 rounded-2xl border-2 hover:shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <img src={f.icon} alt={f.title} className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">{f.title}</h3>
                    </div>
                  </div>
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
