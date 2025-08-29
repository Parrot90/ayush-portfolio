import { Badge } from '@/components/ui/badge';
import SpotlightCard from './SpotlightCard'; // Assuming this component is in the same directory
import ClickSpark from './clickspark';
import DecryptedText from './DecryptedText';
import ShinyText from './ShinyText';
import ScrollFloat from './ScrollFloats';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'AI/ML Intern',
      company: 'Kreative Time Box',
      period: '2024 - Present',
      description: 'Worked on intelligent systems and advanced ML concepts, focusing on real-world applications of artificial intelligence.',
      skills: ['Machine Learning', 'Deep Learning', 'Python', 'TensorFlow'],
      type: 'Internship',
    },
    {
      title: 'Trainee in AI/ML Concepts',
      company: 'Softech',
      period: '2023 - 2024',
      description: 'Gained comprehensive understanding of ML workflows, model deployment, and industry best practices.',
      skills: ['Neural Networks', 'Data Analysis', 'Model Deployment', 'PyTorch'],
      type: 'Training',
    },
  ];

  return (
    <ClickSpark as="section" id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <ScrollFloat containerClassName="text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Experience
          </ScrollFloat>
      
          {/* FIX: Replaced gradient-text with a visible color */}
          <p className="text-xl text-slate-200 max-w-2xl mx-auto fade-in" style={{ animationDelay: '0.2s' }}>
          <ShinyText text='  Building expertise through hands-on experience in AI and machine learning ' />
          </p>
        </div>


        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line - made it more subtle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full ring-8 ring-background z-10"></div>

                {/* Experience card - UPDATED to use SpotlightCard */}
                <div className="w-full lg:w-5/12">
                  <SpotlightCard className="p-6 fade-in" /* style={{ animationDelay: `${index * 0.3}s` }} */>
                    <div className="flex items-center justify-between mb-3"> 
                      <Badge variant={exp.type === 'Internship' ? 'default' : 'secondary'} className="text-xs">
                        {exp.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
                    </div>
                    
                    {/* FIX: Replaced gradient-text with a visible color */}
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{exp.title}</h3>
                    <h4 className="text-lg text-primary font-medium mb-3">{exp.company}</h4>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </SpotlightCard>
                </div>
              </div>
            ))}
          </div>

          {/* Current Focus - UPDATED to use SpotlightCard */}
          <div className="mt-16 text-center">
            <SpotlightCard className="p-8 max-w-2xl mx-auto slide-up" /* style={{ animationDelay: '0.8s' }} */>
              {/* FIX: Replaced gradient-text with a visible color */}
              <h3 className="text-2xl font-semibold mb-4 text-primary">Current Focus</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Currently exploring advanced topics in Large Language Models, particularly focusing on:
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Transformer Architecture', 'Fine-tuning LLMs', 'RAG Systems', 'Multimodal AI', 'Edge Deployment'].map((topic) => (
                  <Badge key={topic} variant="secondary" className="text-sm">
                    {topic}
                  </Badge>
                ))}
              </div>
            </SpotlightCard>
          </div>

          {/* 3D Robot Character - Spline Integration */}
          <div className="mt-16 text-center">
       
            <SpotlightCard className="p-0 max-w-4xl mx-auto overflow-hidden slide-up" /* style={{ animationDelay: '1s' }} */>
              <div className="h-96 lg:h-[500px] w-full">
                <iframe 
                  src='https://my.spline.design/nexbotrobotcharacterconcept-ye4bV13iD75ozqjbcEvFckAk/' 
                  frameBorder='0' 
                  width='100%' 
                  height='100%'
                  className="rounded-lg"
                />
              </div>
              <div className="p-6">
                <p className="text-muted-foreground">
                  <DecryptedText text="Exploring the intersection of AI and robotics through interactive 3D experiences" />
                </p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </ClickSpark>
  );
};

export default ExperienceSection;
