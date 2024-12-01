export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4">Ravenswatch Wiki</h1>
        <p className="text-lg">
          Welcome to the Ravenswatch Wiki, your ultimate resource for all things
          related to the game Ravenswatch.
        </p>
      </header>

      <main className="w-full max-w-4xl px-4">
        <section className="mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-2">About Ravenswatch</h2>
          <p className="text-lg">
            Ravenswatch is an exciting game where players embark on thrilling
            adventures. Learn more about the game&apos;s mechanics, characters,
            and lore.
          </p>
        </section>
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Featured Heroes</h2>
          <p className="text-lg">
            Discover the heroes of Ravenswatch and their unique abilities.
          </p>
        </section>
      </main>
    </div>
  );
}
