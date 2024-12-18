import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const FooterComponent: React.FC = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">DreamHome Realty is your trusted partner in finding the perfect property. With years of experience and a commitment to excellence, we're here to make your real estate dreams a reality.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/properties" className="text-sm hover:underline">Properties</Link></li>
              <li><Link href="/agents" className="text-sm hover:underline">Our Agents</Link></li>
              <li><Link href="/blog" className="text-sm hover:underline">Blog</Link></li>
              <li><Link href="/faq" className="text-sm hover:underline">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">123 Real Estate Street</p>
            <p className="text-sm">Cityville, State 12345</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: info@dreamhome.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-foreground hover:text-primary"><Facebook /></a>
              <a href="#" className="text-secondary-foreground hover:text-primary"><Twitter /></a>
              <a href="#" className="text-secondary-foreground hover:text-primary"><Instagram /></a>
              <a href="#" className="text-secondary-foreground hover:text-primary"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-secondary-foreground/10 text-center">
          <p className="text-sm">&copy; 2023 DreamHome Realty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;

