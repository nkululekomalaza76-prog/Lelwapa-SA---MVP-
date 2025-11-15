import { useState } from "react";
import { WebLayout } from "../../WebLayout";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Badge } from "../../ui/badge";
import { Search, Eye, Check, X, Download } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";

const mockApplications = [
  {
    id: "1",
    applicantName: "John Doe",
    email: "john.doe@email.com",
    phone: "+27 82 123 4567",
    property: "Modern Family Home",
    monthlyIncome: 25000,
    monthlyExpenses: 8000,
    status: "pending",
    appliedDate: "12 Nov 2025",
    documents: ["Payslip", "ID Copy", "Bank Statement"],
  },
  {
    id: "2",
    applicantName: "Sarah Smith",
    email: "sarah.smith@email.com",
    phone: "+27 83 234 5678",
    property: "Suburban Townhouse",
    monthlyIncome: 18000,
    monthlyExpenses: 5500,
    status: "approved",
    appliedDate: "10 Nov 2025",
    documents: ["Payslip", "ID Copy"],
  },
  {
    id: "3",
    applicantName: "Mike Johnson",
    email: "mike.j@email.com",
    phone: "+27 84 345 6789",
    property: "City Centre Apartment",
    monthlyIncome: 15000,
    monthlyExpenses: 7000,
    status: "pending",
    appliedDate: "9 Nov 2025",
    documents: ["Payslip", "ID Copy", "Reference Letter"],
  },
  {
    id: "4",
    applicantName: "Lisa Brown",
    email: "lisa.brown@email.com",
    phone: "+27 85 456 7890",
    property: "Coastal Property",
    monthlyIncome: 12000,
    monthlyExpenses: 6000,
    status: "rejected",
    appliedDate: "8 Nov 2025",
    documents: ["Payslip"],
  },
];

export function LandlordApplicationsScreen() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedApplication, setSelectedApplication] = useState<any>(null);

  const filteredApplications = mockApplications.filter((app) => {
    if (filter !== "all" && app.status !== filter) return false;
    if (
      searchQuery &&
      !app.applicantName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !app.property.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const getStatusBadge = (status: string) => {
    const config = {
      pending: "bg-orange-100 text-orange-800",
      approved: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800",
    };
    return config[status as keyof typeof config];
  };

  return (
    <WebLayout>
      <div className="space-y-6">
        <div>
          <h1>Applications</h1>
          <p className="text-muted-foreground mt-1">
            Review and manage tenant applications
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className="h-12 rounded-2xl"
          >
            All Applications
          </Button>
          <Button
            variant={filter === "pending" ? "default" : "outline"}
            onClick={() => setFilter("pending")}
            className="h-12 rounded-2xl"
          >
            Pending
          </Button>
          <Button
            variant={filter === "approved" ? "default" : "outline"}
            onClick={() => setFilter("approved")}
            className="h-12 rounded-2xl"
          >
            Approved
          </Button>
          <Button
            variant={filter === "rejected" ? "default" : "outline"}
            onClick={() => setFilter("rejected")}
            className="h-12 rounded-2xl"
          >
            Rejected
          </Button>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search applications..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 rounded-2xl"
          />
        </div>

        {/* Applications List */}
        <Card>
          <div className="divide-y">
            {filteredApplications.map((application) => (
              <div key={application.id} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3>{application.applicantName}</h3>
                      <Badge className={getStatusBadge(application.status)}>
                        {application.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-1">
                      {application.property}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Applied on {application.appliedDate}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-xl"
                      onClick={() => setSelectedApplication(application)}
                    >
                      <Eye className="w-5 h-5" />
                    </Button>
                    {application.status === "pending" && (
                      <>
                        <Button
                          size="icon"
                          className="h-10 w-10 rounded-xl bg-green-600 hover:bg-green-700"
                        >
                          <Check className="w-5 h-5" />
                        </Button>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-10 w-10 rounded-xl border-red-300 text-red-600 hover:bg-red-50"
                        >
                          <X className="w-5 h-5" />
                        </Button>
                      </>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 mt-4 pt-4 border-t">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Income</p>
                    <p>R{application.monthlyIncome.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Expenses</p>
                    <p>R{application.monthlyExpenses.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Net Income</p>
                    <p className="text-green-600">
                      R
                      {(
                        application.monthlyIncome - application.monthlyExpenses
                      ).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Documents</p>
                    <p>{application.documents.length} files</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Application Detail Dialog */}
      <Dialog
        open={!!selectedApplication}
        onOpenChange={() => setSelectedApplication(null)}
      >
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Application Details</DialogTitle>
          </DialogHeader>

          {selectedApplication && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Name</p>
                  <p>{selectedApplication.applicantName}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Status</p>
                  <Badge className={getStatusBadge(selectedApplication.status)}>
                    {selectedApplication.status}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p>{selectedApplication.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <p>{selectedApplication.phone}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-muted-foreground mb-1">Property</p>
                  <p>{selectedApplication.property}</p>
                </div>
              </div>

              <Card className="p-4 bg-accent/5">
                <h4 className="mb-3">Financial Summary</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Monthly Income
                    </p>
                    <p className="text-lg">
                      R{selectedApplication.monthlyIncome.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Monthly Expenses
                    </p>
                    <p className="text-lg">
                      R{selectedApplication.monthlyExpenses.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Net Income
                    </p>
                    <p className="text-lg text-green-600">
                      R
                      {(
                        selectedApplication.monthlyIncome -
                        selectedApplication.monthlyExpenses
                      ).toLocaleString()}
                    </p>
                  </div>
                </div>
              </Card>

              <div>
                <h4 className="mb-3">Documents</h4>
                <div className="space-y-2">
                  {selectedApplication.documents.map((doc: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border rounded-xl"
                    >
                      <span>{doc}</span>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {selectedApplication.status === "pending" && (
                <div className="flex gap-3 pt-4 border-t">
                  <Button
                    className="flex-1 h-12 rounded-2xl bg-green-600 hover:bg-green-700"
                  >
                    <Check className="w-5 h-5 mr-2" />
                    Approve Application
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 h-12 rounded-2xl border-red-300 text-red-600 hover:bg-red-50"
                  >
                    <X className="w-5 h-5 mr-2" />
                    Reject Application
                  </Button>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </WebLayout>
  );
}
