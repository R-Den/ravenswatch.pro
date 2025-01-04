import { ExternalLinkIcon, GithubIcon } from "lucide-react";

export default function GithubRef() {
  return (
    <div className="hidden lg:flex py-4">
      <a
        href="https://github.com/R-Den/Ravenswatch.pro"
        className="w-full inline-flex px-4 py-2 rounded-md hover:text-primary hover:outline-none"
      >
        <GithubIcon size={24} />
        GitHub
        <ExternalLinkIcon size={14} />{" "}
      </a>
    </div>
  );
}
