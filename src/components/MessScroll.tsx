import { Link } from "react-router-dom";
import MessageCard from "./MessageCard";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

const MessScroll = () => {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"), limit(5));

    onSnapshot(q, (firstDoc) => {
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
          image: t.song.image,
          song: t.song.name,
          author: t.song.artist,
          link: t.song.link,
        };
      });
      setMessages(data);
    });
  }, []);

  return (
    <section
      className="pb-5 flex flex-col gap-5 overflow-y-auto h-100 [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-green-200
  [&::-webkit-scrollbar-thumb]:bg-green-400"
    >
      {messages.map((messages: any, index: number) => (
        <MessageCard
          key={index}
          color={messages.color}
          size="small"
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
      <section className="font-juana w-fit font-bold mx-auto text-center rounded-full bg-[#9FFF7D] p-2 shadow-md hover:shadow-lg shadow-black/30 border-1">
        <Link to="/browse" className="">
          Browse for more
        </Link>
      </section>
    </section>
  );
};

export default MessScroll;
