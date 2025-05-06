export interface FeaturedImage {
  path: string;
  url: string;
}

export interface Author {
  id: string;
  fullname: string;
  email: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: FeaturedImage;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  status: "published" | "draft";
  publishedAt: string;
  authorId: string;
  categoryId: string;
  viewCount: number;
  createdAt: string;
  updatedAt: string;
  author: Author;
  category: Category;
  deletedAt: string | null;
}

export interface BlogResponse {
  status: string;
  data: BlogPost[];
}

export interface BlogPostResponse {
  status: string;
  data: BlogPost;
}
