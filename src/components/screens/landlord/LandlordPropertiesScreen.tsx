import { useState } from "react";
import { WebLayout } from "../../WebLayout";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Badge } from "../../ui/badge";
import {
  Plus,
  Search,
  MapPin,
  Bed,
  Bath,
  DollarSign,
  MoreVertical,
  Edit,
  Eye,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "../../figma/ImageWithFallback";

const mockProperties = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MzE2NDczM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Modern Family Home",
    location: "Sandton, Johannesburg",
    rent: 12500,
    equity: 30,
    bedrooms: 3,
    bathrooms: 2,
    status: "occupied",
    tenant: "Thabo M.",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1761013320045-d29e4f10bcbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJ1cmJhbiUyMGhvbWUlMjBwcm9wZXJ0eXxlbnwxfHx8fDE3NjMyMTEwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Suburban Townhouse",
    location: "Pretoria East",
    rent: 9800,
    equity: 35,
    bedrooms: 2,
    bathrooms: 2,
    status: "occupied",
    tenant: "Sarah K.",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1612637968894-660373e23b03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjMyMDgwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "City Centre Apartment",
    location: "Cape Town CBD",
    rent: 8500,
    equity: 25,
    bedrooms: 1,
    bathrooms: 1,
    status: "vacant",
    tenant: null,
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1758525861536-15fb8a3ee629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBob21lJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NjMyMTEwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Coastal Property",
    location: "Durban North",
    rent: 11000,
    equity: 28,
    bedrooms: 3,
    bathrooms: 2,
    status: "occupied",
    tenant: "Mike J.",
  },
];

export function LandlordPropertiesScreen() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <WebLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1>Properties</h1>
            <p className="text-muted-foreground mt-1">
              Manage your rent-to-own properties
            </p>
          </div>
          <Button
            className="h-12 rounded-2xl bg-primary"
            onClick={() => navigate("/landlord/properties/add")}
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Property
          </Button>
        </div>

        {/* Search & Filter */}
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search properties..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 rounded-2xl"
            />
          </div>
          <Button variant="outline" className="h-12 rounded-2xl">
            All Properties
          </Button>
          <Button variant="outline" className="h-12 rounded-2xl">
            Occupied
          </Button>
          <Button variant="outline" className="h-12 rounded-2xl">
            Vacant
          </Button>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden">
              <div className="relative h-48">
                <ImageWithFallback
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <Badge
                  className={`absolute top-3 right-3 ${
                    property.status === "occupied"
                      ? "bg-green-100 text-green-800"
                      : "bg-orange-100 text-orange-800"
                  }`}
                >
                  {property.status === "occupied" ? "Occupied" : "Vacant"}
                </Badge>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="mb-1">{property.title}</h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{property.location}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-5 h-5" />
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b">
                  <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{property.equity}%</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Monthly Rent</p>
                    <p className="text-primary">
                      R{property.rent.toLocaleString()}
                    </p>
                  </div>
                  {property.tenant && (
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Tenant</p>
                      <p className="text-sm">{property.tenant}</p>
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 h-10 rounded-xl"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 h-10 rounded-xl"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </WebLayout>
  );
}
