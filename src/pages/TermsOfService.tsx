
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg">
          <p className="mb-4">Last Updated: April 8, 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
          <p className="mb-4">
            By accessing or using our fitness training services, you agree to be bound by these Terms of Service.
            If you disagree with any part of the terms, you may not access our services.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Services</h2>
          <p className="mb-4">
            We provide fitness training services, including but not limited to personal training, group classes,
            and online fitness programs. The specific details of each service will be provided at the time of purchase or registration.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Payments and Refunds</h2>
          <p className="mb-4">
            Payment for our services is due at the time of purchase or according to the payment schedule agreed upon.
            We offer refunds in accordance with our refund policy, which may vary by service.
            Typically, refunds may be issued within 14 days of purchase if you have not yet started using the service.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Responsibilities</h2>
          <p className="mb-4">
            You are responsible for:
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li>Providing accurate health information relevant to your fitness activities.</li>
            <li>Following the guidance and instructions provided by our trainers.</li>
            <li>Using proper equipment and ensuring your environment is safe for exercise.</li>
            <li>Consulting with a healthcare provider before beginning any fitness program.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
          <p className="mb-4">
            We are not responsible for any injuries or health issues that may result from following our fitness programs.
            Exercise involves inherent risks, and you participate at your own risk.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms of Service, please contact us at:
            terms@fitnesstraining.com
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
