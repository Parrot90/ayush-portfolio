"use client";

import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Medal, Star } from 'lucide-react';
import SpotlightCard from './SpotlightCard'; // Assuming SpotlightCard is in the same directory
import ClickSpark from './clickspark';
import ScrollFloat from './ScrollFloats';
import ShinyText from './ShinyText';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "ABIT Poster Presentation",
      organization: "ABIT",
      year: "2024",
      description: "Recognized for exceptional contribution to product development and team leadership.",
      icon: Trophy,
      category: "Competition"
    },
    {
      title: "ASBM Hackathon",
      organization: "Asian School Of Business Management",
      year: "2024",
      description: "Awarded for developing an innovative solution for Disaster Management.",
      icon: Award,
      category: "Innovation"
    },
    {
      title: "Trident Hackathon",
      organization: "Trident",
      year: "2023",
      description: "Acknowledged for Green Technology & environmental sustainability initiatives.",
      icon: Medal,
      category: "Innovation"
    },
    {
      title: "IIT WORKSHOP",
      organization: "IIT Bhubaneswar",
      year: "2024",
      description: "Participated in a workshop on advanced machine learning techniques.",
      icon: Star,
      category: "Competition"
    }
  ];

  return (
    <ClickSpark as="section" id="achievements" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          {/* FIX: Replaced gradient-text with a visible, themed color */}
          <ScrollFloat containerClassName="text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Achievement
          </ScrollFloat>
          <p className="text-slate-200 text-lg max-w-3xl mx-auto">
       <ShinyText text = 'recognition and awards that highlight my professional journey and contributions.'/>
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              // UPDATE: Replaced the standard Card with the interactive SpotlightCard
              <SpotlightCard key={index} className="p-6 h-full">
                {/* The content structure remains the same for a consistent layout */}
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {achievement.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {achievement.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1 text-foreground">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-4">
                      {achievement.organization}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </ClickSpark>
  );
};

export default AchievementsSection;
