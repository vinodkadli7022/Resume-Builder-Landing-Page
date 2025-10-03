import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import heroImage from "@/assets/hero-woman.jpg";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Resume
                <br />
                <span className="text-primary">Deserves A Yes</span> Let's
                <br />
                Make It Happen
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-lg">
                If Your Resume Isn't Getting Responses, It's Time For An Upgrade. Get An ATS-Optimized Resume Crafted By HR Experts To Help You Land More Interviews. Our Resumes Are Designed To Get Your Foot In The Door And Place Your Name At The Top Of The Shortlist.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-6 sm:px-8 font-semibold uppercase text-xs"
              >
                Resume Packages
              </Button>
              <Button 
                size="lg" 
                className="rounded-full px-6 sm:px-8 font-semibold uppercase text-xs"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Content - Image with Stats */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden">
              <img 
                src={heroImage} 
                alt="Professional resume consultant" 
                className="w-full h-auto object-cover"
              />
              
              {/* Rating Badge - Desktop */}
              <div className="hidden sm:block absolute top-6 lg:top-8 right-6 lg:right-8 bg-background rounded-2xl shadow-2xl p-4 lg:p-6 max-w-[160px] lg:max-w-[180px]">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">4.9</div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 fill-primary text-primary" />
                  ))}
                </div>
                <div className="text-xs lg:text-sm font-medium text-foreground">
                  Instructor Rating
                </div>
              </div>

              {/* Courses Badge - Desktop */}
              <div className="hidden sm:block absolute bottom-6 lg:bottom-8 left-6 lg:left-8 bg-background rounded-2xl shadow-2xl p-4 lg:p-6 flex items-start gap-3 lg:gap-4 max-w-[200px] lg:max-w-[220px]">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-5 h-5 lg:w-6 lg:h-6 text-primary-foreground"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl lg:text-2xl font-bold text-foreground mb-1">260+</div>
                  <div className="text-[10px] lg:text-xs text-muted-foreground leading-tight">
                    Online Resume
                    <br />
                    Created
                  </div>
                </div>
              </div>

              {/* Mobile Stats - Stacked below image */}
              <div className="sm:hidden mt-6 space-y-4">
                <div className="bg-background rounded-2xl shadow-lg p-4 flex items-center justify-between">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-1">4.9</div>
                    <div className="flex gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                      ))}
                    </div>
                    <div className="text-xs font-medium text-foreground">
                      Instructor Rating
                    </div>
                  </div>
                </div>
                
                <div className="bg-background rounded-2xl shadow-lg p-4 flex items-center gap-4">
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
                    <div className="text-xs text-muted-foreground">
                      Online Resume Created
                    </div>
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
