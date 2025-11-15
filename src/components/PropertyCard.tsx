import { MapPin, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  rent: number;
  equity: number;
  duration: number;
  onClick?: () => void;
}

export function PropertyCard({
  image,
  title,
  location,
  rent,
  equity,
  duration,
  onClick,
}: PropertyCardProps) {
  return (
    <Card
      className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <div className="relative h-48">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-3 right-3 bg-accent">
          <TrendingUp className="w-3 h-3 mr-1" />
          {equity}% Equity
        </Badge>
      </div>
      <div className="p-4">
        <h3 className="mb-2">{title}</h3>
        <div className="flex items-center text-muted-foreground mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">Monthly Rent</p>
            <p className="text-primary">R{rent.toLocaleString()}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">{duration} months</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
