import { BlogPost } from '@/types/blog';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="group bg-white p-4 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 select-text relative overflow-hidden animate-[fadeUp_0.8s_ease-out_forwards] hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        {/* Featured Image */}
        <Link href={`/blog/${post.id}`} className="block">
          <div className="relative w-full h-40 mb-3 rounded-lg overflow-hidden">
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>

        {/* Category Badge */}
        <div className="mb-2">
          <span className="inline-block px-2 py-1 rounded-full bg-green-100 text-green-600 text-xs font-medium">
            {post.category.name}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-green-600 transition-colors line-clamp-2">
          <Link href={`/blog/${post.id}`}>
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Author & Date */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{post.author.fullname}</span>
          <span>{new Date(post.publishedAt).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</span>
        </div>
      </div>
    </div>
  );
} 