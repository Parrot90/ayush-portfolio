import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    portfolio: {
      title: "Portfolio",
      links: [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Certifications", href: "#certifications" }
      ]
    },
    skills: {
      title: "Skills",
      links: [
        { name: "Machine Learning", href: "#about" },
        { name: "Python", href: "#about" },
        { name: "PyTorch", href: "#about" },
        { name: "TensorFlow", href: "#about" }
      ]
    },
    resources: {
      title: "Resources",
      links: [
        { name: "Blog", href: "#blog" },
        { name: "Resume", href: "#contact" },
        { name: "Contact", href: "#contact" },
        { name: "Achievements", href: "#achievements" }
      ]
    },
    connect: {
      title: "Connect",
      links: [
        { name: "LinkedIn", href: "https://linkedin.com/in/ayush-routray" },
        { name: "GitHub", href: "https://github.com/ayushroutray" },
        { name: "Twitter", href: "https://twitter.com/ayushroutray" },
        { name: "Email", href: "mailto:ayush@example.com" }
      ]
    }
  };

  return (
    <>
      <footer className="relative bg-black/95 border-t border-gray-800/50 pt-16 pb-8">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/20 to-transparent"></div>
        
        <div className="relative container mx-auto px-6">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {Object.entries(footerSections).map(([key, section]) => (
              <div key={key} className="space-y-4">
                <h4 className="text-white font-semibold text-lg">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Brand Section */}
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-gray-300 text-sm">
                Building AI solutions with passion and precision.
              </span>
            </div>
            
            <div className="text-sm text-gray-500 mb-4">
              Made by Ayush Routray
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="https://github.com/ayushroutray" className="text-gray-400 hover:text-primary transition-colors p-2">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/ayush-routray" className="text-gray-400 hover:text-primary transition-colors p-2">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:ayush@example.com" className="text-gray-400 hover:text-primary transition-colors p-2">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ayushroutray" className="text-gray-400 hover:text-primary transition-colors p-2">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <div className="text-center text-gray-500 text-sm">
              © {currentYear} Ayush Routray. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
