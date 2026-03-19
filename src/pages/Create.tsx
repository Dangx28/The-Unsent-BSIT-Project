import { motion } from "motion/react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { loginSpotify, getToken, searchSong } from "../Spotify.ts";

const Create = () => {
  const [buttonPop, setButtonPop] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [section, setSection] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");
  const [song, setSong] = useState("");
  const [songResults, setSongResults] = useState<any[]>([]);
  const [mood, setMood] = useState("");

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();
      const savedToken = localStorage.getItem("spotifyToken");
      const saved = localStorage.getItem("formData");
      if (savedToken) setToken(savedToken);

      if (saved) {
        const { section, name, message, search, mood } = JSON.parse(saved);
        setSection(section);
        setName(name);
        setMessage(message);
        setSearch(search);
        setMood(mood);
      }

      if (token) {
        setToken(token);
        localStorage.setItem("spotifyToken", token);
        window.history.replaceState({}, document.title, "/create");

        if (saved) {
          const search = JSON.parse(saved);

          const results = await searchSong(token, search);
          setSongResults(results);
          setSong(results[0]?.name ?? "");
          setButtonPop(true);
        }
      }
    };
    fetchToken();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(songResults);
    await addDoc(collection(db, "messages"), {
      section,
      name,
      lowerName: name.toLowerCase(),
      message,
      mood,
      song: {
        name: song,
        artist:
          songResults.find((results: any) => {
            return results.name === song;
          })?.artists[0].name ?? "",
        image:
          songResults.find((results: any) => {
            return results.name === song;
          })?.album.images[0].url ?? "",
        link:
          songResults.find((results: any) => {
            return results.name === song;
          })?.external_urls.spotify ?? "",
      },
      createdAt: new Date(),
    });

    alert("Your anonymous message has been submitted!");
    localStorage.removeItem("formData");
    window.location.href = "/home";
  };

  const handleSongSearch = () => {
    songSearch();
  };

  const songSearch = async () => {
    if (!token) return;
    try {
      const results = await searchSong(token, search);
      if (!results) throw new Error("Error)");
      setSongResults(results);
      setSong(results[0]?.name ?? "")
      setButtonPop(true);
    } catch {
      setToken("");
      localStorage.removeItem("spotifyToken");
    }
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pt-20 md:pt-10 pb-5 md:pb-10 overflow-y-scroll w-full h-screen gap-5 flex flex-col place-items-center"
      >
        <p className="font-playfair text-4xl md:text-5xl text-center">
          <strong>CREATE A MESSAGE!</strong>
        </p>
        <form onSubmit={handleSubmit} className="w-full pl-10 pr-10">
          <section className="w-full flex flex-col gap-5 place-items-center">
            <section className="w-full">
              <section className="w-full gap-5 flex flex-row place-items-center">
                <section className="w-full">
                  <p>Which section's this from?</p>
                  <select
                    required
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
                    className="w-full bg-white pl-2 pr-2 pt-1 pb-1"
                  >
                    <option value="" disabled selected>
                      Section
                    </option>
                    <option value="BSIT 1-1">BSIT 1-1</option>
                    <option value="BSIT 1-2">BSIT 1-2</option>
                    <option value="BSIT 1-3">BSIT 1-3</option>
                    <option value="BSIT 1-4">BSIT 1-4</option>
                    <option value="BSIT 1-5">BSIT 1-5</option>
                    <option value="BSIT 1-6">BSIT 1-6</option>
                    <option value="BSIT 1-7">BSIT 1-7</option>
                    <option value="BSIT 1-8">BSIT 1-8</option>
                    <option value="BSIT 1-9">BSIT 1-9</option>
                  </select>
                </section>
                <section className="w-full">
                  <p>Who's receiving their message?</p>
                  <input
                    maxLength={15}
                    required
                    type="text"
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setName(e.target.value);
                    }}
                    className="pl-2 pr-2 pt-1 pb-1 bg-white w-full"
                  ></input>
                </section>
              </section>
            </section>
            <section className="w-full">
              <p>What do you wanna say?</p>
              <textarea
                required
                maxLength={200}
                value={message}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  setMessage(e.target.value);
                }}
                className="bg-white resize-none h-40 w-full font-square p-1 tracking-wider text-xl"
              ></textarea>
            </section>
            <section className="w-full flex flex-col gap-5">
              <p>Choose your song!</p>
              <section className="flex flex-row gap-5">
                <input
                  required
                  list="songs"
                  type="text"
                  placeholder="What song?"
                  value={search}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setSearch(e.target.value);
                  }}
                  className="w-full bg-white pl-2 pr-2 pt-1 pb-1"
                ></input>
                {!token ? (
                  <button
                    type="button"
                    className="bg-[#1DB954] text-white font-bold p-2 rounded-lg hover:bg-[#1ed760] transition-colors"
                    onClick={async () => {
                      // Save the current form state so it's there when they get back
                      localStorage.setItem(
                        "formData",
                        JSON.stringify({
                          section,
                          name,
                          message,
                          search,
                          mood,
                        }),
                      );
                      await loginSpotify();
                    }}
                  >
                    Connect Spotify
                  </button>
                ) : (
                  <button
                    type="button"
                    className="bg-white p-2 rounded-lg hover:bg-white/50 border-2 border-transparent active:border-black/50"
                    onClick={handleSongSearch}
                  >
                    Search
                  </button>
                )}
              </section>
              {buttonPop && (
                <select
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setSong(e.target.value);
                  }}
                  defaultValue={songResults[0]?.name ?? ""}
                  className="w-full bg-white pl-2 pr-2 pt-1 pb-1"
                >
                  {songResults.map((track: any) => (
                    <option value={track.name} key={track.id}>
                      {track.name} - {track.artists[0].name}
                    </option>
                  ))}
                </select>
              )}
            </section>
            <section className="flex flex-col gap-2 mb-5 w-full">
              <p>What's the mood?</p>
              <section className="flex flex-row justify-between pl-5 pr-5">
                <section className="bg-pink-500 rounded-full w-8 h-8 flex justify-center items-center">
                  <input
                    required
                    type="radio"
                    name="mood"
                    value="pink"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setMood(e.target.value);
                    }}
                    className="accent-pink-500 w-6 h-6"
                  />
                </section>
                <section className="bg-yellow-500 rounded-full w-8 h-8 flex justify-center items-center">
                  <input
                    type="radio"
                    name="mood"
                    value="gold"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setMood(e.target.value);
                    }}
                    className="accent-yellow-500 w-6 h-6"
                  />
                </section>
                <section className="bg-blue-500 rounded-full w-8 h-8 flex justify-center items-center">
                  <input
                    type="radio"
                    name="mood"
                    value="blue"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setMood(e.target.value);
                    }}
                    className="accent-blue-500 w-6 h-6"
                  />
                </section>
                <section className="bg-green-500 rounded-full w-8 h-8 flex justify-center items-center">
                  <input
                    type="radio"
                    name="mood"
                    value="green"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setMood(e.target.value);
                    }}
                    className="accent-green-500 w-6 h-6"
                  />
                </section>
              </section>
            </section>
            <section>
              <button
                type="submit"
                className="bg-white p-2 rounded-lg hover:bg-white/50 border-2 border-transparent active:border-black/50"
              >
                Submit
              </button>
            </section>
          </section>
        </form>
      </motion.section>
    </>
  );
};

export default Create;
