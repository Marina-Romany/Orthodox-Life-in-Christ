import { useParams, Link } from "react-router-dom";
import { saints } from "../data/saints";

function SaintDetails() {
  const { id } = useParams();

  const saint = saints.find(
    (s) => s.id === Number(id)
  );

  if (!saint) {
    return (
      <div className="pt-32 text-center">
        <h2 className="text-3xl font-bold">
          Saint not found
        </h2>
      </div>
    );
  }

  return (
    <section className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* Hero */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg mb-10">

          <img
            src={saint.image}
            alt={saint.name}
            className="w-full h-[500px] object-contain"
          />

          <div className="p-8">

            <p className="text-amber-600 font-medium mb-2">
              {saint.church}
            </p>

            <h1 className="text-5xl font-bold text-slate-900 mb-4">
              {saint.name}
            </h1>

            <p className="text-slate-600 leading-8 text-lg">
              {saint.description}
            </p>

          </div>

        </div>

        {/* Saint Information */}
        <div className="bg-white rounded-3xl p-8 shadow-sm mb-8">

          <h2 className="text-3xl font-bold mb-6">
            Saint Information
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            {saint.title && (
              <div>
                <h3 className="font-semibold text-slate-900">
                  Title
                </h3>
                <p className="text-slate-700">
                  {saint.title}
                </p>
              </div>
            )}

            {saint.birthYear && (
              <div>
                <h3 className="font-semibold text-slate-900">
                  Birth Year
                </h3>
                <p className="text-slate-700">
                  {saint.birthYear}
                </p>
              </div>
            )}

            {saint.deathYear && (
              <div>
                <h3 className="font-semibold text-slate-900">
                  Death Year
                </h3>
                <p className="text-slate-700">
                  {saint.deathYear}
                </p>
              </div>
            )}

            {saint.birthplace && (
              <div>
                <h3 className="font-semibold text-slate-900">
                  Birthplace
                </h3>
                <p className="text-slate-700">
                  {saint.birthplace}
                </p>
              </div>
            )}

            {saint.feastDay && (
              <div>
                <h3 className="font-semibold text-slate-900">
                  Feast Day
                </h3>
                <p className="text-slate-700">
                  {saint.feastDay}
                </p>
              </div>
            )}

          </div>

        </div>

        {/* Biography */}
        <div className="bg-white rounded-3xl p-8 shadow-sm mb-8">

          <h2 className="text-3xl font-bold mb-6">
            Biography
          </h2>

          <p className="text-slate-700 leading-8 whitespace-pre-line">
            {saint.biography}
          </p>

        </div>

        {/* Virtues */}
        {saint.virtues?.length > 0 && (
          <div className="bg-white rounded-3xl p-8 shadow-sm mb-8">

            <h2 className="text-3xl font-bold mb-6">
              Virtues
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

              {saint.virtues.map((virtue, index) => (
                <div
                  key={index}
                  className="bg-amber-50 border border-amber-100 rounded-xl p-4"
                >
                  ✨ {virtue}
                </div>
              ))}

            </div>

          </div>
        )}

        {/* Miracles */}
        {saint.miracles?.length > 0 && (
          <div className="bg-white rounded-3xl p-8 shadow-sm mb-8">

            <h2 className="text-3xl font-bold mb-6">
              Miracles
            </h2>

            <ul className="space-y-4">

              {saint.miracles.map((miracle, index) => (
                <li
                  key={index}
                  className="text-slate-700 leading-8"
                >
                  • {miracle}
                </li>
              ))}

            </ul>

          </div>
        )}

        {/* Teachings */}
        {saint.teachings?.length > 0 && (
          <div className="bg-white rounded-3xl p-8 shadow-sm mb-8">

            <h2 className="text-3xl font-bold mb-6">
              Teachings
            </h2>

            <ul className="space-y-4">

              {saint.teachings.map((teaching, index) => (
                <li
                  key={index}
                  className="text-slate-700 leading-8"
                >
                  • {teaching}
                </li>
              ))}

            </ul>

          </div>
        )}

        {/* Quotes */}
        {saint.quotes?.length > 0 && (
          <div className="bg-white rounded-3xl p-8 shadow-sm mb-8">

            <h2 className="text-3xl font-bold mb-6">
              Famous Quotes
            </h2>

            <div className="space-y-5">

              {saint.quotes.map((quote, index) => (
                <blockquote
                  key={index}
                  className="border-l-4 border-amber-500 pl-5 italic text-slate-700"
                >
                  "{quote}"
                </blockquote>
              ))}

            </div>

          </div>
        )}

        {/* Legacy */}
        {saint.legacy && (
          <div className="bg-white rounded-3xl p-8 shadow-sm mb-8">

            <h2 className="text-3xl font-bold mb-6">
              Legacy
            </h2>

            <p className="text-slate-700 leading-8 whitespace-pre-line">
              {saint.legacy}
            </p>

          </div>
        )}

        {/* Back Button */}
        <div className="text-center">

          <Link
            to="/saints"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full transition"
          >
            ← Back to Saints
          </Link>

        </div>

      </div>
    </section>
  );
}

export default SaintDetails;