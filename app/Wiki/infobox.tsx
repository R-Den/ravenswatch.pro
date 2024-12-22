import Image from "next/image";

interface InfoBoxProps {
  imageUrl: string;
  altText: string;
  name: string;
  rarity: string;
  // Add other fields as needed, e.g. "description", "category", etc.
}

export function InfoBox({ imageUrl, altText, name, rarity }: InfoBoxProps) {
  return (
    <div className="sticky top-8 p-4 bg-background border border-border shadow-sm rounded-md">
      <Image
        src={imageUrl}
        alt={altText}
        width={300}
        height={200}
        className="mb-4 rounded-md"
      />
      <h2 className="text-xl font-bold mb-2">Key Details</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Name: {name}</li>
        <li>Rarity: {rarity}</li>
        {/* Add other important fields here */}
      </ul>
    </div>
  );
}
