import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}



import { FormValues } from "@/components/admin/blog/blog-post-form";

export async function saveBlogPost(formData: FormData) {
  const data: FormValues = {
    title: formData.get("title") as string,
    content: formData.get("content") as string,
    excerpt: formData.get("excerpt") as string,
    author: formData.get("author") as string,
    readTime: formData.get("readTime") as string,
    featuredImage: formData.get("featuredImage") as string,
    isPublished: formData.get("isPublished") === "on",
    isFeatured: formData.get("isFeatured") === "on",
  };

  // TODO: Implement server-side logic (e.g., save to database)
  console.log("Saving blog post:", data);
  return { success: true };
}
