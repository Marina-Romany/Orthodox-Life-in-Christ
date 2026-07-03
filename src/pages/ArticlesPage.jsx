import { articles } from "../data/articles";
import { Link } from "react-router-dom";
function ArticlesPage() {
  return (
    <section className="pt-28 pb-20 px-6 bg-slate-50 min-h-screen">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[0.3em] text-amber-600 text-sm">
            Orthodox Knowledge
          </p>

          <h1 className="text-5xl font-bold mt-3">
            Articles
          </h1>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >

<img
  src={article.image}
  alt={article.title}
  className="w-full h-60 object-contain bg-slate-100"
/>

              <div className="p-6">

                <span className="text-amber-600 text-sm">
                  {article.category}
                </span>

                <h3 className="text-2xl font-bold mt-2 mb-3">
                  {article.title}
                </h3>

                <p className="text-slate-600 mb-5">
                  {article.excerpt}
                </p>

                <Link
  to={`/articles/${article.id}`}
  className="text-amber-600 font-semibold"
>
  Read More →
</Link>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ArticlesPage;