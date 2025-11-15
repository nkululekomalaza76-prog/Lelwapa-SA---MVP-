import { ReactNode } from "react";
import {
  LayoutDashboard,
  Home,
  FileText,
  FileCheck,
  CreditCard,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";

interface WebLayoutProps {
  children: ReactNode;
  userType?: "landlord" | "admin";
}

export function WebLayout({ children, userType = "landlord" }: WebLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/landlord/dashboard" },
    { icon: Home, label: "Properties", path: "/landlord/properties" },
    { icon: FileText, label: "Applications", path: "/landlord/applications" },
    { icon: FileCheck, label: "Contracts", path: "/landlord/contracts" },
    { icon: CreditCard, label: "Payments", path: "/landlord/payments" },
    { icon: Settings, label: "Settings", path: "/landlord/settings" },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-card border-r border-border transition-all duration-300 flex flex-col`}
      >
        <div className="p-6 border-b border-border flex items-center justify-between">
          {sidebarOpen && (
            <div>
              <h2 className="text-primary">Lelwapa SA</h2>
              <p className="text-xs text-muted-foreground mt-1">
                {userType === "admin" ? "Admin Portal" : "Landlord Portal"}
              </p>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-accent"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border">
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5 mr-3" />
            {sidebarOpen && "Logout"}
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
