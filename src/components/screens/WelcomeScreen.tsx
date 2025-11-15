import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { Home, Heart } from "lucide-react";

export function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-accent flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center text-white space-y-8">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
            <Home className="w-12 h-12 text-primary" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl">Lelwapa SA</h1>
          <p className="text-xl opacity-90">Your home. Your rent.</p>
          <p className="text-sm opacity-80 max-w-sm mx-auto px-4">
            Turn your rent into ownership. Build equity with every payment and
            own your home sooner.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm opacity-90">
          <Heart className="w-4 h-4" />
          <span>Empowering South African homeowners</span>
        </div>

        <div className="space-y-3 pt-4">
          <Button
            className="w-full bg-white text-primary hover:bg-white/90 h-12 rounded-2xl"
            onClick={() => navigate("/login")}
          >
            Log In
          </Button>
          <Button
            variant="outline"
            className="w-full border-2 border-white text-white hover:bg-white/10 h-12 rounded-2xl"
            onClick={() => navigate("/signup")}
          >
            Create Account
          </Button>
        </div>

        <p className="text-xs opacity-70 pt-4">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}
