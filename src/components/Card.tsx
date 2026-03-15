import type { ReactNode } from "react";

type CardProps = {
  font?: string,
  header?: string,
  children: ReactNode,
  className?: string
};

const Card = ({ font = "Playfair Display", header, children, className }: CardProps) => {
  return (
    <section className={`bg-[#7DFC94] font-scope shadow-lg shadow-black/30 min-w-0 ${className}`}>
      <section className="overflow-hidden p-5">
        <section style={{ fontFamily: font }} className="font-playfair">
          <p className="text-2xl mb-3">
            <strong>{header}</strong>
          </p>
        </section>
        <section>
          <p className="text-xs">{children}</p>
        </section>
      </section>
    </section>
  );
};

export default Card;
