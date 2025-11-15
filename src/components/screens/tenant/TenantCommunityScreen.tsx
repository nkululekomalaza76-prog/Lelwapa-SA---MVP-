import { MobileLayout } from "../../MobileLayout";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import {
  Heart,
  BookOpen,
  Gift,
  TrendingUp,
  Users,
  MessageCircle,
} from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";

const successStories = [
  {
    name: "Thabo M.",
    location: "Johannesburg",
    achievement: "30% Equity in 2 years",
    image: "https://images.unsplash.com/photo-1758525861536-15fb8a3ee629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBob21lJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NjMyMTEwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "Lelwapa helped me turn my rent into real ownership. Best decision ever!",
  },
  {
    name: "Sarah K.",
    location: "Cape Town",
    achievement: "First-time homeowner at 28",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MzE2NDczM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "I never thought I could own a home so soon. Thank you Lelwapa!",
  },
];

const learningResources = [
  {
    title: "Understanding Rent-to-Own",
    category: "Getting Started",
    duration: "5 min read",
  },
  {
    title: "Building Your Credit Score",
    category: "Financial Tips",
    duration: "8 min read",
  },
  {
    title: "Home Maintenance Basics",
    category: "Homeownership",
    duration: "10 min read",
  },
];

export function TenantCommunityScreen() {
  return (
    <MobileLayout>
      <div className="p-4 space-y-6">
        <div className="pt-2">
          <h1>Community</h1>
          <p className="text-muted-foreground mt-1">
            Learn, connect, and grow together
          </p>
        </div>

        {/* Referral Banner */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-6 text-white">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Gift className="w-5 h-5" />
                <h3>Refer & Earn</h3>
              </div>
              <p className="text-sm opacity-90 mb-4">
                Invite friends and earn R200 equity credit for each successful referral
              </p>
              <Button
                variant="secondary"
                className="rounded-xl bg-white text-primary hover:bg-white/90"
              >
                Share Referral Link
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-4 pt-4 border-t border-white/20">
            <div>
              <p className="text-sm opacity-90">Your Referrals</p>
              <p className="text-xl">3</p>
            </div>
            <div>
              <p className="text-sm opacity-90">Total Earned</p>
              <p className="text-xl">R600</p>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3>Success Stories</h3>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>

          <div className="space-y-4">
            {successStories.map((story, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-40 relative">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <p>{story.name}</p>
                    <p className="text-sm opacity-90">{story.location}</p>
                  </div>
                </div>
                <div className="p-4">
                  <Badge className="mb-3 bg-accent">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {story.achievement}
                  </Badge>
                  <p className="text-sm text-muted-foreground italic">
                    "{story.quote}"
                  </p>
                  <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                    <button className="flex items-center gap-1 hover:text-primary">
                      <Heart className="w-4 h-4" />
                      <span>124</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-primary">
                      <MessageCircle className="w-4 h-4" />
                      <span>23</span>
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Resources */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-accent" />
            <h3>Learning Hub</h3>
          </div>

          <div className="space-y-3">
            {learningResources.map((resource, index) => (
              <Card
                key={index}
                className="p-4 cursor-pointer hover:border-primary transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="mb-1">{resource.title}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Badge variant="secondary" className="text-xs">
                        {resource.category}
                      </Badge>
                      <span>•</span>
                      <span>{resource.duration}</span>
                    </div>
                  </div>
                  <BookOpen className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-2" />
                </div>
              </Card>
            ))}
          </div>

          <Button variant="outline" className="w-full h-12 rounded-2xl">
            Browse All Resources
          </Button>
        </div>

        {/* Community Stats */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-accent" />
            <h3>Community Impact</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-2xl text-primary">2,847</p>
              <p className="text-sm text-muted-foreground">Active Members</p>
            </div>
            <div>
              <p className="text-2xl text-primary">R42M</p>
              <p className="text-sm text-muted-foreground">Total Equity Built</p>
            </div>
          </div>
        </Card>

        <div className="pb-4" />
      </div>
    </MobileLayout>
  );
}
