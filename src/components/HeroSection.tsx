import { Button } from '@/components/ui/button';
import ProfileCard from '@/components/ProfileCard';
import LightRays from './LightRays';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <LightRays // Removed unsupported props
      />
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Card */}
          <div className="lg:w-1/2 flex justify-center">
            <ProfileCard
              name="Ayush Routray"
              title="AI/ML Enthusiast"
              handle="ayush-ai"
              status="Open to Opportunities"
              contactText="Contact Me"
              avatarUrl="/profile-pic.jpg" // Make sure to add your avatar to the `public` folder
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => scrollToSection('contact')}
            />
          </div>

          {/* Hero Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">Ayush Routray</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-200 mb-8 leading-relaxed">
                A passionate{' '}
                <span className="text-primary font-semibold">AI/ML enthusiast</span>{' '}
                shaping the future through intelligent systems and generative AI.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => scrollToSection('projects')}
                  className="text-lg px-8 py-6"
                >
                  View My Work
                </Button>
                <Button
                  variant="glass"
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="text-lg px-8 py-6"
                >
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* Animated tech indicators */}
            <div className="mt-12 flex flex-wrap gap-3 justify-center lg:justify-start">
              {['Python', 'PyTorch', 'Machine Learning', 'LLMs'].map((tech, index) => (
                <div
                  key={tech}
                  className="glass-card px-4 py-2 text-sm font-medium slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;