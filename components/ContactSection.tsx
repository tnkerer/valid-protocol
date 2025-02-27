import Button from './Button';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-blue-50 to-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-normal mb-6">Have Questions? Get in Touch!</h2>
        <p className="text-xl text-gray-600 font-light mb-8 max-w-2xl mx-auto">
          Our team is here to help you with any questions about stXDC and liquid staking.
        </p>
        <Link href="/contact"><Button>Contact Us</Button></Link>
      </div>
    </section>
  );
};

export default ContactSection;