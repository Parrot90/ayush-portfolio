import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Phone, Github, Linkedin, Download } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import ClickSpark from './clickspark';
import ScrollFloat from './ScrollFloats';
import ShinyText from './ShinyText';
import TiltedCard from './TiltedCard';


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/Ayush-Routray.pdf';
    link.download = 'Ayush-Routray-Resume.pdf';
    link.target = '_blank'; // Fallback for browsers that don't support download attribute
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success toast
    toast({
      title: "Resume Downloaded!",
      description: "Thanks for your interest. Looking forward to connecting with you!",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get access key from environment variables
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE';
      
      if (accessKey === 'YOUR_ACCESS_KEY_HERE') {
        // Fallback when not configured
        throw new Error('Web3Forms not configured');
      }

      // Using Web3Forms - a free form submission service
      const submitData = new FormData();
      submitData.append('access_key', accessKey);
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('message', formData.message);
      submitData.append('subject', `New Portfolio Contact from ${formData.name}`);
      submitData.append('from_name', 'Ayush Portfolio Contact Form');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submitData
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      // Fallback: Log to console and show instructions
      console.log('Contact Form Submission:', {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date().toISOString(),
      });
      
      toast({
        title: "Form service not configured",
        description: `Please email me directly at ayushroutray5777@gmail.com. Your message has been logged to console.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ayushroutray5777@gmail.com',
      href: 'mailto:ayushroutray5777@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bhubaneswar, Odisha, India',
      href: '#',
    },
    {
      icon: Phone,
      label: 'Available for',
      value: 'Remote Opportunities',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: '#',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
    },
  ];

  return (
    <ClickSpark as="section" id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          {/* FIX: Replaced gradient-text with a visible color */}
          <ScrollFloat containerClassName="text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Get in Touch
          </ScrollFloat>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Let's discuss opportunities, collaborate on projects, or just connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information - UPDATED to use SpotlightCard */}
          <div className="space-y-8">
            <SpotlightCard className="p-8 fade-in h-full">
              {/* FIX: Replaced gradient-text with a visible color */}
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
       <ShinyText text='  I am always excited to discuss new opportunities, innovative projects,
                or potential collaborations in AI and machine learning. Whether you are
                looking for a passionate developer or want to share ideas, I did love to hear from you!' />
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted transition-colors slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.label}</p>
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Connect with me on:</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      asChild
                      className="glow-hover"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                        <social.icon className="w-5 h-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Contact Form - UPDATED to use SpotlightCard */}
          <SpotlightCard className="p-8 fade-in" >
            {/* FIX: Replaced gradient-text with a visible color */}
            <div style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block text-foreground">Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="bg-background/50 border-border/50"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block text-foreground">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-background/50 border-border/50"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block text-foreground">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hi!"
                    rows={5}
                    required
                    className="bg-background/50 border-border/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </SpotlightCard>
        </div>
        
        {/* Tilted Card as a visual CTA */}
        <div className="mt-24 flex justify-center">
          <div className="w-full max-w-2xl">
            <TiltedCard
             // imageSrc=""
             // altText="An abstract image representing connection"
              containerHeight="400px"
              imageWidth="100%"
              imageHeight="400px"
              displayOverlayContent={true}
              overlayContent={
                <div className="p-8 text-center flex flex-col items-center justify-center h-full">
                  <h3 className="text-3xl font-bold mb-4 text-white">Ready to Build Something Amazing?</h3>
                  <p className="text-white/80 mb-6 max-w-md">
                    I'm currently open to new opportunities and exciting projects. Let's create the future of AI together!
                  </p>
                  <Button 
                    variant="secondary" 
                    size="lg"
                    onClick={handleDownloadResume}
                    className="flex items-center gap-2"
                  >
                    <Download size={20} />
                    Download Resume
                  </Button>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </ClickSpark>
  );
};

export default ContactSection;
