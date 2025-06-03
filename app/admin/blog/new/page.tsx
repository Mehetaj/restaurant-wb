import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogPostForm } from "@/components/admin/blog/blog-post-form";

export default function NewBlogPostPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">New Blog Post</h1>
        <p className="text-muted-foreground">
          Create a new blog post for your restaurant website.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Blog Post Details</CardTitle>
        </CardHeader>
        <CardContent>
          <BlogPostForm
            onSubmit={(values) => {
              // TODO: Implement blog post creation
              console.log(values);
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
} 