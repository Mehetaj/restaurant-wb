'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/lib/toast-utils";
import { saveBlogPost } from "@/lib/utils";

export interface FormValues {
  title: string;
  content: string;
  excerpt: string;
  author: string;
  readTime: string;
  featuredImage: string;
  isPublished: boolean;
  isFeatured: boolean;
}

interface BlogPostFormProps {
  initialData?: FormValues;
}

export function BlogPostForm({ initialData }: BlogPostFormProps) {
  const [formData, setFormData] = useState<FormValues>({
    title: initialData?.title || "",
    content: initialData?.content || "",
    excerpt: initialData?.excerpt || "",
    author: initialData?.author || "",
    readTime: initialData?.readTime || "",
    featuredImage: initialData?.featuredImage || "",
    isPublished: initialData?.isPublished || false,
    isFeatured: initialData?.isFeatured || false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormValues, string>> = {};
    let isValid = true;

    if (!formData.title || formData.title.length < 2) {
      newErrors.title = "Title must be at least 2 characters.";
      isValid = false;
    }

    if (!formData.content || formData.content.length < 10) {
      newErrors.content = "Content must be at least 10 characters.";
      isValid = false;
    }

    if (!formData.excerpt || formData.excerpt.length < 10) {
      newErrors.excerpt = "Excerpt must be at least 10 characters.";
      isValid = false;
    }

    if (!formData.author || formData.author.length < 2) {
      newErrors.author = "Author name must be at least 2 characters.";
      isValid = false;
    }

    if (!formData.readTime) {
      newErrors.readTime = "Read time is required.";
      isValid = false;
    }

    if (!formData.featuredImage) {
      newErrors.featuredImage = "Image URL is required.";
      isValid = false;
    } else {
      try {
        new URL(formData.featuredImage);
      } catch (e) {
        newErrors.featuredImage = "Please enter a valid image URL.";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormValues]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSwitchChange = (name: keyof FormValues) => (checked: boolean): void => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const response = await saveBlogPost(formData);
        if (response.success) {
          toast.success("Success", "Blog post saved successfully!");
          handleReset();
        } else {
          throw new Error("Failed to save blog post");
        }
      } catch (error) {
        toast.error("Error", "Failed to save blog post. Please try again.");
      }
    }
  };

  const handleReset = (): void => {
    setFormData({
      title: "",
      content: "",
      excerpt: "",
      author: "",
      readTime: "",
      featuredImage: "",
      isPublished: false,
      isFeatured: false,
    });
    setErrors({});
  };

  return (
    <form action={saveBlogPost} onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="space-y-2">
        <label htmlFor="title" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Title
        </label>
        <Input
          id="title"
          name="title"
          placeholder="Enter blog post title"
          value={formData.title}
          onChange={handleChange}
          className={errors.title ? "border-red-500" : ""}
        />
        {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="content" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Content
        </label>
        <Textarea
          id="content"
          name="content"
          placeholder="Write your blog post content"
          className={`min-h-[200px] ${errors.content ? "border-red-500" : ""}`}
          value={formData.content}
          onChange={handleChange}
        />
        {errors.content && <p className="text-sm text-red-500">{errors.content}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="excerpt" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Excerpt
        </label>
        <Textarea
          id="excerpt"
          name="excerpt"
          placeholder="Write a short excerpt"
          className={`min-h-[100px] ${errors.excerpt ? "border-red-500" : ""}`}
          value={formData.excerpt}
          onChange={handleChange}
        />
        <p className="text-sm text-muted-foreground">A brief summary of the blog post</p>
        {errors.excerpt && <p className="text-sm text-red-500">{errors.excerpt}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="author" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Author
          </label>
          <Input
            id="author"
            name="author"
            placeholder="Enter author name"
            value={formData.author}
            onChange={handleChange}
            className={errors.author ? "border-red-500" : ""}
          />
          {errors.author && <p className="text-sm text-red-500">{errors.author}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="readTime" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Read Time
          </label>
          <Input
            id="readTime"
            name="readTime"
            placeholder="e.g., 5 min"
            value={formData.readTime}
            onChange={handleChange}
            className={errors.readTime ? "border-red-500" : ""}
          />
          {errors.readTime && <p className="text-sm text-red-500">{errors.readTime}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="featuredImage" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Featured Image URL
        </label>
        <Input
          id="featuredImage"
          name="featuredImage"
          placeholder="Enter image URL"
          value={formData.featuredImage}
          onChange={handleChange}
          className={errors.featuredImage ? "border-red-500" : ""}
        />
        {errors.featuredImage && <p className="text-sm text-red-500">{errors.featuredImage}</p>}
      </div>

      <div className="flex flex-row items-center justify-between rounded-lg border p-4">
        <div className="space-y-0.5">
          <label htmlFor="isPublished" className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Published
          </label>
          <p className="text-sm text-muted-foreground">Make this post publicly available</p>
        </div>
        <Switch
          id="isPublished"
          name="isPublished"
          checked={formData.isPublished}
          onCheckedChange={handleSwitchChange("isPublished")}
        />
      </div>

      <div className="flex flex-row items-center justify-between rounded-lg border p-4">
        <div className="space-y-0.5">
          <label htmlFor="isFeatured" className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Featured
          </label>
          <p className="text-sm text-muted-foreground">Mark this as a featured post</p>
        </div>
        <Switch
          id="isFeatured"
          name="isFeatured"
          checked={formData.isFeatured}
          onCheckedChange={handleSwitchChange("isFeatured")}
        />
      </div>

      <div className="flex justify-end gap-4">
        <Button variant="outline" type="button" onClick={handleReset}>
          Reset
        </Button>
        <Button type="submit">
          {initialData ? "Update Post" : "Create Post"}
        </Button>
      </div>
    </form>
  );
}