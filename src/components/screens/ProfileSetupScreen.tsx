import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card } from "../ui/card";
import { useNavigate } from "react-router-dom";
import { Upload } from "lucide-react";
import { useState } from "react";

export function ProfileSetupScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    monthlyIncome: "",
    monthlyExpenses: "",
    location: "",
  });

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/tenant/home");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <Card className="p-8">
          <h2 className="text-center mb-2">Complete Your Profile</h2>
          <p className="text-center text-muted-foreground mb-6">
            Help us find homes that match your budget
          </p>

          <form onSubmit={handleComplete} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="income">Monthly Income (R)</Label>
              <Input
                id="income"
                type="number"
                placeholder="15,000"
                value={formData.monthlyIncome}
                onChange={(e) =>
                  setFormData({ ...formData, monthlyIncome: e.target.value })
                }
                required
                className="h-12 rounded-2xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="expenses">Monthly Expenses (R)</Label>
              <Input
                id="expenses"
                type="number"
                placeholder="5,000"
                value={formData.monthlyExpenses}
                onChange={(e) =>
                  setFormData({ ...formData, monthlyExpenses: e.target.value })
                }
                required
                className="h-12 rounded-2xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Preferred Location</Label>
              <Input
                id="location"
                placeholder="Johannesburg, Gauteng"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                required
                className="h-12 rounded-2xl"
              />
            </div>

            <div className="space-y-2">
              <Label>Upload Documents (Optional)</Label>
              <div className="border-2 border-dashed rounded-2xl p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-1">
                  Upload Payslip or ID
                </p>
                <p className="text-xs text-muted-foreground">
                  PDF, JPG or PNG (Max 5MB)
                </p>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 rounded-2xl bg-primary"
            >
              Complete Setup
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
