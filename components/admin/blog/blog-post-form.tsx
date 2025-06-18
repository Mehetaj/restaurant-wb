'use client';

import { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/lib/toast-utils";
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  author: string;
  authorRole?: string;
  authorImage?: string;
  image: string;
  slug: string;
  tags?: string[];
  readTime?: string;
}

export function BlogPostForm() {
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    authorImage: "",
    authorRole: "",
    image: "",
    slug: "",
    tags: [],
    readTime: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BlogPost, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BlogPost, string>> = {};
    let valid = true;

    if (!formData.title || formData.title.length < 2) {
      newErrors.title = "Title must be at least 2 characters.";
      valid = false;
    }

    if (!formData.excerpt || formData.excerpt.length < 10) {
      newErrors.excerpt = "Excerpt must be at least 10 characters.";
      valid = false;
    }

    if (!formData.author) {
      newErrors.author = "Author is required.";
      valid = false;
    }

    if (!formData.image) {
      newErrors.image = "Image URL is required.";
      valid = false;
    }

    if (!formData.slug) {
      newErrors.slug = "Slug is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "tags" ? value.split(",").map(tag => tag.trim()) : value,
    }));

    if (errors[name as keyof BlogPost]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newPost: BlogPost = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString(),
      tags: formData.tags || [],
    } as BlogPost;

    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Blog created successfully");
        setFormData({
          title: "",
          excerpt: "",
          content: "",
          author: "",
          authorImage: "",
          authorRole: "",
          image: "",
          slug: "",
          tags: [],
          readTime: "",
        });
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (err) {
      toast.error("Network error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <Input name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
      {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}

      <Textarea name="excerpt" placeholder="Excerpt" value={formData.excerpt} onChange={handleChange} />
      {errors.excerpt && <p className="text-sm text-red-500">{errors.excerpt}</p>}

      {/* Content with React Quill */}
      <div>
        <label className="block text-sm font-medium mb-1">Content</label>
        <ReactQuill
          theme="snow"
          value={formData.content || ""}
          onChange={(value) => setFormData((prev) => ({ ...prev, content: value }))}
          className="bg-white"
          placeholder="Write your blog content here..."
        />
      </div>

      <Input name="author" placeholder="Author" value={formData.author} onChange={handleChange} />
      {errors.author && <p className="text-sm text-red-500">{errors.author}</p>}

      <Input name="authorRole" placeholder="Author Role (optional)" value={formData.authorRole} onChange={handleChange} />

      <Input name="authorImage" placeholder="Author Image URL (optional)" value={formData.authorImage} onChange={handleChange} />

      <Input name="image" placeholder="Blog Image URL" value={formData.image} onChange={handleChange} />
      {errors.image && <p className="text-sm text-red-500">{errors.image}</p>}

      <Input name="slug" placeholder="Slug" value={formData.slug} onChange={handleChange} />
      {errors.slug && <p className="text-sm text-red-500">{errors.slug}</p>}

      <Input name="tags" placeholder="Tags (comma-separated)" value={formData.tags?.join(", ") || ""} onChange={handleChange} />

      <Input name="readTime" placeholder="Read Time (e.g., 5 min)" value={formData.readTime} onChange={handleChange} />

      <Button type="submit">Create Blog Post</Button>
    </form>
  );
}
