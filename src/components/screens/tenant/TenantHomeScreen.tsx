import { useState } from "react";
import { MobileLayout } from "../../MobileLayout";
import { PropertyCard } from "../../PropertyCard";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Search, SlidersHorizontal, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const mockProperties = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MzE2NDczM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Modern Family Home",
    location: "Sandton, Johannesburg",
    rent: 12500,
    equity: 30,
    duration: 60,
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1761013320045-d29e4f10bcbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJ1cmJhbiUyMGhvbWUlMjBwcm9wZXJ0eXxlbnwxfHx8fDE3NjMyMTEwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Suburban Townhouse",
    location: "Pretoria East",
    rent: 9800,
    equity: 35,
    duration: 48,
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1612637968894-660373e23b03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjMyMDgwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "City Centre Apartment",
    location: "Cape Town CBD",
    rent: 8500,
    equity: 25,
    duration: 36,
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1758525861536-15fb8a3ee629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBob21lJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NjMyMTEwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Coastal Property",
    location: "Durban North",
    rent: 11000,
    equity: 28,
    duration: 54,
  },
];

export function TenantHomeScreen() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <MobileLayout>
      <div className="p-4 space-y-6">
        {/* Header */}
        <div className="pt-2">
          <h1>Find Your Home</h1>
          <p className="text-muted-foreground mt-1">
            Turn your rent into ownership
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 rounded-2xl"
            />
          </div>
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-2xl"
          >
            <SlidersHorizontal className="w-5 h-5" />
          </Button>
        </div>

        {/* Affordability CTA */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-6 text-white">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="mb-2">Homes You Can Afford 💙</h3>
              <p className="text-sm opacity-90 mb-4">
                Get personalized recommendations based on your budget
              </p>
              <Button
                variant="secondary"
                className="rounded-xl bg-white text-primary hover:bg-white/90"
                onClick={() => navigate("/tenant/affordability")}
              >
                Check Affordability
              </Button>
            </div>
          </div>
        </div>

        {/* Properties List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3>Available Properties</h3>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>

          <div className="space-y-4">
            {mockProperties.map((property) => (
              <PropertyCard
                key={property.id}
                {...property}
                onClick={() => navigate(`/tenant/property/${property.id}`)}
              />
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 pb-4">
          <div className="bg-card rounded-2xl p-4 border border-border">
            <p className="text-sm text-muted-foreground mb-1">
              Active Listings
            </p>
            <p className="text-2xl text-primary">247</p>
          </div>
          <div className="bg-card rounded-2xl p-4 border border-border">
            <p className="text-sm text-muted-foreground mb-1">
              Average Equity
            </p>
            <p className="text-2xl text-accent">29%</p>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
