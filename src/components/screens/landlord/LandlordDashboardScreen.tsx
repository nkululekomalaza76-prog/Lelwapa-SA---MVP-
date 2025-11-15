import { WebLayout } from "../../WebLayout";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import {
  Home,
  Users,
  DollarSign,
  FileText,
  TrendingUp,
  AlertCircle,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { month: "Jun", revenue: 45000 },
  { month: "Jul", revenue: 52000 },
  { month: "Aug", revenue: 48000 },
  { month: "Sep", revenue: 61000 },
  { month: "Oct", revenue: 55000 },
  { month: "Nov", revenue: 73000 },
];

const propertyData = [
  { name: "Property 1", occupancy: 100 },
  { name: "Property 2", occupancy: 100 },
  { name: "Property 3", occupancy: 85 },
  { name: "Property 4", occupancy: 100 },
];

const recentApplications = [
  {
    name: "John Doe",
    property: "Modern Family Home",
    status: "pending",
    date: "2 hours ago",
  },
  {
    name: "Sarah Smith",
    property: "Suburban Townhouse",
    status: "approved",
    date: "1 day ago",
  },
  {
    name: "Mike Johnson",
    property: "City Centre Apartment",
    status: "pending",
    date: "2 days ago",
  },
];

export function LandlordDashboardScreen() {
  return (
    <WebLayout>
      <div className="space-y-6">
        <div>
          <h1>Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's your property overview
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-green-600">+2 this month</span>
            </div>
            <p className="text-3xl mb-1">12</p>
            <p className="text-sm text-muted-foreground">Total Properties</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm text-green-600">+3 this month</span>
            </div>
            <p className="text-3xl mb-1">28</p>
            <p className="text-sm text-muted-foreground">Active Tenants</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm text-green-600">+12%</span>
            </div>
            <p className="text-3xl mb-1">R73,000</p>
            <p className="text-sm text-muted-foreground">Monthly Revenue</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <span className="text-sm text-orange-600">Pending</span>
            </div>
            <p className="text-3xl mb-1">7</p>
            <p className="text-sm text-muted-foreground">Applications</p>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3>Revenue Overview</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Last 6 months
                </p>
              </div>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#000080"
                  strokeWidth={3}
                  dot={{ fill: "#000080", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3>Property Occupancy</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Current status
                </p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={propertyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip />
                <Bar dataKey="occupancy" fill="#6495ED" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Recent Applications & Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3>Recent Applications</h3>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {recentApplications.map((app, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border border-border rounded-2xl hover:border-primary transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p>{app.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {app.property}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">
                      {app.date}
                    </span>
                    {app.status === "pending" ? (
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-xl text-sm">
                        Pending
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-xl text-sm">
                        Approved
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-6">Quick Actions</h3>
            <div className="space-y-3">
              <Button className="w-full justify-start h-12 rounded-2xl bg-primary">
                <Home className="w-5 h-5 mr-3" />
                Add Property
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start h-12 rounded-2xl"
              >
                <FileText className="w-5 h-5 mr-3" />
                View Applications
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start h-12 rounded-2xl"
              >
                <DollarSign className="w-5 h-5 mr-3" />
                Payment Reports
              </Button>
            </div>

            <div className="mt-8 p-4 bg-orange-50 border border-orange-200 rounded-2xl">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm">
                    <span className="text-orange-900">Action Required:</span>
                    <span className="text-orange-700">
                      {" "}
                      2 contracts pending signature
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </WebLayout>
  );
}
