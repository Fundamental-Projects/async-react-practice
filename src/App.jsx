import { useQuery } from "@tanstack/react-query";
import { fetchTrendingApi, fetchSearchApi } from "./services/fetchApi";
import { layoutStyles as layout } from "./styles/layoutStyles";

// fetchTrendingApi();

function App() {
  return (
    <Main>
      <Header />
      <Search />
      <GiftRender />
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

function Search() {
  return (
    <form className={layout.responsiveRow}>
      <input
        type="search"
        placeholder="Search your gifts..."
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 outline-none focus:border-indigo-500"
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

function GiftList() {
  const query = useQuery({ queryKey: ["gifs", "trending"], queryFn: fetchTrendingApi });
  console.log(fetchTrendingApi);

  return (
    <section>
      <div>
        {query.data?.data.map((gifs) => (
          <img key={gifs.id} src={gifs.url} alt={gifs.title} />
        ))}
      </div>
    </section>
  );
}

function GiftRender() {
  return <GiftList />;
}

export default App;
