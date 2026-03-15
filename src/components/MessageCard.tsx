import spotify from "../assets/images/spotify.png";
import { forwardRef } from "react";
type Theme = {
  // kailangan to para strict
  bg?: string;
  bg2?: string;
  textColor?: string;
  textColor2?: string;
};

type Size = {
  size1: string;
  size2: string;
  size3: string;
  size4: string;
};

const themeDict: Record<string, Theme> = {
  // lagayan ng mga theme, bawat dictionary dapat finofollow ung Theme na type tas strictly strings lang ung key
  pink: {
    textColor: "white",
    textColor2: "white",
    bg: "#E75D89",
    bg2: "#FF0051",
  },
  green: {
    textColor: "black",
    textColor2: "white",
    bg: "#5DE774",
    bg2: "#2BAE0A",
  },
  blue: {
    textColor: "white",
    textColor2: "white",
    bg: "#5D6FE7",
    bg2: "#0005FF",
  },
  gold: {
    textColor: "black",
    textColor2: "white",
    bg: "#FFBF51",
    bg2: "#FF8400",
  },
};

const sizes: Record<string, Size> = {
  header: {
    size1: "0.6rem",
    size2: "1.5rem",
    size3: "1rem",
    size4: "0.5rem",
  },

  header2: {
    size1: "0.4rem",
    size2: "1.3rem",
    size3: "0.8rem",
    size4: "0.3rem",
  },

  small: {
    size1: "0.5rem",
    size2: "1rem",
    size3: "0.7rem",
    size4: "0.5rem",
  },
};

type MessageCardProps = {
  // ayan para strict uli pero para sa message card natin
  color: string;
  size: string;
  section: string;
  receiver: string;
  date: string;
  message: string;
  image?: string;
  song?: string;
  author?: string;
  link?: string;
};

const MessageCard = forwardRef(({ color, size, section, receiver, date, message, image, song, author, link }: MessageCardProps, ref: any) => {
  const theme = themeDict[color];
  const sizee = sizes[size];
  return (
    <>
      <section
        ref={ref}
        style={{
          backgroundColor: theme.bg,
          color: theme.textColor,
          fontSize: sizee.size1,
        }}
        className="overflow-hidden shadow-lg shadow-black/50 max-w-2xl w-full mx-auto text-white gap-2 rounded-full p-3 font-playfair flex flex-col place-items-center"
      >
        <section
          style={{ color: theme.textColor2 }}
          className="text-center flex flex-row mx-auto justify-between w-full pl-10 pr-10 gap-2"
        >
          <section className="flex flex-row gap-2">
            <section
              style={{ backgroundColor: theme.bg2 }}
              className="p-2 rounded-3xl"
            >
              <p className="">From: {section}</p>
            </section>
            <section
              style={{ backgroundColor: theme.bg2 }}
              className="p-2 rounded-3xl"
            >
              <p className="">To: {receiver}</p>
            </section>
          </section>
          <section
            style={{ backgroundColor: theme.bg2 }}
            className="p-2 rounded-3xl"
          >
            <p>{date}</p>
          </section>
        </section>
        <section className="w-full font-square">
          <p
            style={{ fontSize: sizee.size2 }}
            className="text-center text-2xl tracking-wider break-words w-full"
          >
            {message}
          </p>
        </section>
        <section className="flex justify-between w-full pl-10 pr-10 place-items-center">
          <img
            src={image}
            className="object-cover content-center w-8 h-8 rounded-full"
          ></img>
          <section className="flex flex-col w-full pl-2 font-playfair">
            <p style={{ fontSize: sizee.size3 }}>{song}</p>
            <p style={{ fontSize: sizee.size4 }} className="opacity-60">
              {author}
            </p>
          </section>
          <a target="_blank" href={link}><img src={spotify} className="w-10"></img></a>
        </section>
      </section>
    </>
  );
});

export default MessageCard;
