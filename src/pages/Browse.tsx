import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  QueryDocumentSnapshot,
  startAfter,
  where,
  type DocumentData,
} from "firebase/firestore";
import MessageCard from "../components/MessageCard";
import { motion } from "motion/react";
import { db } from "../firebase";
import { useEffect, useState } from "react";
const Browse = () => {
  const [searchName, setSearchName] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [buttonPop, setButtonPop] = useState(true);
  const [lastDocLength, setlastDocLength] = useState<
    QueryDocumentSnapshot<DocumentData> | undefined
  >(undefined);

  const searchIt = async () => {
    console.log(searchName)
    if (searchName == "") {
      setButtonPop(true);
      loadMessages();
      return;
    }
    setButtonPop(false);
    const q0 = query(
      collection(db, "messages"),
      where("lowerName", "==", searchName),
      orderBy("createdAt", "desc"),
    );
    const specificDoc = await getDocs(q0);
    const data0 = specificDoc.docs.map((track: any) => {
      const t = track.data();
      return {
        color: t.mood,
        section: t.section,
        name: t.name,
        date: t.createdAt?.toDate().toLocaleString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          month: "numeric",
          day: "numeric",
        }),
        message: t.message,
        image: t.song?.image ?? "",
        song: t.song?.name ?? "",
        author: t.song?.artist ?? "",
        link: t.song?.link ?? "",
      };
    });
    setMessages(data0);
  };

  const loadMessages = async () => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(10),
    );
    const firstDoc = await getDocs(q);
    const data = firstDoc.docs.map((track: any) => {
      const t = track.data();
      return {
        color: t.mood,
        section: t.section,
        name: t.name,
        date: t.createdAt?.toDate().toLocaleString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          month: "numeric",
          day: "numeric",
        }),
        message: t.message,
        image: t.song?.image ?? "",
        song: t.song?.name ?? "",
        author: t.song?.artist ?? "",
        link: t.song?.link ?? "",
      };
    });
    setMessages(data);
    setlastDocLength(firstDoc.docs[firstDoc.docs.length - 1]);
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const displayMore = async () => {
    if (!lastDocLength) return;

    const q2 = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(10),
      startAfter(lastDocLength),
    );
    const moreDoc = await getDocs(q2);
    const data2 = moreDoc.docs.map((track: any) => {
      const t = track.data();
      return {
        color: t.mood,
        section: t.section,
        name: t.name,
        date: t.createdAt?.toDate().toLocaleString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          month: "numeric",
          day: "numeric",
        }),
        message: t.message,
        image: t.song?.image ?? "",
        song: t.song?.name ?? "",
        author: t.song?.artist ?? "",
        link: t.song?.link ?? "",
      };
    });
    setMessages((prev) => [...prev, ...data2]);
    setlastDocLength(moreDoc.docs[moreDoc.docs.length - 1]);
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pt-20 md:pt-10 overflow-y-scroll w-full h-screen pl-5 pr-5 pb-10 flex flex-col gap-5 place-items-center"
      >
        <h1 className="font-bold text-4xl md:text-5xl font-playfair">
          BROWSE MESSAGES
        </h1>
        <section className="w-full">
          <p className="text-xs text-black/70">Search up any name!</p>
          <section className="flex flex-row gap-2">
            <input
              onChange={(e) => {
                setSearchName(e.target.value.toLowerCase());
              }}
              type="search"
              className="pl-2 pr-2 pt-1 pb-1 bg-white w-full"
            ></input>
            <button onClick={searchIt} className="cursor-pointer">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="black"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </section>
        </section>
        <section className="flex flex-col gap-5 md:gap-10 w-full">
          {messages.map((messages: any, index: number) => (
            <MessageCard
              key={index}
              color={messages.color}
              size="header"
              section={messages.section}
              receiver={messages.name}
              date={messages.date}
              message={messages.message}
              image={messages.image}
              song={messages.song}
              author={messages.author}
              link={messages.link}
            ></MessageCard>
          ))}
          {buttonPop && (
            <button
              onClick={displayMore}
              className="font-juana w-fit font-bold mx-auto text-center rounded-full bg-[#9FFF7D] p-2 shadow-md hover:shadow-lg shadow-black/30 border-1 cursor-pointer"
            >
              Load More
            </button>
          )}
        </section>
      </motion.section>
    </>
  );
};

export default Browse;
