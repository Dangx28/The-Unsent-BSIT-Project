const CLIENT_ID = "58e24ebd54ac4a748fcb861094088141";
const REDIRECT_URI = "https://the-unsent-bsit-project.vercel.app/create";

const generateRandomString = (length: number) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const sha256 = async (plain: string) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return crypto.subtle.digest("SHA-256", data);
};

const base64encode = (input: ArrayBuffer) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
};

export const loginSpotify = async () => {
  const codeVerifier = generateRandomString(64);
  const hashed = await sha256(codeVerifier);
  const codeChallenge = base64encode(hashed);

  localStorage.setItem("code_verifier", codeVerifier);

  window.location.href = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=user-read-private&code_challenge_method=S256&code_challenge=${codeChallenge}`;
};

export const getToken = async () => {
  const code = new URLSearchParams(window.location.search).get("code");
  if (!code) return null;

  const codeVerifier = localStorage.getItem("code_verifier");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      grant_type: "authorization_code",
      code,
      redirect_uri: REDIRECT_URI,
      code_verifier: codeVerifier!,
    }),
  });

  window.history.replaceState({}, document.title, "/create");

  const data = await response.json();
  return data.access_token;
};

export const searchSong = async (token: string, query: string) => {
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&limit=5&type=track`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    const data = await response.json();

    if (!response.ok || !data.tracks) return null;

    return data.tracks.items;
  } catch (error: any) {
    // This will catch the ad-blocker "Failed to fetch" error
    alert(
      "Search failed. Spotify can't search because of the browser you are using. USE a different browser.",
    );
    console.error(error);
    return [];
  }
};
