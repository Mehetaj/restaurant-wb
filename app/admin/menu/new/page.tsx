import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MenuItemForm } from "@/components/admin/menu/menu-item-form";

export default function NewMenuItemPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Add New Menu Item</h1>
        <p className="text-muted-foreground">
          Create a new menu item for your restaurant
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Menu Item Details</CardTitle>
        </CardHeader>
        <CardContent>
          <MenuItemForm />
        </CardContent>
      </Card>
    </div>
  );
} 