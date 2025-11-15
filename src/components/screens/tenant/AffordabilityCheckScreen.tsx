import { useState } from "react";
import { MobileLayout } from "../../MobileLayout";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Card } from "../../ui/card";
import { ArrowLeft, Upload, CheckCircle2, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function AffordabilityCheckScreen() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    income: "",
    expenses: "",
    desiredRent: "",
  });
  const [result, setResult] = useState<"approved" | "denied" | null>(null);

  const handleCalculate = () => {
    const income = parseFloat(formData.income);
    const expenses = parseFloat(formData.expenses);
    const rent = parseFloat(formData.desiredRent);

    const affordableRent = (income - expenses) * 0.3;

    if (rent <= affordableRent) {
      setResult("approved");
    } else {
      setResult("denied");
    }
    setStep(3);
  };

  if (step === 3 && result) {
    const isApproved = result === "approved";
    const maxAffordable = (parseFloat(formData.income) - parseFloat(formData.expenses)) * 0.3;

    return (
      <MobileLayout>
        <div className="p-4">
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div
              className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 ${
                isApproved
                  ? "bg-green-100"
                  : "bg-red-100"
              }`}
            >
              {isApproved ? (
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              ) : (
                <XCircle className="w-12 h-12 text-red-600" />
              )}
            </div>

            <h2 className="text-center mb-2">
              {isApproved ? "You're Approved!" : "Not Quite Yet"}
            </h2>
            <p className="text-center text-muted-foreground mb-6 max-w-sm">
              {isApproved
                ? "Great news! You can afford properties in this range."
                : `Your budget allows for properties up to R${maxAffordable.toFixed(0)}/month`}
            </p>

            <Card className="w-full p-6 mb-6">
              <h4 className="mb-4">Your Affordability Summary</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monthly Income</span>
                  <span>R{parseFloat(formData.income).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monthly Expenses</span>
                  <span>R{parseFloat(formData.expenses).toLocaleString()}</span>
                </div>
                <div className="flex justify-between pt-3 border-t">
                  <span className="text-muted-foreground">Max Affordable Rent</span>
                  <span className="text-primary">
                    R{maxAffordable.toFixed(0)}
                  </span>
                </div>
              </div>
            </Card>

            <Button
              className="w-full h-12 rounded-2xl bg-primary mb-3"
              onClick={() => navigate("/tenant/home")}
            >
              {isApproved ? "Browse Properties" : "See Affordable Homes"}
            </Button>
            <Button
              variant="outline"
              className="w-full h-12 rounded-2xl"
              onClick={() => {
                setStep(1);
                setResult(null);
              }}
            >
              Check Again
            </Button>
          </div>
        </div>
      </MobileLayout>
    );
  }

  return (
    <MobileLayout>
      <div className="p-4">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="mb-6">
          <h2 className="mb-2">Affordability Check</h2>
          <p className="text-muted-foreground">
            Let's see what you can afford
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 1 ? "bg-primary text-white" : "bg-muted"
              }`}
            >
              1
            </div>
            <div className={`w-12 h-1 ${step >= 2 ? "bg-primary" : "bg-muted"}`} />
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 2 ? "bg-primary text-white" : "bg-muted"
              }`}
            >
              2
            </div>
          </div>
        </div>

        {step === 1 && (
          <Card className="p-6">
            <h3 className="mb-4">Your Finances</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="income">Monthly Income (R)</Label>
                <Input
                  id="income"
                  type="number"
                  placeholder="15,000"
                  value={formData.income}
                  onChange={(e) =>
                    setFormData({ ...formData, income: e.target.value })
                  }
                  className="h-12 rounded-2xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="expenses">Monthly Expenses (R)</Label>
                <Input
                  id="expenses"
                  type="number"
                  placeholder="5,000"
                  value={formData.expenses}
                  onChange={(e) =>
                    setFormData({ ...formData, expenses: e.target.value })
                  }
                  className="h-12 rounded-2xl"
                />
                <p className="text-xs text-muted-foreground">
                  Include all bills, groceries, transport, etc.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="rent">Desired Monthly Rent (R)</Label>
                <Input
                  id="rent"
                  type="number"
                  placeholder="8,000"
                  value={formData.desiredRent}
                  onChange={(e) =>
                    setFormData({ ...formData, desiredRent: e.target.value })
                  }
                  className="h-12 rounded-2xl"
                />
              </div>

              <Button
                className="w-full h-12 rounded-2xl bg-primary mt-6"
                onClick={() => setStep(2)}
                disabled={
                  !formData.income || !formData.expenses || !formData.desiredRent
                }
              >
                Continue
              </Button>
            </div>
          </Card>
        )}

        {step === 2 && (
          <Card className="p-6">
            <h3 className="mb-4">Upload Documents (Optional)</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Upload your payslip or ID to speed up future applications
            </p>

            <div className="space-y-4">
              <div className="border-2 border-dashed rounded-2xl p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-1">
                  Upload Payslip
                </p>
                <p className="text-xs text-muted-foreground">
                  PDF, JPG or PNG (Max 5MB)
                </p>
              </div>

              <div className="border-2 border-dashed rounded-2xl p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-1">Upload ID</p>
                <p className="text-xs text-muted-foreground">
                  PDF, JPG or PNG (Max 5MB)
                </p>
              </div>

              <Button
                className="w-full h-12 rounded-2xl bg-primary"
                onClick={handleCalculate}
              >
                Calculate Affordability
              </Button>

              <Button
                variant="outline"
                className="w-full h-12 rounded-2xl"
                onClick={handleCalculate}
              >
                Skip for Now
              </Button>
            </div>
          </Card>
        )}
      </div>
    </MobileLayout>
  );
}
