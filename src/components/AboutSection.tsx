
const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                  alt="Emotional fitness coach"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg">
                <p className="text-xl font-semibold">10+ Years</p>
                <p className="text-sm">of Experience</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Approach</h2>
            <p className="text-lg text-gray-600 mb-6">
              Emotional fitness is about training your mind to respond to life's challenges with resilience, 
              clarity and purpose. Just like physical fitness, it requires consistent practice and the right guidance.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our science-backed approach combines cognitive behavioral techniques, mindfulness practices, 
              and emotional regulation strategies to help you develop greater self-awareness and emotional control.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div>
                <p className="text-4xl font-bold text-primary">500+</p>
                <p className="text-gray-600">Clients Trained</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">95%</p>
                <p className="text-gray-600">Success Rate</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">30+</p>
                <p className="text-gray-600">Training Programs</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">24/7</p>
                <p className="text-gray-600">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
