import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, BarChart, DollarSign, TrendingUp } from "lucide-react";

function Index() {
  return (
    <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <DollarSign className="h-6 w-6 text-green-500" />
          <p className="text-2xl font-bold">$10,000</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart className="h-6 w-6 text-red-500" />
          <p className="text-2xl font-bold">$5,000</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Cash Flow</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChart className="h-6 w-6 text-blue-500" />
          <p className="text-2xl font-bold">$3,000</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Profit Margins</CardTitle>
        </CardHeader>
        <CardContent>
          <TrendingUp className="h-6 w-6 text-yellow-500" />
          <p className="text-2xl font-bold">20%</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default Index;