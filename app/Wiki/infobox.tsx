import Image from "next/image";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

interface InfoBoxProps {
  imageUrl: string;
  altText: string;
  name: string;
  rarity: string;
  // Add other fields as needed, e.g. "description", "category", etc.
}

export function InfoBox({ imageUrl, altText, name, rarity }: InfoBoxProps) {
  return (
    <Card className="sticky top-8 p-4 bg-background border border-border shadow-sm rounded-md">
      <CardHeader>
        <CardTitle className="text-xl font-bold mb-2">{name}</CardTitle>
        <Image
          src={imageUrl}
          alt={altText}
          width={300}
          height={200}
          className="mb-4 rounded-md"
        />
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-1">
          <li>Rarity: {rarity}</li>
          {/* Add other important fields here */}
        </ul>
      </CardContent>
    </Card>
  );
}
