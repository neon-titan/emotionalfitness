
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Post } from "@/data/blogData";

interface RelatedPostsProps {
  posts: Post[];
}

const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  if (posts.length === 0) return null;
  
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card 
            key={post.slug} 
            className="border-white/10 bg-white/5 hover:bg-white/10 transition-all group overflow-hidden"
          >
            <Link to={`/blog/${post.slug}`} className="block">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.featuredImage} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <CardContent className="p-4">
                <Badge 
                  className="mb-2 bg-gradient-to-r from-brand-blue to-brand-purple"
                  variant="secondary"
                >
                  {post.category.name}
                </Badge>
                <h3 className="font-bold group-hover:text-brand-blue transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
