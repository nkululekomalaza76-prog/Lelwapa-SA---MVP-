import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card } from "../ui/card";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { useState } from "react";

export function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - redirect based on email
    if (email.includes("landlord")) {
      navigate("/landlord/dashboard");
    } else {
      navigate("/tenant/home");
    }
  };

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

          <h2 className="text-center mb-2">Welcome Back</h2>
          <p className="text-center text-muted-foreground mb-6">
            Log in to continue your journey to homeownership
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-12 rounded-2xl"
              />
            </div>

            <button
              type="button"
              className="text-sm text-primary hover:underline"
            >
              Forgot password?
            </button>

            <Button
              type="submit"
              className="w-full h-12 rounded-2xl bg-primary"
            >
              Log In
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-primary hover:underline"
            >
              Sign up
            </button>
          </p>
        </Card>
      </div>
    </div>
  );
}
