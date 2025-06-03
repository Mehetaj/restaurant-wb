import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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

// Define the form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }),
  price: z.string().min(1, { message: "Price is required." }).refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, {
    message: "Price must be a valid number greater than 0.",
  }),
  category: z.string({ required_error: "Please select a category." }),
  image: z.string().url({ message: "Please enter a valid image URL." }),
  isAvailable: z.boolean().default(true),
  isSpecial: z.boolean().default(false),
  isVegan: z.boolean().default(false),
});

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

// Reusable Form Field Components
const TextInputField = ({ control, name, label, placeholder, type = "text" }: any) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input type={type} placeholder={placeholder} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

const TextareaField = ({ control, name, label, placeholder }: any) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Textarea placeholder={placeholder} className="resize-none" {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

const SelectField = ({ control, name, label, placeholder, options }: any) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {options.map((option: { id: string; name: string }) => (
              <SelectItem key={option.id} value={option.id}>
                {option.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    )}
  />
);

const SwitchField = ({ control, name, label, description }: any) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
        <div className="space-y-0.5">
          <FormLabel className="text-base">{label}</FormLabel>
          <FormDescription>{description}</FormDescription>
        </div>
        <FormControl>
          <Switch checked={field.value} onCheckedChange={field.onChange} />
        </FormControl>
      </FormItem>
    )}
  />
);

export function MenuItemForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      category: "",
      image: "",
      isAvailable: true,
      isSpecial: false,
      isVegan: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate API call or form submission logic
      console.log("Form submitted:", data);
      toast.success("Success", "Menu item saved successfully!");
    } catch (error) {
      toast.error("Error", "Failed to save menu item. Please try again.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto">
        <TextInputField
          control={form.control}
          name="name"
          label="Item Name"
          placeholder="Enter item name"
        />
        <TextInputField
          control={form.control}
          name="price"
          label="Price"
          placeholder="Enter price"
          type="number"
          step="0.01"
        />
        <TextareaField
          control={form.control}
          name="description"
          label="Description"
          placeholder="Enter item description"
        />
        <SelectField
          control={form.control}
          name="category"
          label="Category"
          placeholder="Select a category"
          options={categories}
        />
        <TextInputField
          control={form.control}
          name="image"
          label="Image URL"
          placeholder="Enter image URL"
        />
        <SwitchField
          control={form.control}
          name="isAvailable"
          label="Available"
          description="Make this item available for ordering"
        />
        <SwitchField
          control={form.control}
          name="isSpecial"
          label="Special Item"
          description="Mark this as a special featured item"
        />
        <SwitchField
          control={form.control}
          name="isVegan"
          label="Vegan Option"
          description="This item is suitable for vegans"
        />
        <div className="flex justify-end gap-4">
          <Button variant="outline" type="button" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit">Save Menu Item</Button>
        </div>
      </form>
    </Form>
  );
}