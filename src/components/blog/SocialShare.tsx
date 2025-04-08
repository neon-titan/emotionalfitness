
import { Facebook, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Post } from "@/data/blogData";

interface SocialShareProps {
  post: Post;
}

const SocialShare = ({ post }: SocialShareProps) => {
  const shareUrl = window.location.href;
  const shareTitle = post.title;
  
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      toast({
        title: "Link copied!",
        description: "The article link has been copied to your clipboard.",
      });
    }).catch(err => {
      console.error('Failed to copy: ', err);
      toast({
        title: "Failed to copy link",
        description: "Please try again or copy the URL manually.",
        variant: "destructive"
      });
    });
  };
  
  return (
    <div>
      <h4 className="text-lg font-medium mb-3">Share this article:</h4>
      <div className="flex flex-wrap gap-2">
        <Button 
          variant="outline" 
          size="sm"
          className="border-white/20 hover:bg-blue-600/10 hover:border-blue-600/30"
          onClick={() => window.open(shareLinks.twitter, '_blank')}
        >
          <Twitter size={16} className="mr-2" />
          Twitter
        </Button>
        
        <Button 
          variant="outline" 
          size="sm"
          className="border-white/20 hover:bg-blue-800/10 hover:border-blue-800/30"
          onClick={() => window.open(shareLinks.facebook, '_blank')}
        >
          <Facebook size={16} className="mr-2" />
          Facebook
        </Button>
        
        <Button 
          variant="outline" 
          size="sm"
          className="border-white/20 hover:bg-blue-700/10 hover:border-blue-700/30"
          onClick={() => window.open(shareLinks.linkedin, '_blank')}
        >
          <Linkedin size={16} className="mr-2" />
          LinkedIn
        </Button>
        
        <Button 
          variant="outline" 
          size="sm"
          className="border-white/20 hover:bg-brand-purple/10 hover:border-brand-purple/30"
          onClick={copyToClipboard}
        >
          <LinkIcon size={16} className="mr-2" />
          Copy Link
        </Button>
      </div>
    </div>
  );
};

export default SocialShare;
