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

  if (loading)
    return (
      <p className="text-center py-20">
        Loading...
      </p>
    );

  if (error)
    return (
      <p className="text-center text-red-500 py-20">
        {error}
      </p>
    );

  return (
    <section className="py-24 px-6 bg-slate-50" id="verse">

      <div className="max-w-5xl mx-auto">

        <div className="bg-slate-900 text-white rounded-3xl p-12 text-center shadow-xl">

          <p className="uppercase tracking-[0.3em] text-amber-400 text-sm mb-4">
            Daily Verse
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-relaxed mb-8">
            "{dailyVerse.verse}"
          </h2>

          <div className="w-20 h-[2px] bg-amber-500 mx-auto mb-8"></div>

          <p className="text-amber-300 font-semibold text-lg">
            {dailyVerse.reference}
          </p>

        </div>

      </div>

    </section>
  );
}

export default Verse;