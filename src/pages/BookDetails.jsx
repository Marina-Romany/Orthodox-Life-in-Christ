import { useParams, Link } from "react-router-dom";
import { books } from "../data/books";

function BookDetails() {
  const { id } = useParams();

  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <div className="pt-28 text-center">
        <h1 className="text-2xl">Book not found 😔</h1>
        <Link to="/books" className="text-amber-600 mt-4 inline-block">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <section className="pt-28 pb-20 px-6 bg-slate-50 min-h-screen">

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">

        {/* Image */}
        <img
          src={book.image}
          alt={book.title}
         className="w-full h-96 object-contain"
        />

        {/* Content */}
        <div className="p-8">

          <p className="text-amber-600 uppercase tracking-widest text-sm mb-3">
            {book.category}
          </p>

          <h1 className="text-4xl font-bold mb-4">
            {book.title}
          </h1>

          <p className="text-lg text-slate-500 mb-6">
            {book.author}
          </p>

          <p className="text-slate-700 leading-relaxed text-lg">
            {book.description}
          </p>

          {/* Back button */}
          <Link
            to="/books"
            className="inline-block mt-8 text-amber-600 font-semibold hover:underline"
          >
            ← Back to Books
          </Link>

        </div>

      </div>

    </section>
  );
}

export default BookDetails;