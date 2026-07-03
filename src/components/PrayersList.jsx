import { prayers } from "../data/prayers";
import { Link } from "react-router-dom";

function PrayersList() {
  // const featuredPrayer = prayers[0];

  return (
<section className="min-h-screen bg-slate-50 pt-4 pb-20 px-6">
        <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-600 tracking-[0.3em] uppercase text-sm mb-3">
            Orthodox Prayer Book
          </p>

          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Prayers Collection
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto">
            A collection of Orthodox prayers for daily spiritual growth,
            repentance, thanksgiving, and communion with God.
          </p>
        </div>

        {/* Featured Prayer */}
        {/* <div className="bg-slate-900 text-white rounded-3xl p-10 mb-16 shadow-xl">
          <p className="text-amber-400 uppercase tracking-widest text-sm mb-3">
            Prayer of the Day
          </p>

          <h2 className="text-3xl font-bold mb-4">
            {featuredPrayer.title}
          </h2>

          <p className="text-slate-300 leading-8 mb-6">
            {featuredPrayer.description}
          </p>

          <Link
            to={`/prayers/${featuredPrayer.id}`}
            className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-full transition"
          >
            Read Full Prayer
          </Link>
        </div> */}

        {/* Prayers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {prayers.map((prayer) => (
            <div
              key={prayer.id}
              className="bg-white rounded-2xl border border-slate-200 p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <p className="text-xs uppercase tracking-widest text-amber-600 mb-3">
                Orthodox Prayer
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                {prayer.title}
              </h3>

              <p className="text-slate-600 leading-7 mb-6">
                {prayer.description}
              </p>

              <p className="text-slate-500 italic text-sm mb-6 flex-grow line-clamp-4">
                {prayer.content.trim().slice(0, 140)}...
              </p>

              <Link
                to={`/prayers/${prayer.id}`}
                className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:text-amber-800"
              >
              ←  Read Prayer
              </Link>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default PrayersList;