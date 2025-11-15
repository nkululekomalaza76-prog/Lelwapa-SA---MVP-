import { useState } from "react";
import { MobileLayout } from "../../MobileLayout";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { Card } from "../../ui/card";
import {
  ArrowLeft,
  MapPin,
  Home,
  Bed,
  Bath,
  Square,
  Heart,
  Share2,
  TrendingUp,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { ImageWithFallback } from "../../figma/ImageWithFallback";

export function PropertyDetailScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);

  const property = {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MzE2NDczM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Modern Family Home",
    location: "Sandton, Johannesburg",
    rent: 12500,
    equity: 30,
    duration: 60,
    propertyValue: 1500000,
    bedrooms: 3,
    bathrooms: 2,
    sqm: 180,
    description:
      "Beautiful modern home in a secure estate with excellent amenities. Perfect for families looking to build equity while enjoying quality living.",
    features: [
      "24/7 Security",
      "Garden",
      "Double Garage",
      "Pet Friendly",
      "Fiber Ready",
    ],
  };

  const monthlyEquity = (property.rent * property.equity) / 100;
  const totalEquityAfter = monthlyEquity * property.duration;

  return (
    <MobileLayout>
      <div className="relative">
        {/* Image Header */}
        <div className="relative h-80">
          <ImageWithFallback
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full bg-white/90"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full bg-white/90"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart
                  className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`}
                />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full bg-white/90"
              >
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <Badge className="absolute bottom-4 right-4 bg-accent">
            <TrendingUp className="w-3 h-3 mr-1" />
            {property.equity}% Equity
          </Badge>
        </div>

        <div className="p-4 space-y-4">
          {/* Title & Location */}
          <div>
            <h1>{property.title}</h1>
            <div className="flex items-center text-muted-foreground mt-2">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{property.location}</span>
            </div>
          </div>

          {/* Price Card */}
          <Card className="p-4 bg-primary text-white">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-sm opacity-90">Monthly Rent</p>
                <p className="text-3xl">R{property.rent.toLocaleString()}</p>
              </div>
              <div className="text-right">
                <p className="text-sm opacity-90">Goes to Equity</p>
                <p className="text-xl">R{monthlyEquity.toLocaleString()}</p>
              </div>
            </div>
            <div className="pt-3 border-t border-white/20">
              <p className="text-sm opacity-90">
                After {property.duration} months, you'll own R
                {totalEquityAfter.toLocaleString()}
              </p>
            </div>
          </Card>

          {/* Property Details */}
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Bed className="w-6 h-6 text-accent" />
              </div>
              <p className="text-sm">{property.bedrooms}</p>
              <p className="text-xs text-muted-foreground">Beds</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Bath className="w-6 h-6 text-accent" />
              </div>
              <p className="text-sm">{property.bathrooms}</p>
              <p className="text-xs text-muted-foreground">Baths</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Square className="w-6 h-6 text-accent" />
              </div>
              <p className="text-sm">{property.sqm}m²</p>
              <p className="text-xs text-muted-foreground">Size</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Home className="w-6 h-6 text-accent" />
              </div>
              <p className="text-sm">R{(property.propertyValue / 1000000).toFixed(1)}M</p>
              <p className="text-xs text-muted-foreground">Value</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="mb-2">About This Home</h3>
            <p className="text-muted-foreground">{property.description}</p>
          </div>

          {/* Features */}
          <div>
            <h3 className="mb-3">Features</h3>
            <div className="flex flex-wrap gap-2">
              {property.features.map((feature) => (
                <Badge key={feature} variant="secondary" className="rounded-xl">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <div className="pb-4">
            <Button
              className="w-full h-12 rounded-2xl bg-primary"
              onClick={() => navigate(`/tenant/apply/${id}`)}
            >
              Apply for Rent-to-Own
            </Button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
