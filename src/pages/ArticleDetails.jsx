import { useParams, Link } from "react-router-dom";
import { articles } from "../data/articles";

function ArticleDetails() {
  const { id } = useParams();

  const article = articles.find(
    (a) => a.id === Number(id)
  );

  if (!article) {
    return (
      <div className="pt-32 text-center">
        <h2 className="text-3xl font-bold">
          Article not found
        </h2>
      </div>
    );
  }

  return (
    <section className="pt-24 pb-20 bg-slate-50 min-h-screen">

      <div className="max-w-5xl mx-auto px-6">

        {/* Hero */}

        <div className="bg-white rounded-3xl overflow-hidden shadow-lg mb-10">

          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[500px] object-contain bg-slate-100"          />

          <div className="p-8">

            <span className="text-amber-600 font-medium">
              {article.category}
            </span>

            <h1 className="text-5xl font-bold mt-3 mb-4">
              {article.title}
            </h1>

            <p className="text-slate-600 text-lg leading-8">
              {article.excerpt}
            </p>

          </div>

        </div>

        {/* Content */}

        <div className="bg-white rounded-3xl p-8 shadow-sm mb-10">

          <h2 className="text-3xl font-bold mb-6">
            Article
          </h2>

          <p className="text-slate-700 leading-8 whitespace-pre-line">
            {article.content}
          </p>

        </div>

        {/* Back Button */}

        <div className="text-center">

          <Link
            to="/articles"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full transition"
          >
            ← Back to Articles
          </Link>

        </div>

      </div>

    </section>
  );
}

export default ArticleDetails;