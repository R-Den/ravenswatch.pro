"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type TeamMember, roleIcons } from "@/lib/team";
import { GithubIcon, UserIcon } from "lucide-react";

interface TeamCardProps {
  role: string;
  members: TeamMember[];
}

const MemberInfo = ({ member }: { member: TeamMember }) => {
  const [playtime, setPlaytime] = useState<string | null>(null);

  useEffect(() => {
    if (member.steamAlias) {
      const fetchPlaytime = async () => {
        try {
          const response = await fetch(
            `/api/steam-stats?alias=${member.steamAlias}`,
          );
          const data = await response.json();
          if (data.time) {
            setPlaytime(data.time);
          }
        } catch (error) {
          console.error("Error loading Steam stats:", error);
        }
      };

      fetchPlaytime();
    }
  }, [member.steamAlias]);

  if ("github" in member) {
    return (
      <span className="text-primary">
        <a
          href={member.github}
          className="text-primary hover:text-primary/90 underline underline-offset-4 flex items-center gap-2 group"
        >
          <GithubIcon className="w-4 h-4" />
          <span>{member.name}</span>
        </a>
        {playtime && (
          <span className="ml-1 text-sm text-muted-foreground">
            ({playtime} hours in Ravenswatch)
          </span>
        )}
      </span>
    );
  }
  return (
    <span className="text-primary">
      {member.name}{" "}
      {playtime && (
        <span className="ml-1 text-sm text-muted-foreground">
          ({playtime} hours in Ravenswatch)
        </span>
      )}
    </span>
  );
};

export const TeamCard = ({ role, members }: TeamCardProps) => {
  const Icon = roleIcons[role] || UserIcon; // Default to UserIcon if role not found

  return (
    <Card className="bg-secondary">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon className="w-5 h-5" />
          {role}s
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {members.map((member) => (
            <li key={member.name}>
              <MemberInfo member={member} />
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
