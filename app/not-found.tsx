import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <Image
        src="/404.png"
        width={300}
        height={300}
        alt="Confused Wolves. Credit: https://www.artstation.com/artwork/3EEa5D"
      />
      <div className="flex flex-col items-center justify-center bg-background p-8 ">
        <h1 className="text-4xl font-bold mb-4">Not Found</h1>
        <p className="text-lg">Could not find requested resource</p>
        <Link href="/" className="text-lg text-primary">
          Return Home
        </Link>
        <p>
          Think this was a mistake?{" "}
          <a
            className="text-primary"
            href="https://github.com/R-Den/ravenswatch.pro/issues"
          >
            Report an issue here
          </a>
        </p>
      </div>
    </div>
  );
}
