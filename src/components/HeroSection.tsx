import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import heroImage from "@/assets/hero-woman.jpg";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Your Resume
                <br />
                <span className="text-primary">Deserves A Yes</span> Let's
                <br />
                Make It Happen
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
                If Your Resume Isn't Getting Responses, It's Time For An Upgrade. Get An ATS-Optimized Resume Crafted By HR Experts To Help You Land More Interviews. Our Resumes Are Designed To Get Your Foot In The Door And Place Your Name At The Top Of The Shortlist.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 font-semibold uppercase text-sm"
              >
                Resume Packages
              </Button>
              <Button 
                size="lg" 
                className="rounded-full px-8 font-semibold uppercase text-sm"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Content - Image with Stats */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img 
                src={heroImage} 
                alt="Professional resume consultant" 
                className="w-full h-auto object-cover"
              />
              
              {/* Rating Badge */}
              <div className="absolute top-8 right-8 bg-background rounded-2xl shadow-2xl p-6 max-w-[180px]">
                <div className="text-5xl font-bold text-primary mb-2">4.9</div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <div className="text-sm font-medium text-foreground">
                  Instructor Rating
                </div>
              </div>

              {/* Courses Badge */}
              <div className="absolute bottom-8 left-8 bg-background rounded-2xl shadow-2xl p-6 flex items-start gap-4 max-w-[220px]">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-6 h-6 text-primary-foreground"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground mb-1">260+</div>
                  <div className="text-xs text-muted-foreground leading-tight">
                    Online Resume
                    <br />
                    Created
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
