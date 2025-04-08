
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowLeft, Award, BookOpen, Briefcase, GraduationCap, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Background gradient effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full filter blur-[100px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/20 rounded-full filter blur-[100px]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Link to="/" className="inline-flex items-center text-white/60 hover:text-brand-blue mb-8 transition-all">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Link>
            
            <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
              <div className="md:w-1/3">
                <div className="relative rounded-xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/29dbc926-49ae-496e-978b-0e8a5705b464.png" 
                    alt="Alan Muellegger - Emotional Fitness Coach" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Alan Muellegger</h1>
                <h2 className="text-xl md:text-2xl text-brand-blue mb-6">Emotional Fitness Coach & Performance Specialist</h2>
                
                <p className="text-white/80 mb-6 text-lg">
                  With over 15 years of specialized experience in emotional fitness coaching, I've dedicated my career to 
                  helping individuals transform their emotional states to achieve peak performance and fulfillment in all areas of life.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="bg-white/10 px-3 py-1 rounded-full text-white/70 text-sm">Peak Performance</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-white/70 text-sm">Emotional Intelligence</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-white/70 text-sm">Mental Conditioning</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-white/70 text-sm">Mindfulness</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-white/70 text-sm">State Management</span>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-purple hover:to-brand-pink transition-all"
                  onClick={() => window.open('https://calendly.com/alan-muellegger/emotional-fitness-session', '_blank')}
                >
                  Book a Session
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Professional Background */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Professional Background</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-brand-blue/30 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue/20 p-3 rounded-lg">
                    <Briefcase className="text-brand-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Founder & Lead Coach</h3>
                    <p className="text-white/60 mb-1">Emotional Fitness Training</p>
                    <p className="text-white/60 mb-3">2010 - Present</p>
                    <p className="text-white/80">
                      Founded and developed a comprehensive emotional fitness coaching practice, working with executives, 
                      entrepreneurs, and high-performers to optimize emotional states for peak performance.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-brand-purple/30 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-purple/20 p-3 rounded-lg">
                    <Users className="text-brand-purple" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Performance Coach</h3>
                    <p className="text-white/60 mb-1">Elite Performance Institute</p>
                    <p className="text-white/60 mb-3">2008 - 2015</p>
                    <p className="text-white/80">
                      Worked with professional athletes and business executives to develop mental resilience 
                      and emotional regulation strategies for high-pressure situations.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-brand-pink/30 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-pink/20 p-3 rounded-lg">
                    <BookOpen className="text-brand-pink" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Workshop Facilitator</h3>
                    <p className="text-white/60 mb-1">Global Leadership Summit</p>
                    <p className="text-white/60 mb-3">2012 - Present</p>
                    <p className="text-white/80">
                      Regular presenter at international conferences and corporate events, leading workshops on 
                      emotional intelligence, stress management, and cognitive optimization.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-brand-blue/30 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue/20 p-3 rounded-lg">
                    <GraduationCap className="text-brand-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Education & Certification</h3>
                    <p className="text-white/60 mb-3">Specialized Training</p>
                    <ul className="text-white/80 space-y-2 list-disc list-inside">
                      <li>Master's in Applied Psychology, University of Chicago</li>
                      <li>Certified Performance Coach (CPC)</li>
                      <li>Neurolinguistic Programming Practitioner</li>
                      <li>Mindfulness-Based Stress Reduction Instructor</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Methodology */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">My Approach</h2>
            <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">
              I've developed a proprietary methodology that combines cutting-edge neuroscience, practical psychology, 
              and time-tested wisdom to help you optimize your emotional state.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center hover:border-brand-blue/30 hover:bg-white/10 transition-all">
                <div className="bg-brand-blue/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-brand-blue" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">State Optimization</h3>
                <p className="text-white/80">
                  Learn to control your emotional and mental state on demand, allowing you to access peak performance,
                  creativity, and clarity whenever you need it.
                </p>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center hover:border-brand-purple/30 hover:bg-white/10 transition-all">
                <div className="bg-brand-purple/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="text-brand-purple" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Neuro-Conditioning</h3>
                <p className="text-white/80">
                  Rewire your neural pathways to automatically respond to challenges with resilience,
                  focus and emotional intelligence rather than stress and anxiety.
                </p>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center hover:border-brand-pink/30 hover:bg-white/10 transition-all">
                <div className="bg-brand-pink/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-brand-pink" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Transformational Coaching</h3>
                <p className="text-white/80">
                  One-on-one personalized coaching that addresses your specific challenges and goals,
                  creating lasting change in how you experience and navigate your life.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Media */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured In</h2>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div className="opacity-60 hover:opacity-100 transition-opacity">
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Forbes</p>
              </div>
              <div className="opacity-60 hover:opacity-100 transition-opacity">
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Inc.</p>
              </div>
              <div className="opacity-60 hover:opacity-100 transition-opacity">
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Entrepreneur</p>
              </div>
              <div className="opacity-60 hover:opacity-100 transition-opacity">
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Business Insider</p>
              </div>
              <div className="opacity-60 hover:opacity-100 transition-opacity">
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">TED</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-brand-blue/20 rounded-full filter blur-[100px]"></div>
            <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-brand-purple/20 rounded-full filter blur-[100px]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Emotional Fitness?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Take the first step toward mastering your emotional state and achieving peak performance in all areas of your life.
            </p>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-purple hover:to-brand-pink transition-all"
              onClick={() => window.open('https://calendly.com/alan-muellegger/emotional-fitness-session', '_blank')}
            >
              Book a Free Consultation
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
