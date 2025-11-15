import { Card } from "./ui/card";

interface EquityProgressProps {
  percentage: number;
  totalEquity: number;
  propertyValue: number;
}

export function EquityProgress({
  percentage,
  totalEquity,
  propertyValue,
}: EquityProgressProps) {
  const circumference = 2 * Math.PI * 70;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <Card className="p-6">
      <div className="flex flex-col items-center">
        <div className="relative w-48 h-48 mb-4">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="70"
              stroke="#e5e7eb"
              strokeWidth="12"
              fill="none"
            />
            <circle
              cx="96"
              cy="96"
              r="70"
              stroke="#000080"
              strokeWidth="12"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl text-primary">{percentage}%</span>
            <span className="text-sm text-muted-foreground mt-1">
              Ownership
            </span>
          </div>
        </div>
        <div className="w-full space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Your Equity</span>
            <span className="text-primary">
              R{totalEquity.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Property Value</span>
            <span>R{propertyValue.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
