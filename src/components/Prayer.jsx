import { Link } from "react-router-dom";
import { prayers } from "../data/prayers";

function Prayer() {
  const day = new Date().getDate();

  const prayer =
    prayers[day % prayers.length];

  return (
    <section className="py-20 px-6" id="prayer">

      <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-3xl p-10 text-center">

        <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-3">
          Prayer Of The Day
        </p>

        <h2 className="text-4xl font-bold mb-6">
          {prayer.title}
        </h2>

        <p className="text-lg leading-8 mb-8">
          {prayer.description}
        </p>

        <Link
          to={`/prayers/${prayer.id}`}
          className="inline-block bg-amber-500 hover:bg-amber-600 px-8 py-3 rounded-full transition"
        >
          Read Full Prayer
        </Link>

      </div>

    </section>
  );
}

export default Prayer;