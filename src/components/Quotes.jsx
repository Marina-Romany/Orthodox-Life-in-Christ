import { quotes } from "../data/quotes";
import { FaQuoteLeft } from "react-icons/fa";

function Quotes() {
  const day = new Date().getDate();

  const quote =
    quotes[day % quotes.length];

  return (
    <section className="py-20 px-6">

      <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-3xl p-10 text-center">

        <FaQuoteLeft
          size={28}
          className="mx-auto text-amber-400 mb-6"
        />

        <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-3">
          Wisdom from the Fathers
        </p>

        <p className="text-2xl italic leading-relaxed mb-8">
          "{quote.text}"
        </p>

        <div className="w-16 h-[2px] bg-amber-500 mx-auto mb-6"></div>

        <p className="font-semibold text-lg">
          — {quote.author}
        </p>

      </div>

    </section>
  );
}

export default Quotes;