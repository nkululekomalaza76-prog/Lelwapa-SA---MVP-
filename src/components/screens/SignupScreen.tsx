import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card } from "../ui/card";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { useState } from "react";

export function SignupScreen() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<"tenant" | "landlord" | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (userType === "tenant") {
      navigate("/profile-setup");
    } else {
      navigate("/landlord/dashboard");
    }
  };

  if (!userType) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <Card className="p-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Home className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-center mb-2">Join Lelwapa SA</h2>
            <p className="text-center text-muted-foreground mb-8">
              Choose how you'd like to get started
            </p>

            <div className="space-y-3">
              <Card
                className="p-6 cursor-pointer hover:border-primary transition-colors border-2"
                onClick={() => setUserType("tenant")}
              >
                <h3 className="mb-2">I'm a Tenant</h3>
                <p className="text-sm text-muted-foreground">
                  I want to find a home and build equity through rent-to-own
                </p>
              </Card>

              <Card
                className="p-6 cursor-pointer hover:border-primary transition-colors border-2"
                onClick={() => setUserType("landlord")}
              >
                <h3 className="mb-2">I'm a Landlord</h3>
                <p className="text-sm text-muted-foreground">
                  I want to list properties and manage rent-to-own agreements
                </p>
              </Card>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-primary hover:underline"
              >
                Log in
              </button>
            </p>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => setUserType(null)}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <Card className="p-8">
          <h2 className="text-center mb-2">Create Your Account</h2>
          <p className="text-center text-muted-foreground mb-6">
            {userType === "tenant"
              ? "Start your journey to homeownership"
              : "Start managing rent-to-own properties"}
          </p>

          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="h-12 rounded-2xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="h-12 rounded-2xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+27 XX XXX XXXX"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
                className="h-12 rounded-2xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
                className="h-12 rounded-2xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                required
                className="h-12 rounded-2xl"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 rounded-2xl bg-primary"
            >
              Create Account
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
