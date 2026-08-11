import { useQuery } from "@tanstack/react-query";
import { fetchTrendingApi, fetchSearchApi } from "./services/fetchApi";
import { layoutStyles as layout } from "./styles/layoutStyles";
import { useState } from "react";

function App() {
  const query = useQuery({ queryKey: ["gifs", "trending"], queryFn: fetchTrendingApi });

  const querySearch = useQuery({ queryKey: ["gifs", "search"], queryFn: fetchSearchApi });
  return (
    <Main>
      <Header />
      <Search query={querySearch} />
      <GiftList query={query} />
    </Main>
  );
}

function Header() {
  return (
    <header className={layout.compactStack}>
      <h1 className="text-3xl font-bold text-slate-900">Gifty for you gifts...</h1>

      <p className="text-slate-600"> Aradığın konuyla ilgili GIF’leri keşfet.</p>
    </header>
  );
}

//deneme
function Main({ children }) {
  return (
    <main className={layout.page}>
      <div className={layout.container}>
        <div className={layout.pageStack}>{children}</div>
      </div>
    </main>
  );
}

function Search({ query }) {
  const [search, setSearch] = useState("");

  function handleSubmit() {
    event.preventDefault();
  }

  return (
    <form className={layout.responsiveRow} onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search your gifts..."
        className="w-full rounded-lg border border-slate-300
        bg-white px-4 py-2 outline-none focus:border-indigo-500"
        onChange={(e) => setSearch(e.target)}
        value={search}
      />

      <button
        type="submit"
        className="shrink-0 rounded-lg bg-indigo-600 px-5 py-2 font-medium text-white hover:bg-indigo-500"
      >
        Search Gifs
      </button>
    </form>
  );
}

function GiftList({ query }) {
  return (
    <section>
      <div>
        {query.data?.data.map((gifs) => (
          <img key={gifs.id} src={gifs.images.original.url} alt={gifs.title} />
        ))}
      </div>
    </section>
  );
}

export default App;
