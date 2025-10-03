const features = [
  {
    icon: "📄",
    title: "A Resume Format That Gets You Interviews",
    description: "Get a professionally written, keyword-optimized resume that lands in recruiter inboxes.",
  },
  {
    icon: "✉️",
    title: "A Cover Letter Style That Stands Out Strong",
    description: "Stand out with a cover letter that speaks directly to the role and reflects your strengths.",
  },
  {
    icon: "💼",
    title: "A LinkedIn Profile That Works For You",
    description: "Attract the right eyes, start conversations, and show up in recruiter searches.",
  },
  {
    icon: "👥",
    title: "An Interview Strategy That Builds Confidence",
    description: "Interview preparation with real HR professionals so you speak clearly confidently.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-background border border-border rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">What You Get</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto">
            You're Not Just <span className="text-primary">Another Applicant</span> And Your Resume Shouldn't Look Like One
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div className="w-24 h-24 bg-background rounded-2xl shadow-lg flex items-center justify-center text-4xl border border-border">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold max-w-[250px]">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground max-w-[280px]">
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
