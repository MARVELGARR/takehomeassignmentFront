type PropertyType = "House" | "Condo" | "Apartment" | "Land" | "Other";

type Property = {
  id: number;
  name: string;
  address: string;
  price: string;
  propertyType: PropertyType;
  imageUrl: string;
};

type PropertiesResponse = {
  success: boolean;
  data: Property[];
};

const baseUrl ="http://localhost:3002" 

const getProperties = async (): Promise<Property[]> => {
  try {
    const res = await fetch(`https://takehomeassignmentbackend.vercel.app/api/properties`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch properties: ${res.statusText}`);
    }

    const responseData: PropertiesResponse = await res.json();

    if (responseData.success) {
      return responseData.data;
    } else {
      console.error("Failed to fetch properties:", responseData);
      return [];
    }
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
};

export default getProperties;
