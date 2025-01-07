import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { generalBuilds } from "@/lib/builds/generalBuilds";
import Link from "next/link";
function formattedBuildLink(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function GeneralBuildPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4">Featured Builds</h1>
        <p className="text-lg">
          These are builds that the Ravenswatch.Pro team really loves. Click on
          a build to get started.
        </p>
      </header>
      {generalBuilds.map((build) => (
        <Link
          key={build.name}
          href={`/Builds/General/${formattedBuildLink(build.name)}`}
        >
          <Card className="w-full mb-4">
            <CardHeader>
              <CardTitle>{build.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{build.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
