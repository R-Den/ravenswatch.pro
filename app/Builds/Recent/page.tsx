import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { generalBuilds } from "@/lib/builds/generalBuilds";
import Link from "next/link";
function formattedBuildLink(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function GeneralBuildPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <div className="max-w-5xl w-full">
        <header className="text-center my-8">
          <h1 className="text-4xl font-bold mb-4">Recent Builds</h1>
          <p className="text-lg">
            These are builds that have been added recently to Ravenswatch.Pro.
            Click on a build to get started.
          </p>
        </header>
        {[...generalBuilds]
          .sort((a, b) => {
            // First compare by date (newest first)
            const dateComparison =
              new Date(b.added_date).getTime() -
              new Date(a.added_date).getTime();

            return dateComparison;
          })
          .map((build) => (
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
    </div>
  );
}
