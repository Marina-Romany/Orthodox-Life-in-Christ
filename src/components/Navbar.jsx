import { useState } from "react";
import { Link } from "react-router-dom";

// import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  /*
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState("EN");

  const languages = [
    { code: "AR", name: "العربية", flag: "🇪🇬" },
    { code: "EN", name: "English", flag: "🇺🇸" },
    { code: "RU", name: "Русский", flag: "🇷🇺" },
  ];

  const currentLang = languages.find((item) => item.code === lang);
  */

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-semibold tracking-wide text-slate-900"
          >
            Orthodox Life
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-slate-600 hover:text-amber-600 transition"
            >
              Home
            </Link>

            <Link
              to="/saints"
              className="text-slate-600 hover:text-amber-600 transition"
            >
              Saints
            </Link>

            <Link
              to="/books"
              className="text-slate-600 hover:text-amber-600 transition"
            >
              Books
            </Link>

            <Link
              to="/prayers"
              className="text-slate-600 hover:text-amber-600 transition"
            >
              Prayer
            </Link>

            <Link
              to="/articles"
              className="text-slate-600 hover:text-amber-600 transition"
            >
              Articles
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {/* Language */}
            {/*
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition"
              >
                <span>{currentLang.flag}</span>

                <span className="text-sm font-medium">
                  {currentLang.code}
                </span>

                <FaChevronDown
                  size={10}
                  className={`transition-transform ${
                    langOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-3 w-44 bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        setLang(language.code);
                        setLangOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition text-left"
                    >
                      <span>{language.flag}</span>
                      <span className="text-sm">{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            */}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-700 text-xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4 flex flex-col gap-4">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-slate-700"
            >
              Home
            </Link>

            <Link
              to="/saints"
              onClick={() => setMenuOpen(false)}
              className="text-slate-700"
            >
              Saints
            </Link>

            <Link
              to="/books"
              onClick={() => setMenuOpen(false)}
              className="text-slate-700"
            >
              Books
            </Link>

            <Link
              to="/prayers"
              onClick={() => setMenuOpen(false)}
              className="text-slate-700"
            >
              Prayers
            </Link>

            <Link
              to="/articles"
              onClick={() => setMenuOpen(false)}
              className="text-slate-700"
            >
              Articles
            </Link>

          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;