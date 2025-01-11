import { notFound } from "next/navigation";
import { generalBuilds } from "@/lib/builds/generalBuilds";
import BuildCard from "../../GeneralBuildCard";

interface BuildPageProps {
  params: Promise<{
    "build-name": string;
  }>;
}

export async function generateStaticParams() {
  return generalBuilds.map((build) => ({
    "build-name": build.name.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default async function BuildPage(props: BuildPageProps) {
  const params = await props.params;
  const buildName = decodeURIComponent(params["build-name"]);

  const build = generalBuilds.find(
    (b) => b.name.toLowerCase().replace(/\s+/g, "-") === buildName,
  );

  if (!build) {
    notFound();
  }

  return (
    <div className="flex justify-center mx-auto py-8">
      <BuildCard build={build} />
    </div>
  );
}
