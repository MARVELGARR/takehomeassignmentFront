import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Building2, Building, TreePine, HelpCircle } from 'lucide-react';
import Image from 'next/image';

type PropertyType = "House" | "Condo" | "Apartment" | "Land" | "Other";

interface Property {
  address: string;
  price: string;
  propertyType: PropertyType;
  imageUrl: string;
}

interface PropertyCardsProps {
  properties: Property[];
}

const PropertyTypeIcon: React.FC<{ type: PropertyType }> = ({ type }) => {
  switch (type) {
    case "House":
      return <Home className="mr-2" />;
    case "Condo":
      return <Building2 className="mr-2" />;
    case "Apartment":
      return <Building className="mr-2" />;
    case "Land":
      return <TreePine className="mr-2" />;
    default:
      return <HelpCircle className="mr-2" />;
  }
};

const PropertyCards: React.FC<PropertyCardsProps> = ({ properties }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {properties.map((property, index) => (
        <Card key={index} className="overflow-hidden">
          <CardHeader className="p-0">
            <Image
            width={120}
            height={120}
              src={property.imageUrl!}
              alt={property.address}
              className="w-full h-48 object-cover"
            />
          </CardHeader>
          <CardContent className="p-4">
            <CardTitle className="text-lg mb-2">{property.address}</CardTitle>
            <Badge variant="secondary" className="mb-2">
              <PropertyTypeIcon type={property.propertyType} />
              {property.propertyType}
            </Badge>
          </CardContent>
          <CardFooter className="bg-secondary">
            <p className="text-lg font-bold">${property.price.toLocaleString()}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default PropertyCards;

