'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { BlogPost } from '@/types/blog';
import { blogService } from '@/services/blog';
import Navbar from '@/components/Navbar';

export default function BlogDetail() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await blogService.getPostById(params.id as string);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (params.id) {
      fetchPost();
    }
  }, [params.id]);

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center">Loading...</div>
          </div>
        </div>
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center text-red-600">Post not found</div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <div className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Featured Image */}
          <div className="absolute inset-0">
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
            {/* Category Badge */}
            <div className="inline-block px-4 py-1 rounded-full bg-green-500/20 text-green-300 text-sm font-medium mb-6">
              {post.category.name}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

            {/* Meta Info */}
            <div className="flex items-center justify-center gap-4 text-white/80 text-sm">
              <span>{post.author.fullname}</span>
              <span>•</span>
              <span>{new Date(post.publishedAt).toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-900 prose-strong:text-gray-900 prose-ul:text-gray-900 prose-ol:text-gray-900 prose-a:text-blue-600 [&>*]:text-gray-900">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* Meta Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-4">
              {post.metaKeywords.split(',').map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm"
                >
                  {keyword.trim()}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 