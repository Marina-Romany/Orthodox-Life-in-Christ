import heroImg from "../assets/images/hero.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative h-screen" id="home">

      {/* Background */}
      <img
        src={heroImg}
        alt="Orthodox Church"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">

        <div className="max-w-3xl">

          <p className="text-amber-400 text-lg mb-4 tracking-[0.25em] uppercase">
            Orthodox Christian Platform
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Orthodox Life
            <br />
            in Christ
          </h1>

          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-10">
            A journey of faith, prayer, and spiritual growth.
          </p>
          <Link
  to="/saints"
  className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition duration-300"
>
  Explore Saints
</Link>

        </div>

      </div>

      {/* Scroll Down */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
        <span className="text-3xl"></span>
      </div> */}

    </section>
  );
}

export default Hero;