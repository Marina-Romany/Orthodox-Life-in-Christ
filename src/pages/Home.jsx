import Hero from "../components/Hero";
import Verse from "../components/Verse";
import Stats from "../components/Stats";
import Saint from "../components/Saint";
import OrthodoxPillars from "../components/OrthodoxPillars";
import Prayer from "../components/Prayer";
import Quotes from "../components/Quotes";
import Articles from "../components/Articles";

function Home() {
  return (
    <>
      <Hero />
      <Verse />
      <Stats />
      <Saint />
      <OrthodoxPillars />
      <Prayer />
      <Quotes />
      <Articles />
    </>
  );
}
export default Home