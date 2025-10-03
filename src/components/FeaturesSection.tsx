import iconResume from "@/assets/icon-resume.png";
import iconCoverLetter from "@/assets/icon-cover-letter.png";
import iconLinkedIn from "@/assets/icon-linkedin.png";
import iconInterview from "@/assets/icon-interview.png";

const features = [
  {
    icon: iconResume,
    title: "A Resume Format That Gets You Interviews",
    description: "Get a professionally written, keyword-optimized resume that lands in recruiter inboxes.",
  },
  {
    icon: iconCoverLetter,
    title: "A Cover Letter Style That Stands Out Strong",
    description: "Stand out with a cover letter that speaks directly to the role and reflects your strengths.",
  },
  {
    icon: iconLinkedIn,
    title: "A LinkedIn Profile That Works For You",
    description: "Attract the right eyes, start conversations, and show up in recruiter searches.",
  },
  {
    icon: iconInterview,
    title: "An Interview Strategy That Builds Confidence",
    description: "Interview preparation with real HR professionals so you speak clearly confidently.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <div className="inline-block bg-background border border-primary/20 rounded-full px-5 py-2 mb-4">
            <span className="text-xs sm:text-sm font-medium text-primary">What You Get</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto px-4">
            You're Not Just <span className="text-primary">Another Applicant</span> And Your Resume Shouldn't Look Like One
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div className="w-28 h-28 md:w-32 md:h-32 bg-background rounded-2xl shadow-md flex items-center justify-center border border-border p-4">
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-base md:text-lg font-bold max-w-[250px] px-2">
                {feature.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground max-w-[280px] px-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
