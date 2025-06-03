'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { categories } from "@/lib/menu-data";
import { toast } from "@/lib/toast-utils";

// Define TypeScript interface for form data
interface FormData {
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  isAvailable: boolean;
  isSpecial: boolean;
  isVegan: boolean;
}

export function MenuItemForm() {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    isAvailable: true,
    isSpecial: false,
    isVegan: false,
  });

  // Form validation errors
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  // Handle select changes
  const handleSelectChange = (value: string, name: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user selects
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  // Handle switch changes
  const handleSwitchChange = (checked: boolean, name: string) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    let isValid = true;

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
      isValid = false;
    }

    if (!formData.description || formData.description.length < 10) {
      newErrors.description = "Description must be at least 10 characters.";
      isValid = false;
    }

    if (!formData.price) {
      newErrors.price = "Price is required.";
      isValid = false;
    } else if (isNaN(parseFloat(formData.price)) || parseFloat(formData.price) <= 0) {
      newErrors.price = "Price must be a valid number greater than 0.";
      isValid = false;
    }

    if (!formData.category) {
      newErrors.category = "Please select a category.";
      isValid = false;
    }

    if (!formData.image) {
      newErrors.image = "Image URL is required.";
      isValid = false;
    } else {
      try {
        new URL(formData.image);
      } catch (e) {
        newErrors.image = "Please enter a valid image URL.";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        // Simulate API call or form submission logic
        console.log("Form submitted:", formData);
        toast.success("Success", "Menu item saved successfully!");
      } catch (error) {
        toast.error("Error", "Failed to save menu item. Please try again.");
      }
    }
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      name: "",
      description: "",
      price: "",
      category: "",
      image: "",
      isAvailable: true,
      isSpecial: false,
      isVegan: false,
    });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      {/* Item Name */}
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Item Name
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter item name"
          className={errors.name ? "border-red-500" : ""}
        />
        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
      </div>

      {/* Price */}
      <div className="space-y-2">
        <label htmlFor="price" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Price
        </label>
        <Input
          id="price"
          name="price"
          type="number"
          step="0.01"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter price"
          className={errors.price ? "border-red-500" : ""}
        />
        {errors.price && <p className="text-sm text-red-500">{errors.price}</p>}
      </div>

      {/* Description */}
      <div className="space-y-2">
        <label htmlFor="description" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Description
        </label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter item description"
          className={`resize-none ${errors.description ? "border-red-500" : ""}`}
        />
        {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
      </div>

      {/* Category */}
      <div className="space-y-2">
        <label htmlFor="category" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Category
        </label>
        <Select 
          value={formData.category} 
          onValueChange={(value) => handleSelectChange(value, "category")}
        >
          <SelectTrigger className={errors.category ? "border-red-500" : ""}>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.category && <p className="text-sm text-red-500">{errors.category}</p>}
      </div>

      {/* Image URL */}
      <div className="space-y-2">
        <label htmlFor="image" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Image URL
        </label>
        <Input
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Enter image URL"
          className={errors.image ? "border-red-500" : ""}
        />
        {errors.image && <p className="text-sm text-red-500">{errors.image}</p>}
      </div>

      {/* Available Switch */}
      <div className="flex flex-row items-center justify-between rounded-lg border p-4">
        <div className="space-y-0.5">
          <label htmlFor="isAvailable" className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Available
          </label>
          <p className="text-sm text-muted-foreground">Make this item available for ordering</p>
        </div>
        <Switch
          id="isAvailable"
          checked={formData.isAvailable}
          onCheckedChange={(checked) => handleSwitchChange(checked, "isAvailable")}
        />
      </div>

      {/* Special Item Switch */}
      <div className="flex flex-row items-center justify-between rounded-lg border p-4">
        <div className="space-y-0.5">
          <label htmlFor="isSpecial" className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Special Item
          </label>
          <p className="text-sm text-muted-foreground">Mark this as a special featured item</p>
        </div>
        <Switch
          id="isSpecial"
          checked={formData.isSpecial}
          onCheckedChange={(checked) => handleSwitchChange(checked, "isSpecial")}
        />
      </div>

      {/* Vegan Option Switch */}
      <div className="flex flex-row items-center justify-between rounded-lg border p-4">
        <div className="space-y-0.5">
          <label htmlFor="isVegan" className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Vegan Option
          </label>
          <p className="text-sm text-muted-foreground">This item is suitable for vegans</p>
        </div>
        <Switch
          id="isVegan"
          checked={formData.isVegan}
          onCheckedChange={(checked) => handleSwitchChange(checked, "isVegan")}
        />
      </div>

      {/* Form Actions */}
      <div className="flex justify-end gap-4">
        <Button variant="outline" type="button" onClick={handleReset}>
          Reset
        </Button>
        <Button type="submit">Save Menu Item</Button>
      </div>
    </form>
  );
}