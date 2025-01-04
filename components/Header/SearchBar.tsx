export default function SearchBar() {
  return (
    <div className="hidden md:flex container py-4">
      <input
        type="text"
        className="w-full px-4 py-2 rounded-md border border-muted-foreground focus:border-primary focus:outline-none"
        placeholder="Search for a hero..."
      />
    </div>
  );
}
