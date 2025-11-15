import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";

// Auth Screens
import { WelcomeScreen } from "./components/screens/WelcomeScreen";
import { LoginScreen } from "./components/screens/LoginScreen";
import { SignupScreen } from "./components/screens/SignupScreen";
import { ProfileSetupScreen } from "./components/screens/ProfileSetupScreen";

// Tenant Screens
import { TenantHomeScreen } from "./components/screens/tenant/TenantHomeScreen";
import { PropertyDetailScreen } from "./components/screens/tenant/PropertyDetailScreen";
import { AffordabilityCheckScreen } from "./components/screens/tenant/AffordabilityCheckScreen";
import { ApplicationScreen } from "./components/screens/tenant/ApplicationScreen";
import { TenantWalletScreen } from "./components/screens/tenant/TenantWalletScreen";
import { TenantCommunityScreen } from "./components/screens/tenant/TenantCommunityScreen";
import { TenantProfileScreen } from "./components/screens/tenant/TenantProfileScreen";

// Landlord Screens
import { LandlordDashboardScreen } from "./components/screens/landlord/LandlordDashboardScreen";
import { LandlordPropertiesScreen } from "./components/screens/landlord/LandlordPropertiesScreen";
import { AddPropertyScreen } from "./components/screens/landlord/AddPropertyScreen";
import { LandlordApplicationsScreen } from "./components/screens/landlord/LandlordApplicationsScreen";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Routes>
          {/* Auth Routes */}
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/profile-setup" element={<ProfileSetupScreen />} />

          {/* Tenant Routes */}
          <Route path="/tenant/home" element={<TenantHomeScreen />} />
          <Route path="/tenant/property/:id" element={<PropertyDetailScreen />} />
          <Route path="/tenant/affordability" element={<AffordabilityCheckScreen />} />
          <Route path="/tenant/wallet" element={<TenantWalletScreen />} />
          <Route path="/tenant/community" element={<TenantCommunityScreen />} />
          <Route path="/tenant/profile" element={<TenantProfileScreen />} />

          {/* Landlord Routes */}
          <Route path="/landlord/dashboard" element={<LandlordDashboardScreen />} />
          <Route path="/landlord/properties" element={<LandlordPropertiesScreen />} />
          <Route path="/landlord/properties/add" element={<AddPropertyScreen />} />
          <Route path="/landlord/applications" element={<LandlordApplicationsScreen />} />
          <Route path="/landlord/contracts" element={<Navigate to="/landlord/dashboard" />} />
          <Route path="/landlord/payments" element={<Navigate to="/landlord/dashboard" />} />
          <Route path="/landlord/settings" element={<Navigate to="/landlord/dashboard" />} />

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}
