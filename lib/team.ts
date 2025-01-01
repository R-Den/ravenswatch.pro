import { LucideIcon, CodeIcon, UserIcon, PaletteIcon } from "lucide-react";

type TeamMemberBase = {
  name: string;
  role: string;
  steamAlias?: string;
};

type Developer = TeamMemberBase & {
  role: "Developer";
  github: string;
};

type ProjectManager = TeamMemberBase & {
  role: "Project Manager";
};

type Designer = TeamMemberBase & {
  role: "Designer";
};

type TeamMember = Developer | ProjectManager | Designer;

export const team: TeamMember[] = [
  {
    name: "WhatTheShuck",
    role: "Developer",
    github: "https://github.com/WhatTheShuck",
    steamAlias: "whattheshuck",
  },
  {
    name: "R-Den",
    role: "Developer",
    github: "https://github.com/R-Den",
    steamAlias: "rden",
  },
  {
    name: "Miet",
    role: "Project Manager",
    steamAlias: "miet",
  },
  {
    name: "Jinariadne",
    role: "Designer",
    steamAlias: "jinariadne",
  },
];

export const roleIcons: Record<string, LucideIcon> = {
  Developer: CodeIcon,
  "Project Manager": UserIcon,
  Designer: PaletteIcon,
};

export type { TeamMemberBase, Developer, ProjectManager, Designer, TeamMember };
