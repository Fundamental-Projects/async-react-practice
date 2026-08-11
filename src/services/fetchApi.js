const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const BASE_URL = "https://api.giphy.com/v1/gifs/";

async function requestGiphy(endpoint, params = {}) {
  const url = new URL(endpoint, BASE_URL);

  url.searchParams.set("api_key", API_KEY);
  url.searchParams.set("limit", "20");

  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));

  const request = new Request(url, {
    method: "GET",
  });

  const response = await fetch(request);
  const data = await response.json();

  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

  return data;
}

function fetchTrendingApi() {
  return requestGiphy("trending");
}

function fetchSearchApi(searchTerm) {
  return requestGiphy("search", {
    q: searchTerm,
  });
}

export { fetchTrendingApi, fetchSearchApi };
