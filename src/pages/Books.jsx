import { useState } from "react";
import { books } from "../data/books";
import { Link } from "react-router-dom";

function Books() {
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="pt-28 pb-20 px-6 bg-slate-50 min-h-screen">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">

          <p className="text-amber-600 uppercase tracking-[0.3em] text-sm">
            Orthodox Library
          </p>

          <h1 className="text-5xl font-bold mt-3">
            Christian Books
          </h1>

        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12">

          <input
            type="text"
            placeholder="Search books..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl border"
          />

        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col h-full"
            >

              {/* Image */}
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-60 object-contain bg-slate-100"

              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">

                <h3 className="text-2xl font-bold mb-2">
                  {book.title}
                </h3>

                <p className="text-amber-600 mb-3">
                  {book.author}
                </p>

                <p className="text-slate-600 line-clamp-3 flex-1">
                  {book.description}
                </p>

                {/* READ MORE (fixed bottom) */}
                <Link
                  to={`/books/${book.id}`}
                  className="mt-4 inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition"
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

export default Books;