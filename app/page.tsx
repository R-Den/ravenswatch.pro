export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-background p-8">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4">Ravenswatch Pro</h1>
        <p className="text-lg">
          Welcome to the Ravenswatch.pro, your ultimate resource for all things
          related to the game Ravenswatch.
        </p>
      </header>

      <main className="w-full max-w-4xl px-4">
        <section className="mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-2">About Ravenswatch</h2>
          <p className="text-lg">
            Fallen heroes of old folk tales and legends: you are on the verge of
            a crucial battle against the Nightmare invading and corrupting your
            world. A roguelike action game from the creators of Curse of the
            Dead Gods©, playable solo or in online co-op.
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
