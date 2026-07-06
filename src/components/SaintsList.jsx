import { useState } from "react";
import { saints } from "../data/saints";
import { Link } from "react-router-dom";

function SaintsList() {
  const [search, setSearch] = useState("");

  const filtered = saints.filter((saint) =>
    saint.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
<section className="min-h-screen bg-slate-50 pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">

          <span className="text-amber-600 uppercase tracking-[0.3em] text-sm">
            Orthodox Saints
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-3 mb-4">
            Saints Library
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore the lives, teachings, miracles, and spiritual journeys
            of the saints of the Orthodox Church.
          </p>

        </div>

        {/* Search */}
        <div className="max-w-lg mx-auto mb-14">

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a saint..."
            className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filtered.map((saint) => (
            <div
              key={saint.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-500"
            >

              <div className="overflow-hidden">

                <img
                  src={saint.image}
                  alt={saint.name}
                  className="h-72 w-full object-contain bg-slate-50 group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-6">

                <span className="text-amber-600 text-sm font-medium">
                  {saint.church}
                </span>

                <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-3">
                  {saint.name}
                </h3>

                <p className="text-slate-600 leading-7 mb-6">
                  {saint.description?.slice(0, 120)}...
                </p>

                <Link
                  to={`/saint/${saint.id}`}
                  className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition"
                >
                  Read Full Story →
                </Link>

              </div>

            </div>
          ))}

        </div>

        {filtered.length === 0 && (
          <div className="text-center mt-10">

            <h3 className="text-xl font-semibold text-slate-700">
              No saints found
            </h3>

            <p className="text-slate-500 mt-2">
              Try another search term.
            </p>

          </div>
        )}

      </div>

    </section>
  );
}

export default SaintsList;