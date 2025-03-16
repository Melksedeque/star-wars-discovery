export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[url('/images/bg-home.png')] bg-cover bg-fixed">
      <div className="min-h-screen bg-black/50">
        <header className="sticky top-0 z-40 bg-black/40 backdrop-blur-md border-b border-yellow-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-between">
                <div className="flex-shrink-0">
                  <h1 className="text-2xl font-bold text-yellow-500">
                    Star Wars Discovery
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
