import { useState } from "react";
import { MobileLayout } from "../../MobileLayout";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Card } from "../../ui/card";
import { Textarea } from "../../ui/textarea";
import { ArrowLeft, Upload, CheckCircle2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

export function ApplicationScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    income: "",
    expenses: "",
    employer: "",
    references: "",
  });

  const handleSubmit = () => {
    setStep(3);
  };

  if (step === 3) {
    return (
      <MobileLayout>
        <div className="p-4">
          <div className="flex flex-col items-center justify-center min-h-[70vh]">
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>

            <h2 className="text-center mb-2">Application Submitted!</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-sm">
              Your application has been sent to the landlord. We'll notify you
              once it's reviewed.
            </p>

            <Card className="w-full p-6 mb-6">
              <h4 className="mb-4">What happens next?</h4>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="mb-1">Landlord Review</p>
                    <p className="text-sm text-muted-foreground">
                      The landlord will review your application and documents
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="mb-1">Verification</p>
                    <p className="text-sm text-muted-foreground">
                      We'll verify your documents and financial information
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="mb-1">Contract Signing</p>
                    <p className="text-sm text-muted-foreground">
                      If approved, you'll receive the contract to review and
                      sign
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Button
              className="w-full h-12 rounded-2xl bg-primary mb-3"
              onClick={() => navigate("/tenant/home")}
            >
              Back to Home
            </Button>
            <Button
              variant="outline"
              className="w-full h-12 rounded-2xl"
              onClick={() => navigate("/tenant/profile")}
            >
              View My Applications
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
          <h2 className="mb-2">Apply for Rent-to-Own</h2>
          <p className="text-muted-foreground">Modern Family Home</p>
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
            <h3 className="mb-4">Financial Information</h3>
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
              </div>

              <div className="space-y-2">
                <Label htmlFor="employer">Current Employer</Label>
                <Input
                  id="employer"
                  placeholder="Company Name"
                  value={formData.employer}
                  onChange={(e) =>
                    setFormData({ ...formData, employer: e.target.value })
                  }
                  className="h-12 rounded-2xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="references">References (Optional)</Label>
                <Textarea
                  id="references"
                  placeholder="Previous landlords or personal references..."
                  value={formData.references}
                  onChange={(e) =>
                    setFormData({ ...formData, references: e.target.value })
                  }
                  className="min-h-32 rounded-2xl"
                />
              </div>

              <Button
                className="w-full h-12 rounded-2xl bg-primary mt-6"
                onClick={() => setStep(2)}
              >
                Continue
              </Button>
            </div>
          </Card>
        )}

        {step === 2 && (
          <Card className="p-6">
            <h3 className="mb-4">Upload Documents</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Please upload the following documents to complete your application
            </p>

            <div className="space-y-4">
              <div className="border-2 border-dashed rounded-2xl p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-1">
                  Upload Payslip (Required)
                </p>
                <p className="text-xs text-muted-foreground">
                  PDF, JPG or PNG (Max 5MB)
                </p>
              </div>

              <div className="border-2 border-dashed rounded-2xl p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-1">
                  Upload ID Copy (Required)
                </p>
                <p className="text-xs text-muted-foreground">
                  PDF, JPG or PNG (Max 5MB)
                </p>
              </div>

              <div className="border-2 border-dashed rounded-2xl p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-1">
                  Upload Bank Statement (Optional)
                </p>
                <p className="text-xs text-muted-foreground">
                  PDF, JPG or PNG (Max 5MB)
                </p>
              </div>

              <Button
                className="w-full h-12 rounded-2xl bg-primary"
                onClick={handleSubmit}
              >
                Submit Application
              </Button>

              <Button
                variant="outline"
                className="w-full h-12 rounded-2xl"
                onClick={() => setStep(1)}
              >
                Back
              </Button>
            </div>
          </Card>
        )}
      </div>
    </MobileLayout>
  );
}
