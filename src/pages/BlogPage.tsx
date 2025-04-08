
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogPostCard from "@/components/blog/BlogPostCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { getAllPosts, getPostsByCategory, searchPosts, Post, CATEGORIES } from "@/data/blogData";
import { Search } from "lucide-react";

const BlogPage = () => {
  const { category } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  
  // Get search query from URL if exists
  useEffect(() => {
    const query = new URLSearchParams(location.search).get("q");
    if (query) {
      setSearchQuery(query);
    }
  }, [location.search]);

  // Fetch posts based on category or search query
  useEffect(() => {
    let fetchedPosts;
    
    if (searchQuery) {
      fetchedPosts = searchPosts(searchQuery);
    } else if (category) {
      fetchedPosts = getPostsByCategory(category);
    } else {
      fetchedPosts = getAllPosts();
    }
    
    setPosts(fetchedPosts);
    setCurrentPage(1);
  }, [category, searchQuery]);

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/blog?q=${encodeURIComponent(searchQuery)}`);
  };

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Blog & Resources | Emotional Fitness Training | Alan Muellegger"
        description="Explore articles, guides, and resources on emotional fitness, resilience building, and peak performance strategies for high performers, entrepreneurs, and executives."
        keywords="emotional fitness blog, resilience resources, peak performance articles, emotional regulation, Alan Muellegger"
      />
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">BLOG & RESOURCES</span>
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Actionable insights and strategies to optimize your emotions for peak performance in all areas of your life.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="mt-8 max-w-md mx-auto">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/5 border-white/20 pr-10"
                />
                <Button 
                  type="submit" 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-0 top-0 h-full"
                >
                  <Search className="h-5 w-5 text-white/70" />
                </Button>
              </div>
            </form>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Button 
              variant={!category ? "default" : "outline"} 
              className={!category ? "bg-gradient-to-r from-brand-blue to-brand-purple" : "border-white/20"}
              asChild
            >
              <Link to="/blog">All Posts</Link>
            </Button>
            
            {CATEGORIES.map((cat) => (
              <Button 
                key={cat.slug}
                variant={category === cat.slug ? "default" : "outline"} 
                className={category === cat.slug ? "bg-gradient-to-r from-brand-blue to-brand-purple" : "border-white/20"}
                asChild
              >
                <Link to={`/blog/category/${cat.slug}`}>{cat.name}</Link>
              </Button>
            ))}
          </div>

          {/* Content and Sidebar Layout */}
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3">
              {/* Results heading */}
              {searchQuery && (
                <h2 className="text-xl mb-6 text-white/80">
                  {posts.length} {posts.length === 1 ? 'result' : 'results'} for "{searchQuery}"
                </h2>
              )}
              
              {category && (
                <h2 className="text-2xl font-bold mb-6 gradient-text">
                  {CATEGORIES.find(cat => cat.slug === category)?.name || category}
                </h2>
              )}

              {/* Blog posts grid */}
              {currentPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {currentPosts.map((post) => (
                    <BlogPostCard key={post.slug} post={post} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl mb-2">No articles found</h3>
                  <p className="text-white/60 mb-6">Try adjusting your search or browse all categories</p>
                  <Button asChild>
                    <Link to="/blog">View All Posts</Link>
                  </Button>
                </div>
              )}

              {/* Pagination */}
              {posts.length > postsPerPage && (
                <Pagination className="mt-10">
                  <PaginationContent>
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <PaginationItem key={i}>
                        <PaginationLink 
                          isActive={currentPage === i + 1}
                          onClick={() => setCurrentPage(i + 1)}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                  </PaginationContent>
                </Pagination>
              )}
            </div>

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

export default BlogPage;
