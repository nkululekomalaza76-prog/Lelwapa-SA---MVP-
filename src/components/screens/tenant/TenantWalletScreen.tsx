import { MobileLayout } from "../../MobileLayout";
import { EquityProgress } from "../../EquityProgress";
import { PaymentCard } from "../../PaymentCard";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { TrendingUp, Download, Eye } from "lucide-react";

const mockPayments = [
  {
    date: "15 Nov 2025",
    amount: 12500,
    status: "paid" as const,
    description: "Monthly Rent - November",
  },
  {
    date: "15 Dec 2025",
    amount: 12500,
    status: "due" as const,
    description: "Monthly Rent - December",
  },
  {
    date: "15 Jan 2026",
    amount: 12500,
    status: "upcoming" as const,
    description: "Monthly Rent - January",
  },
];

export function TenantWalletScreen() {
  return (
    <MobileLayout>
      <div className="p-4 space-y-6">
        <div className="pt-2">
          <h1>My Wallet</h1>
          <p className="text-muted-foreground mt-1">Track your equity growth</p>
        </div>

        {/* Equity Progress */}
        <EquityProgress percentage={18} totalEquity={270000} propertyValue={1500000} />

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">Monthly Equity</span>
            </div>
            <p className="text-xl text-primary">R3,750</p>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">Months Paid</span>
            </div>
            <p className="text-xl text-primary">12 / 60</p>
          </Card>
        </div>

        {/* Milestone Progress */}
        <Card className="p-6">
          <h3 className="mb-4">Next Milestone</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">25% Ownership</span>
              <span className="text-primary">7 months</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all"
                style={{ width: "72%" }}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Keep going! You're R105,000 away from 25% ownership
            </p>
          </div>
        </Card>

        {/* Payment History */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3>Payment History</h3>
            <Button variant="ghost" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>

          <div className="space-y-3">
            {mockPayments.map((payment, index) => (
              <PaymentCard key={index} {...payment} />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pb-4">
          <Button variant="outline" className="h-12 rounded-2xl">
            View Contract
          </Button>
          <Button className="h-12 rounded-2xl bg-primary">
            Record Payment
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}
