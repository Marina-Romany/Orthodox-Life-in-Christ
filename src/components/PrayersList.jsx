import { prayers } from "../data/prayers";
import { Link } from "react-router-dom";

function PrayersList() {
  return (
<section className="min-h-screen bg-slate-50 pt-28 pb-20 px-6">        <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
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

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {prayers.map((prayer) => (
            <div
              key={prayer.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full p-7"
            >

              <p className="text-xs uppercase tracking-widest text-amber-600 mb-3">
                ✝ Orthodox Prayer
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {prayer.title}
              </h3>

              <p className="text-slate-600 text-sm leading-7 mb-4">
                {prayer.description}
              </p>

              <p className="text-slate-500 italic text-sm flex-1 line-clamp-4">
                {prayer.content.trim().slice(0, 140)}...
              </p>

              <Link
                to={`/prayers/${prayer.id}`}
                className="mt-5 inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition"
              >
                Read Prayer →
              </Link>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default PrayersList;