import react from "react";
import { fetchApi, fetchSearchApi } from "./services/fetchApi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Main />
    </QueryClientProvider>
  );
}

function Header() {
  return <header>Header</header>;
}

//deneme
function Main() {
  return <main></main>;
}

export default App;
