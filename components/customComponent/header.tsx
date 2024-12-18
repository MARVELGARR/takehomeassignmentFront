import React from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeaderComponent: React.FC = () => {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Home className="h-8 w-8" />
            <h1 className="text-2xl font-bold">DreamHome Realty</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><Button variant="ghost" asChild><Link href="/">Home</Link></Button></li>
              <li><Button variant="ghost" asChild><Link href="/properties">Properties</Link></Button></li>
              <li><Button variant="ghost" asChild><Link href="/about">About</Link></Button></li>
              <li><Button variant="ghost" asChild><Link href="/contact">Contact</Link></Button></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;

