'use client';

import { useEffect, useState } from 'react';
import { BlogPost } from '@/types/blog';
import { blogService } from '@/services/blog';
import BlogCard from './BlogCard';

export default function NewsSection() {
  const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);
  const [popularPosts, setPopularPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const [latestResponse, popularResponse] = await Promise.all([
          blogService.getLatestPosts(),
          blogService.getPopularPosts()
        ]);

        setLatestPosts(latestResponse.data);
        setPopularPosts(popularResponse.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <section className="py-16 bg-white relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white relative select-text overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-[url('/pattern-islamic.png')] bg-repeat opacity-[0.03] pointer-events-none"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute left-0 top-1/4 w-72 h-72 bg-green-100 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute right-0 bottom-1/4 w-56 h-56 bg-emerald-100 rounded-full blur-[90px] opacity-20 animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Latest News Section */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center space-x-4 opacity-90 mb-4">
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-green-600/50"></div>
              <span className="text-green-600/80 uppercase tracking-[0.2em] text-xs font-light">
                Berita Terbaru
              </span>
              <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-green-600/50"></div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-600">
              Artikel Terbaru
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Temukan informasi dan tips terbaru seputar perjalanan haji dan umroh
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Popular News Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center space-x-4 opacity-90 mb-4">
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-green-600/50"></div>
              <span className="text-green-600/80 uppercase tracking-[0.2em] text-xs font-light">
                Berita Populer
              </span>
              <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-green-600/50"></div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-600">
              Artikel Populer
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Artikel-artikel menarik yang paling banyak dibaca
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 