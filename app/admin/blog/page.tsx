'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Calendar, 
  User, 
  Clock,
  Tag,
  X,
  ImageIcon
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { BlogPostsTable } from '@/components/admin/blog/blog-posts-table'
import { blogPosts } from '@/lib/blog-data'

// Import blog data from the blog page
// import { blogPosts } from '@/app/blog/page'

export default function BlogManagement() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [currentPost, setCurrentPost] = useState<any>(null)
  const [newPost, setNewPost] = useState({
    title: '',
    excerpt: '',
    content: '',
    date: new Date().toISOString().split('T')[0],
    author: 'Admin User',
    authorRole: 'Restaurant Manager',
    image: '',
    tags: '',
    readTime: '5 min'
  })
  
  // Filter blog posts based on search term
  const filteredPosts = blogPosts.filter(post => {
    return post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
           post.author.toLowerCase().includes(searchTerm.toLowerCase())
  })
  
  const handleEditClick = (post: any) => {
    setCurrentPost({
      ...post,
      tags: post.tags ? post.tags.join(', ') : ''
    })
    setIsEditDialogOpen(true)
  }
  
  const handleDeleteClick = (post: any) => {
    setCurrentPost(post)
    setIsDeleteDialogOpen(true)
  }
  
  const handleAddPost = () => {
    // In a real app, this would make an API call to add the post
    console.log('Adding new post:', {
      ...newPost,
      tags: newPost.tags ? newPost.tags.split(',').map(tag => tag.trim()) : [],
      slug: newPost.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
    })
    setIsAddDialogOpen(false)
    // Reset form
    setNewPost({
      title: '',
      excerpt: '',
      content: '',
      date: new Date().toISOString().split('T')[0],
      author: 'Admin User',
      authorRole: 'Restaurant Manager',
      image: '',
      tags: '',
      readTime: '5 min'
    })
  }
  
  const handleUpdatePost = () => {
    // In a real app, this would make an API call to update the post
    console.log('Updating post:', {
      ...currentPost,
      tags: typeof currentPost.tags === 'string' 
        ? currentPost.tags.split(',').map((tag: string) => tag.trim())
        : currentPost.tags
    })
    setIsEditDialogOpen(false)
  }
  
  const handleDeletePost = () => {
    // In a real app, this would make an API call to delete the post
    console.log('Deleting post:', currentPost)
    setIsDeleteDialogOpen(false)
  }
  
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blog Management</h1>
          <p className="text-muted-foreground">
            Manage your restaurant blog posts and articles
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/blog/new">
            <Plus className="mr-2 h-4 w-4" />
            New Blog Post
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Blog Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <BlogPostsTable />
        </CardContent>
      </Card>
    </div>
  )
}