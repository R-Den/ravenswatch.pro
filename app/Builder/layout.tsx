import { Metadata } from "next";
export default function BuildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

export const metadata: Metadata = {
  title: "Ravenswatch Build Creator - Ravenswatch.Pro",
  description:
    "Empower your next run! Create and Share builds for your favourite heroes on the Ravenswatch.Pro Build Creator!",
};
