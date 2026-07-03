import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import SaintsPage from "./pages/SaintsPage";
import SaintDetails from "./pages/SaintDetails";
import Books from "./pages/Books";
import ArticlesPage from "./pages/ArticlesPage";
import BookDetails from "./pages/BookDetails";
import PrayersPage from "./pages/PrayersPage";
import PrayerDetails from "./pages/PrayerDetails";
import ArticleDetails from "./pages/ArticleDetails";
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saints" element={<SaintsPage />} />
        <Route path="/saint/:id" element={<SaintDetails />} />
        <Route path="/books" element={<Books />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route
  path="/prayers"
  element={<PrayersPage />}
/>

<Route
  path="/prayers/:id"
  element={<PrayerDetails />}
/>
<Route
  path="/articles/:id"
  element={<ArticleDetails />}
/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;