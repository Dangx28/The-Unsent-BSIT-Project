import { useEffect, useState } from "react";
import Card from "../components/Card";
import GmailButton from "../components/GmailButton";
import MessageCard from "../components/MessageCard";
import MessButton from "../components/MessButton";
import MessScroll from "../components/MessScroll";
import { motion } from "motion/react";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";

const Home = () => {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(1),
    );

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
          message: t.message ?? "",
          image: t.song.image ?? "",
          song: t.song.name ?? "",
          author: t.song.artist ?? "",
          link: t.song.link ?? "",
        };
      });
      setMessages(data);
    });
  }, []);

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pl-5 pr-5 md:pl-20 md:pr-20 pt-10 pb-10 overflow-y-scroll w-full h-screen gap-5 flex flex-col place-items-center"
      >
        <p className="font-playfair text-3xl md:text-5xl text-center">
          <strong>
            LATEST MESSAGE OF <br></br> THE DAY
          </strong>
        </p>
        <section className="w-full mt-5 mb-5 md:mb-10">
          {messages.length > 0 ? (
            <MessageCard
              key={0}
              color={messages[0]?.color}
              size="header"
              section={messages[0]?.section}
              receiver={messages[0]?.name}
              date={messages[0]?.date}
              message={messages[0]?.message}
              image={messages[0]?.image}
              song={messages[0]?.song}
              author={messages[0]?.author}
              link={messages[0]?.link}
            ></MessageCard>
          ) : (
            <p className="font-playfair font-bold text-center">Loading... </p>
          )}
        </section>
        <section className="items-stretch w-full flex md:grid flex-col gap-10 md:grid-cols-2">
          <Card
            font="Faster One"
            header="WELCOME!"
            className="col-start-1 col-end-3"
          >
            Welcome to the dashboard! In here, you can take a quick look at the recent messages sent anonymously by the BSIT community!
          </Card>
          <Card
            header="📢 Announcement!"
            className="row-start-2 col-start-2 col-end-3"
          >
            <p className="break-normal">
              <strong>3/15/2026</strong>
              <br></br>Hello! This is my first website with a functional
              front-end and back-end. Plz let me know if there's a bug :D
            </p>
          </Card>
          <Card
            header="Found a bug?"
            className="row-start-3 row-end-4 col-start-2 col-end-3"
          >
            <a href="https://www.facebook.com/cjdanga12342/"><MessButton text="Messenger"></MessButton></a>
            <br></br>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=cjdanga39@gmail.com&su=Hello&body=Hey!"><GmailButton text="Gmail"></GmailButton></a>
          </Card>
          <Card
            header="Messages"
            className="row-start-2 row-end-4 col-start-1 col-end-2"
          >
            <MessScroll></MessScroll>
          </Card>
        </section>
      </motion.section>
    </>
  );
};

export default Home;
