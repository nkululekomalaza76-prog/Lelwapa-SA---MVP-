import { MobileLayout } from "../../MobileLayout";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import {
  User,
  Mail,
  Phone,
  MapPin,
  FileText,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
  Shield,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export function TenantProfileScreen() {
  const navigate = useNavigate();

  const menuItems = [
    {
      icon: FileText,
      label: "My Documents",
      action: () => {},
      badge: "3 files",
    },
    {
      icon: Shield,
      label: "Verification Status",
      action: () => {},
      badge: "Verified",
      badgeVariant: "success" as const,
    },
    {
      icon: Settings,
      label: "Settings",
      action: () => {},
    },
    {
      icon: HelpCircle,
      label: "Help & Support",
      action: () => {},
    },
  ];

  return (
    <MobileLayout>
      <div className="p-4 space-y-6">
        <div className="pt-2">
          <h1>Profile</h1>
          <p className="text-muted-foreground mt-1">Manage your account</p>
        </div>

        {/* Profile Card */}
        <Card className="p-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="mb-1">Thabo Mthembu</h2>
              <p className="text-muted-foreground text-sm">Member since Nov 2024</p>
              <Badge className="mt-2 bg-accent">Premium Tenant</Badge>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <span>thabo.m@email.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-muted-foreground" />
              <span>+27 82 123 4567</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span>Johannesburg, Gauteng</span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full mt-6 h-12 rounded-2xl"
          >
            Edit Profile
          </Button>
        </Card>

        {/* Quick Stats */}
        <Card className="p-6">
          <h3 className="mb-4">Your Journey</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl text-primary mb-1">18%</p>
              <p className="text-xs text-muted-foreground">Equity</p>
            </div>
            <div>
              <p className="text-2xl text-primary mb-1">12</p>
              <p className="text-xs text-muted-foreground">Payments</p>
            </div>
            <div>
              <p className="text-2xl text-primary mb-1">48</p>
              <p className="text-xs text-muted-foreground">To Go</p>
            </div>
          </div>
        </Card>

        {/* Menu Items */}
        <Card className="divide-y">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={item.action}
                className="w-full p-4 flex items-center justify-between hover:bg-accent/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-muted-foreground" />
                  <span>{item.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  {item.badge && (
                    <Badge
                      variant={item.badgeVariant === "success" ? "default" : "secondary"}
                      className={
                        item.badgeVariant === "success"
                          ? "bg-green-100 text-green-800"
                          : ""
                      }
                    >
                      {item.badge}
                    </Badge>
                  )}
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </button>
            );
          })}
        </Card>

        {/* Logout Button */}
        <Button
          variant="outline"
          className="w-full h-12 rounded-2xl text-destructive hover:bg-destructive/10 border-destructive/30"
          onClick={() => navigate("/")}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>

        <div className="text-center text-sm text-muted-foreground pb-4">
          <p>Lelwapa SA v1.0.0</p>
          <p className="mt-1">Made with 💙 in South Africa</p>
        </div>
      </div>
    </MobileLayout>
  );
}
