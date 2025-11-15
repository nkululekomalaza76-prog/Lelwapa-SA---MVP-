import { useState } from "react";
import { WebLayout } from "../../WebLayout";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
import { ArrowLeft, Upload, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function AddPropertyScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    rent: "",
    propertyValue: "",
    equityPercentage: "",
    duration: "",
    bedrooms: "",
    bathrooms: "",
    sqm: "",
    description: "",
    features: [] as string[],
  });
  const [currentFeature, setCurrentFeature] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/landlord/properties");
  };

  const addFeature = () => {
    if (currentFeature.trim()) {
      setFormData({
        ...formData,
        features: [...formData.features, currentFeature.trim()],
      });
      setCurrentFeature("");
    }
  };

  const removeFeature = (index: number) => {
    setFormData({
      ...formData,
      features: formData.features.filter((_, i) => i !== index),
    });
  };

  return (
    <WebLayout>
      <div className="max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/landlord/properties")}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Properties
        </Button>

        <div className="mb-6">
          <h1>Add New Property</h1>
          <p className="text-muted-foreground mt-1">
            List a property for rent-to-own
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Property Images */}
          <Card className="p-6">
            <h3 className="mb-4">Property Images</h3>
            <div className="border-2 border-dashed rounded-2xl p-12 text-center hover:border-primary transition-colors cursor-pointer">
              <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground mb-2">
                Upload property images
              </p>
              <p className="text-sm text-muted-foreground">
                JPG or PNG (Max 10MB each, up to 10 images)
              </p>
              <Button type="button" className="mt-4 rounded-xl">
                Choose Files
              </Button>
            </div>
          </Card>

          {/* Basic Information */}
          <Card className="p-6">
            <h3 className="mb-4">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="title">Property Title</Label>
                <Input
                  id="title"
                  placeholder="e.g., Modern Family Home"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                  className="h-12 rounded-2xl"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="e.g., Sandton, Johannesburg"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  required
                  className="h-12 rounded-2xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bedrooms">Bedrooms</Label>
                <Input
                  id="bedrooms"
                  type="number"
                  placeholder="3"
                  value={formData.bedrooms}
                  onChange={(e) =>
                    setFormData({ ...formData, bedrooms: e.target.value })
                  }
                  required
                  className="h-12 rounded-2xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bathrooms">Bathrooms</Label>
                <Input
                  id="bathrooms"
                  type="number"
                  placeholder="2"
                  value={formData.bathrooms}
                  onChange={(e) =>
                    setFormData({ ...formData, bathrooms: e.target.value })
                  }
                  required
                  className="h-12 rounded-2xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="sqm">Size (m²)</Label>
                <Input
                  id="sqm"
                  type="number"
                  placeholder="180"
                  value={formData.sqm}
                  onChange={(e) =>
                    setFormData({ ...formData, sqm: e.target.value })
                  }
                  required
                  className="h-12 rounded-2xl"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the property..."
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  required
                  className="min-h-32 rounded-2xl"
                />
              </div>
            </div>
          </Card>

          {/* Rent-to-Own Terms */}
          <Card className="p-6">
            <h3 className="mb-4">Rent-to-Own Terms</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="rent">Monthly Rent (R)</Label>
                <Input
                  id="rent"
                  type="number"
                  placeholder="12,500"
                  value={formData.rent}
                  onChange={(e) =>
                    setFormData({ ...formData, rent: e.target.value })
                  }
                  required
                  className="h-12 rounded-2xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="propertyValue">Property Value (R)</Label>
                <Input
                  id="propertyValue"
                  type="number"
                  placeholder="1,500,000"
                  value={formData.propertyValue}
                  onChange={(e) =>
                    setFormData({ ...formData, propertyValue: e.target.value })
                  }
                  required
                  className="h-12 rounded-2xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="equityPercentage">Equity Percentage (%)</Label>
                <Input
                  id="equityPercentage"
                  type="number"
                  placeholder="30"
                  value={formData.equityPercentage}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      equityPercentage: e.target.value,
                    })
                  }
                  required
                  className="h-12 rounded-2xl"
                />
                <p className="text-xs text-muted-foreground">
                  Percentage of rent that goes towards equity
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Contract Duration (months)</Label>
                <Input
                  id="duration"
                  type="number"
                  placeholder="60"
                  value={formData.duration}
                  onChange={(e) =>
                    setFormData({ ...formData, duration: e.target.value })
                  }
                  required
                  className="h-12 rounded-2xl"
                />
              </div>
            </div>
          </Card>

          {/* Features & Amenities */}
          <Card className="p-6">
            <h3 className="mb-4">Features & Amenities</h3>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Add a feature (e.g., Garden, Pool)"
                  value={currentFeature}
                  onChange={(e) => setCurrentFeature(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addFeature())}
                  className="h-12 rounded-2xl"
                />
                <Button
                  type="button"
                  onClick={addFeature}
                  className="h-12 rounded-2xl"
                >
                  Add
                </Button>
              </div>

              {formData.features.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {formData.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-accent/10 px-3 py-2 rounded-xl"
                    >
                      <span>{feature}</span>
                      <button
                        type="button"
                        onClick={() => removeFeature(index)}
                        className="hover:text-destructive"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Card>

          {/* Submit Buttons */}
          <div className="flex gap-4 justify-end">
            <Button
              type="button"
              variant="outline"
              className="h-12 rounded-2xl"
              onClick={() => navigate("/landlord/properties")}
            >
              Cancel
            </Button>
            <Button type="submit" className="h-12 rounded-2xl bg-primary">
              Add Property
            </Button>
          </div>
        </form>
      </div>
    </WebLayout>
  );
}
