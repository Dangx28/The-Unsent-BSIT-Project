type Props = {
    text: string
}

const GmailButton = ({text}: Props) => {
  return (
    <>
      <section className="w-full mx-auto font-bold font-scope bg-red-400 rounded-full p-2 w-3xs border-black border-1 shadow-md shadow-black/40 text-center">
        {text}
      </section>
    </>
  );
};

export default GmailButton;
