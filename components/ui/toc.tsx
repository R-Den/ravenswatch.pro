"use client";
import React from "react";

interface TableOfContentsProps {
  sections: { id: string; title: string }[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  return (
    <nav className="sticky top-20 p-4 bg-accent shadow-lg rounded-lg border border-border">
      <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`} className="text-primary hover:underline">
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
