import { BlogResponse, BlogPostResponse } from '@/types/blog';

const BASE_URL = 'https://api.grasindotravel.id/api';

export const blogService = {
  /**
   * Fetch 5 most popular blog posts
   */
  async getPopularPosts(): Promise<BlogResponse> {
    const response = await fetch(`${BASE_URL}/blog/posts/popular`);
    if (!response.ok) {
      throw new Error('Failed to fetch popular posts');
    }
    return response.json();
  },

  /**
   * Fetch 5 latest blog posts
   */
  async getLatestPosts(): Promise<BlogResponse> {
    const response = await fetch(`${BASE_URL}/blog/posts/latest`);
    if (!response.ok) {
      throw new Error('Failed to fetch latest posts');
    }
    return response.json();
  },

  /**
   * Fetch a single blog post by ID
   */
  async getPostById(id: string): Promise<BlogPostResponse> {
    const response = await fetch(`${BASE_URL}/blog/posts/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch blog post');
    }
    return response.json();
  }
};
