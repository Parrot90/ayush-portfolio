import { Badge } from '@/components/ui/badge';
import ScrollReveal from './ScrollReveal';
import SpotlightCard from './SpotlightCard';
import ClickSpark from './clickspark';
import ShinyText from './ShinyText';
 
const AboutSection = () => {
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'Machine Learning', level: 85 },
    { name: 'PyTorch', level: 80 },
    { name: 'MySQL', level: 75 },
    { name: 'Angular', level: 70 },
    { name: 'CUDA', level: 65 },
  ];

  const techStack = [
    'TensorFlow', 'Scikit-learn', 'OpenCV', 'NumPy', 'Pandas',
    'Flask', 'FastAPI', 'Docker', 'Git', 'Linux'
  ];

  return (
    <ClickSpark as="section" id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          {/* FIX: Added 'text-foreground' to make the main title visible */}
          <ScrollReveal containerClassName="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            About Me
          </ScrollReveal>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
           <ShinyText text="Passionate about transforming ideas into intelligent solutions" />
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Bio & Tech Stack */}
          <div className="space-y-6">
            {/* Bio Section with SpotlightCard */}
            <SpotlightCard className="p-8 fade-in">
              {/* FIX: Replaced 'gradient-text' with a visible color like 'text-primary' */}
                            <ScrollReveal containerClassName="text-xl font-semibold mb-4 text-primary">
                My Journey
              </ScrollReveal>
              <p className="text-muted-foreground leading-relaxed mb-4">
          <span>
          <ShinyText text="I'm a final-year BTech Computer Science Engineering student at" />
            <ShinyText text="Ajay Binay Institute of Technology
            driven by an insatiable curiosity for artificial intelligence and machine learning." 
              />
          </span>
          
          <p className="text-muted-foreground leading-relaxed mb-4"> 
       <ShinyText text='My passion lies in Large Language Models (LLMs) and
            generative AI, where I focus on transforming raw data into actionable intelligence.
            With a solid foundation in Python, PyTorch, and machine learning frameworks,
            I believe in building scalable, elegant systems that seamlessly merge code and cognition.' />
          </p>
          <p className="text-muted-foreground leading-relaxed">
       <ShinyText text='When Im not coding, you will find me exploring the latest research papers,
            experimenting with new AI models, or contributing to open-source projects.' />
          </p>
              </p>
            </SpotlightCard>

            {/* Tech Stack - UPDATED to use SpotlightCard */}
            <SpotlightCard className="p-8 slide-up">
              {/* FIX: Replaced 'gradient-text' with a visible color */}
              <ScrollReveal containerClassName="text-xl font-semibold mb-4 text-primary">
                Technologies I Love
              </ScrollReveal>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </SpotlightCard>
          </div>

          {/* Right Column: Skills & Stats */}
          <div className="space-y-6">
            {/* Skills Section - UPDATED to use SpotlightCard */}
            <SpotlightCard className="p-8 fade-in">
              {/* FIX: Replaced 'gradient-text' with a visible color */}
              <ScrollReveal containerClassName="text-2xl font-semibold mb-6 text-primary">
                Core Skills
              </ScrollReveal>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="skill-item"
                    style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.2 + 0.2}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </SpotlightCard>

            {/* Stats - UPDATED to use SpotlightCard */}
            <div className="grid grid-cols-2 gap-4"> 
              <SpotlightCard className="p-6 text-center slide-up">
                {/* FIX: Replaced 'gradient-text' with a visible color */}
                <ScrollReveal containerClassName="text-3xl font-bold text-primary mb-2">
                  10+
                </ScrollReveal>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </SpotlightCard>
              <SpotlightCard className="p-6 text-center slide-up">
                {/* FIX: Replaced 'gradient-text' with a visible color */}
                <ScrollReveal containerClassName="text-3xl font-bold text-primary mb-2">
                  3+
                </ScrollReveal>
                <div className="text-sm text-muted-foreground"> Intern Months Experience</div>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </div>
  </ClickSpark>
  );
};

export default AboutSection;