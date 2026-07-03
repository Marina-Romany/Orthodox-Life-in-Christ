import { useEffect, useState } from "react";
import { getVerse } from "../services/verseService";

function Verse() {
  const [dailyVerse, setDailyVerse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadVerse = async () => {
      try {
        setLoading(true);
        const data = await getVerse();
        setDailyVerse(data);
      } catch {
        setError("Could not load verse");
      } finally {
        setLoading(false);
      }
    };

    loadVerse();
  }, []);

  if (loading) return <p className="text-center py-20">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <section className="py-24 px-6 bg-white" id="verse">
      <div className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-10 text-center shadow-xl">

          <p className="uppercase tracking-[0.3em] text-white/80 text-sm mb-4">
            Daily Verse
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white leading-relaxed mb-6">
            "{dailyVerse.verse}"
          </h2>

          <p className="text-white font-medium text-lg">
            {dailyVerse.reference}
          </p>

        </div>

      </div>
    </section>
  );
}

export default Verse;