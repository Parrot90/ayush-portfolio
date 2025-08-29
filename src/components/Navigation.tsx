"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import GooeyNav from './GooeyNav'; // Import the fixed GooeyNav component
import './GooeyNav.css'; // And its required styles

const Navigation = () => {
  // --- STATE MANAGEMENT ---
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- NAVIGATION DATA ---
  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'achievements', label: 'Achievements', href: '#achievements' },  //To be changed to 'Achievements'
    { id: 'certifications', label: 'Certifications', href: '#certifications' },  //To be changed to 'Certifications'
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  // --- SCROLL LOGIC ---
  const scrollToSection = (sectionIdWithHash: string) => {
    const id = sectionIdWithHash.substring(1); // Remove '#' from href
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Find which section is currently in view
      let currentSectionId = 'home'; // Default to home
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section's top is near the top of the viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSectionId = item.id;
            break;
          }
        }
      }
      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  // Find the active index to pass to GooeyNav
  const activeIndex = navItems.findIndex(item => item.id === activeSection);

  // --- RENDER ---
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMenuOpen ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Name */}
          <div 
            className="text-xl font-bold text-primary cursor-pointer" 
            onClick={() => scrollToSection('#home')}
          >
            Ayush Routray
          </div>
          
          {/* Desktop Navigation: Use the fixed GooeyNav */}
          <div className="hidden md:flex">
            <GooeyNav
              items={navItems} 
              onItemClick={scrollToSection} 
              activeIndex={activeIndex >= 0 ? activeIndex : 0}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md pb-4">
          <div className="flex flex-col items-center space-y-2 px-4">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "secondary" : "ghost"}
                onClick={() => scrollToSection(item.href)}
                className="w-full"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
