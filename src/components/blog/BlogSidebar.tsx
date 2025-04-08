
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail } from "lucide-react";
import { CATEGORIES, getRecentPosts, Post } from "@/data/blogData";
import { toast } from "@/hooks/use-toast";

const BlogSidebar = () => {
  const [email, setEmail] = useState("");
  const recentPosts = getRecentPosts(4);
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    // This would normally connect to an email service
    console.log("Subscribing email:", email);
    
    toast({
      title: "Thanks for subscribing!",
      description: "Your Emotional Fitness Training Guide will be sent to your inbox shortly.",
    });
    
    // Reset form
    setEmail("");
  };
  
  return (
    <div className="space-y-8 sticky top-24">
      {/* Email Sign-up Card */}
      <Card className="border-white/10 bg-gradient-to-br from-black to-brand-purple/20">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Get the Free Guide</CardTitle>
          <CardDescription className="text-white/70">
            Download the Emotional Fitness Training Guide to start your transformation journey.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubscribe}>
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20"
                required
              />
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-purple hover:to-brand-pink transition-all"
              >
                <Mail className="mr-2 h-4 w-4" />
                Subscribe Now
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="text-xs text-white/50">
          We respect your privacy. Unsubscribe at any time.
        </CardFooter>
      </Card>
      
      {/* Categories */}
      <Card className="border-white/10 bg-white/5">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {CATEGORIES.map((category) => (
              <Link 
                key={category.slug} 
                to={`/blog/category/${category.slug}`}
                className="block py-2 px-3 rounded-md hover:bg-white/10 transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Recent Posts */}
      <Card className="border-white/10 bg-white/5">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Recent Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <RecentPostItem key={post.slug} post={post} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Helper component for recent posts
const RecentPostItem = ({ post }: { post: Post }) => {
  return (
    <Link to={`/blog/${post.slug}`} className="flex gap-3 group">
      <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
        <img 
          src={post.featuredImage} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h4 className="font-medium group-hover:text-brand-blue transition-colors line-clamp-2">
          {post.title}
        </h4>
        <div className="text-xs text-white/60 mt-1">
          {new Date(post.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          })}
        </div>
      </div>
    </Link>
  );
};

export default BlogSidebar;
