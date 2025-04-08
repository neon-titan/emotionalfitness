
import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import AuthorBio from "@/components/blog/AuthorBio";
import BlogSidebar from "@/components/blog/BlogSidebar";
import RelatedPosts from "@/components/blog/RelatedPosts";
import SocialShare from "@/components/blog/SocialShare";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getPostBySlug, getRelatedPosts, Post } from "@/data/blogData";
import { Clock, Calendar } from "lucide-react";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  
  useEffect(() => {
    if (slug) {
      const foundPost = getPostBySlug(slug);
      if (foundPost) {
        setPost(foundPost);
        setRelatedPosts(getRelatedPosts(foundPost, 3));
        // Scroll to top on post load
        window.scrollTo(0, 0);
      }
    }
  }, [slug]);

  if (!slug) return <Navigate to="/blog" />;
  if (!post) return <Navigate to="/blog" />;

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title={`${post.title} | Emotional Fitness Blog`}
        description={post.excerpt}
        keywords={post.keywords.join(", ")}
        image={post.featuredImage}
      />
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <article className="w-full lg:w-2/3">
              {/* Back to blog button */}
              <Link to="/blog" className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors">
                ← Back to all articles
              </Link>
              
              {/* Category badge */}
              <Link to={`/blog/category/${post.category.slug}`}>
                <Badge className="mb-4 bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-purple hover:to-brand-pink">
                  {post.category.name}
                </Badge>
              </Link>
              
              {/* Post title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
              
              {/* Post meta */}
              <div className="flex flex-wrap items-center gap-4 text-white/60 mb-8">
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} />
                  {post.readingTime} min read
                </span>
              </div>
              
              {/* Featured image */}
              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src={post.featuredImage} 
                  alt={post.title}
                  className="w-full h-auto max-h-[500px] object-cover"
                />
              </div>

              {/* Social share buttons (top) */}
              <div className="mb-8">
                <SocialShare post={post} />
              </div>
              
              {/* Post content */}
              <div 
                className="prose prose-invert prose-lg max-w-none mb-10"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="border-white/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Social share buttons (bottom) */}
              <div className="mb-10">
                <SocialShare post={post} />
              </div>
              
              {/* Call to action */}
              <Card className="p-8 mb-10 bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Ready to improve your emotional fitness?</h3>
                <p className="text-white/80 mb-6">Schedule a personalized 1:1 session and start your emotional fitness journey today.</p>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-purple hover:to-brand-pink transition-all"
                  onClick={() => window.open('https://calendly.com/alan-muellegger/emotional-fitness-session', '_blank')}
                >
                  Book a Free Consultation
                </Button>
              </Card>
              
              {/* Author bio */}
              <AuthorBio />
              
              {/* Related posts */}
              <RelatedPosts posts={relatedPosts} />
            </article>
            
            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;
