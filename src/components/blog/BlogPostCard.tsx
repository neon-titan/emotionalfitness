
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar } from "lucide-react";
import { Post } from "@/data/blogData";

interface BlogPostCardProps {
  post: Post;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <Card className="overflow-hidden border-white/10 bg-white/5 hover:bg-white/10 transition-all group">
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={post.featuredImage} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <Badge className="bg-gradient-to-r from-brand-blue to-brand-purple">
              {post.category.name}
            </Badge>
          </div>
        </div>
      </Link>
      
      <CardContent className="p-6">
        <Link to={`/blog/${post.slug}`} className="block">
          <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-brand-blue transition-colors">
            {post.title}
          </h3>
        </Link>
        
        <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {post.readingTime} min read
          </span>
        </div>
        
        <p className="text-white/80 line-clamp-3 mb-4">{post.excerpt}</p>
        
        <Link 
          to={`/blog/${post.slug}`} 
          className="text-brand-blue font-medium inline-flex items-center hover:underline"
        >
          Read more →
        </Link>
      </CardContent>
    </Card>
  );
};

export default BlogPostCard;
