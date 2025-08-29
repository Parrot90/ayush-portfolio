import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ClickSpark from './clickspark';
import { ExternalLink, Github } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import ScrollFloat from './ScrollFloats';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Skin Cancer Detection – Classification using VGG16, CNN, XGBoost',
      description: 'Classification using VGG16, CNN, XGBoost (Keras, TensorFlow).',
      longDescription: 'Classification using VGG16, CNN, XGBoost (Keras, TensorFlow).',
      image: '/api/placeholder/400/300',
      tech: ['VGG16', 'CNN', 'XGBoost', 'Keras', 'TensorFlow'],
      category: 'Deep Learning',
      role: 'Developer',
      github: '#',
      demo: '#',
    },
    {
      id: 2,
      title: 'EV Price & Customer Review Analysis',
      description: 'Data-driven insights on sales & feedback trends.',
      longDescription: 'Data-driven insights on sales & feedback trends.',
      image: '/api/placeholder/400/300',
      tech: ['Data Analysis'],
      category: 'Data Science',
      role: 'Developer',
      github: '#',
      demo: '#',
    },
    {
      id: 3,
      title: 'Emotion Detection with OpenCV & AI Chatbot',
      description: 'Preventing negative thoughts using Gemma API.',
      longDescription: 'Preventing negative thoughts using Gemma API.',
      image: '/api/placeholder/400/300',
      tech: ['OpenCV', 'Gemma API', 'AI Chatbot'],
      category: 'Computer Vision',
      role: 'Developer',
      github: '#',
      demo: '#',
    },
    {
      id: 4,
      title: 'Resume Builder',
      description: 'Developed using PHP, JavaScript, MySQL.',
      longDescription: 'Developed using PHP, JavaScript, MySQL.',
      image: '/api/placeholder/400/300',
      tech: ['PHP', 'JavaScript', 'MySQL'],
      category: 'Web Development',
      role: 'Developer',
      github: '#',
      demo: '#',
    },
    {
      id: 5,
      title: 'Fine-tuned Llama3 for Medical Advisory (Jan AI)',
      description: 'Custom LLM training for domain-specific support.',
      longDescription: 'Custom LLM training for domain-specific support.',
      image: '/api/placeholder/400/300',
      tech: ['Llama3', 'Jan AI', 'LLM'],
      category: 'NLP',
      role: 'Developer',
      github: '#',
      demo: '#',
    },
    {
      id: 6,
      title: 'Automated Company Data Scraping',
      description: 'n8n + Retell API + Webhook + Supabase.',
      longDescription: 'n8n + Retell API + Webhook + Supabase.',
      image: '/api/placeholder/400/300',
      tech: ['n8n', 'Retell API', 'Webhook', 'Supabase'],
      category: 'Automation',
      role: 'Developer',
      github: '#',
      demo: '#',
    },
    {
      id: 7,
      title: 'Smart Inventory Management',
      description: 'Laravel + MySQL + TypeScript + PHP.',
      longDescription: 'Laravel + MySQL + TypeScript + PHP.',
      image: '/api/placeholder/400/300',
      tech: ['Laravel', 'MySQL', 'TypeScript', 'PHP'],
      category: 'Web Development',
      role: 'Developer',
      github: '#',
      demo: '#',
    },
    {
      id: 8,
      title: 'Disaster Management App',
      description: 'Built on Android Studio for emergency response.',
      longDescription: 'Built on Android Studio for emergency response.',
      image: '/api/placeholder/400/300',
      tech: ['Android Studio'],
      category: 'Mobile Development',
      role: 'Developer',
      github: '#',
      demo: '#',
    },
    {
      id: 9,
      title: 'Portfolio Website',
      description: 'Developed with React, Next.js, Spline & ReactBits.',
      longDescription: 'Developed with React, Next.js, Spline & ReactBits.',
      image: '/api/placeholder/400/300',
      tech: ['React', 'Next.js', 'Spline', 'ReactBits'],
      category: 'Web Development',
      role: 'Developer',
      github: '#',
      demo: '#',
    },
    {
      id: 10,
      title: 'Bank Statement Data Extraction',
      description: 'Automated financial document processing for UK-based clients.',
      longDescription: 'Automated financial document processing for UK-based clients.',
      image: '/api/placeholder/400/300',
      tech: ['Document AI'],
      category: 'Document AI',
      role: 'Developer',
      github: '#',
      demo: '#',
    },
  ];

  const categories = ['All', 'Deep Learning', 'Data Science', 'Computer Vision', 'Web Development', 'NLP', 'Automation', 'Mobile Development', 'Document AI'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 5);

  return (
    <ClickSpark as="section" id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <ScrollFloat containerClassName="text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Projects
          </ScrollFloat>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Innovative solutions built with cutting-edge AI and machine learning technologies
          </p>
        </div>

        <div className="relative w-full h-[500px] rounded-lg overflow-hidden my-8">
          <iframe src='https://my.spline.design/robotfollowcursorforlandingpage-ArqyIxZ3mMN3LhjsiDo1nQLI/' frameBorder='0' width='100%' height='100%'></iframe>
        </div>
 
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <SpotlightCard
              key={project.id}
              className="p-6 cursor-pointer fade-in overflow-hidden h-full flex flex-col"
            >
              <div
                className="relative z-10 flex flex-col flex-grow"
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setSelectedProject(project);
                }}
              >
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                    <span className="text-4xl">{project.category === 'Deep Learning' ? '🧠' :
                      project.category === 'Computer Vision' ? '👁️' :
                        project.category === 'NLP' ? '📝' :
                          project.category === 'Mobile Development' ? '📱' :
                            project.category === 'Data Science' ? '📊' : '📄'}</span>
                  </div>
                </div>

                <div className="flex justify-between items-start mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <div className="flex gap-2">
                    <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                    <Github className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2 text-foreground line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mt-auto">
                  {project.tech.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {filteredProjects.length > 5 && (
          <div className="text-center mt-12">
            <Button onClick={() => setShowAll(!showAll)} variant="outline">
              {showAll ? 'View less projects' : 'View more projects'}
            </Button>
          </div>
        )}

        {/* Project Modal */}
        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="bg-background/80 backdrop-blur-sm max-w-4xl max-h-[90vh] overflow-y-auto p-6">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-primary">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6 pt-4">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                      <span className="text-6xl">{selectedProject.category === 'Deep Learning' ? '🧠' :
                        selectedProject.category === 'Computer Vision' ? '👁️' :
                          selectedProject.category === 'NLP' ? '📝' :
                            selectedProject.category === 'Mobile Development' ? '📱' :
                              selectedProject.category === 'Data Science' ? '📊' : '📄'}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <Badge variant="default">{selectedProject.category}</Badge>
                      <Badge variant="outline">{selectedProject.role}</Badge>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button variant="default" size="sm" asChild>
                         <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.longDescription}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div> 
    </ClickSpark>
  );
};

export default ProjectsSection;
