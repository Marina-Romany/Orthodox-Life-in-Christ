import { useParams, Link } from "react-router-dom";
import { prayers } from "../data/prayers";

function PrayerDetails() {
  const { id } = useParams();

  const prayer = prayers.find(
    (p) => p.id === Number(id)
  );

  if (!prayer) {
    return (
      <div className="pt-32 text-center">
        Prayer Not Found
      </div>
    );
  }

  return (
    <section className="pt-24 pb-20 bg-slate-50 min-h-screen">

      <div className="max-w-4xl mx-auto px-6">

        <div className="bg-white rounded-3xl p-8 shadow-lg">

          <h1 className="text-4xl font-bold mb-6">
            {prayer.title}
          </h1>

          <p className="text-slate-700 leading-8 whitespace-pre-line">
            {prayer.content}
          </p>

        </div>

        <div className="mt-8 text-center">

          <Link
            to="/prayers"
            className="bg-amber-500 text-white px-8 py-3 rounded-full"
          >
            Back to Prayers
          </Link>

        </div>

      </div>

    </section>
  );
}

export default PrayerDetails;