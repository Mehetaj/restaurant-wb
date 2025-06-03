export type BlogPost = {
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
  };
  
  export const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Science Behind Molecular Gastronomy',
      excerpt: 'Explore how chemistry and physics transform ingredients into culinary masterpieces through innovative techniques.',
      date: 'May 12, 2025',
      author: 'Chef Alexandre',
      authorRole: 'Executive Chef',
      authorImage: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=768&auto=format&fit=crop',
      image: 'https://images.pexels.com/photos/7627405/pexels-photo-7627405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      slug: 'science-behind-molecular-gastronomy',
      tags: ['Molecular Gastronomy', 'Culinary Science', 'Innovation'],
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'The Future of Sustainable Fine Dining',
      excerpt: 'How Ruya is leading the way in sustainable practices while creating futuristic culinary experiences.',
      date: 'April 28, 2025',
      author: 'Emma Torres',
      authorRole: 'Sustainability Director',
      authorImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=768&auto=format&fit=crop',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      slug: 'future-of-sustainable-fine-dining',
      tags: ['Sustainability', 'Fine Dining', 'Future Food'],
      readTime: '4 min read',
    },
    {
      id: 3,
      title: 'Interactive Dining: Beyond the Plate',
      excerpt: 'How multi-sensory experiences are reshaping expectations in modern gastronomy.',
      date: 'April 15, 2025',
      author: 'Dr. Julian Wong',
      authorRole: 'Food Scientist',
      authorImage: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=768&auto=format&fit=crop',
      image: 'https://images.pexels.com/photos/14211881/pexels-photo-14211881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      slug: 'interactive-dining-beyond-the-plate',
      tags: ['Interactive Dining', 'Multi-sensory', 'Experience'],
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Fusion Cuisine: Blending Tradition with Innovation',
      excerpt: 'Discover how our chefs combine traditional cooking methods with cutting-edge techniques to create unique flavor profiles.',
      date: 'April 5, 2025',
      author: 'Sophia Chen',
      authorRole: 'Head of Culinary Innovation',
      authorImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=768&auto=format&fit=crop',
      image: 'https://images.unsplash.com/photo-1547496502-affa22d38842?q=80&w=1287&auto=format&fit=crop',
      slug: 'fusion-cuisine-tradition-innovation',
      tags: ['Fusion Cuisine', 'Culinary Traditions', 'Innovation'],
      readTime: '7 min read',
    },
    {
      id: 5,
      title: 'The Art of Food Presentation',
      excerpt: 'How visual aesthetics enhance the dining experience and influence taste perception.',
      date: 'March 22, 2025',
      author: 'Marcus Johnson',
      authorRole: 'Creative Director',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=768&auto=format&fit=crop',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1287&auto=format&fit=crop',
      slug: 'art-of-food-presentation',
      tags: ['Food Presentation', 'Culinary Arts', 'Visual Design'],
      readTime: '5 min read',
    },
    {
      id: 6,
      title: 'Seasonal Ingredients: The Foundation of Excellence',
      excerpt: 'Why we prioritize seasonal and local ingredients, and how they elevate our menu offerings.',
      date: 'March 10, 2025',
      author: 'Isabella Martinez',
      authorRole: 'Head Chef',
      authorImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=768&auto=format&fit=crop',
      image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1170&auto=format&fit=crop',
      slug: 'seasonal-ingredients-foundation-excellence',
      tags: ['Seasonal Ingredients', 'Local Sourcing', 'Menu Development'],
      readTime: '4 min read',
    },
  ];
  
  export const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags || [])));