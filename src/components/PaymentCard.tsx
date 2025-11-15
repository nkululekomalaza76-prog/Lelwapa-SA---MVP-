import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, CheckCircle2, Clock } from "lucide-react";

interface PaymentCardProps {
  date: string;
  amount: number;
  status: "paid" | "due" | "upcoming";
  description: string;
}

export function PaymentCard({
  date,
  amount,
  status,
  description,
}: PaymentCardProps) {
  const statusConfig = {
    paid: {
      icon: CheckCircle2,
      label: "Paid",
      className: "bg-green-100 text-green-800 border-green-200",
    },
    due: {
      icon: Clock,
      label: "Due",
      className: "bg-red-100 text-red-800 border-red-200",
    },
    upcoming: {
      icon: Calendar,
      label: "Upcoming",
      className: "bg-blue-100 text-blue-800 border-blue-200",
    },
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <Card className="p-4">
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="text-sm text-muted-foreground">{date}</p>
          <h4 className="mt-1">{description}</h4>
        </div>
        <Badge className={config.className} variant="outline">
          <Icon className="w-3 h-3 mr-1" />
          {config.label}
        </Badge>
      </div>
      <div className="text-right">
        <p className="text-primary">R{amount.toLocaleString()}</p>
      </div>
    </Card>
  );
}
