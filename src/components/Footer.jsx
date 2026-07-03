import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaFacebook,
    FaWhatsapp,
    // FaEnvelope,
    // FaCode,
  } from "react-icons/fa";
  
  function Footer() {
    return (
<footer className="bg-white border-t border-slate-200 mt-20">
  <div className="max-w-6xl mx-auto px-6 py-8">

    <div className="flex flex-col md:flex-row items-center justify-between gap-4">

      <div>
        <h3 className="font-bold text-slate-800">
          ☦ Orthodox Life in Christ
        </h3>

        <p className="text-sm text-slate-500">
          Saints • Prayers • Wisdom • Faith
        </p>
      </div>

      <div className="flex gap-4 text-slate-500 text-xl">
        <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
        <FaFacebook className="hover:text-blue-500 cursor-pointer" />
        <FaInstagram className="hover:text-pink-500 cursor-pointer" />
        <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
        <FaGithub className="hover:text-black cursor-pointer" />
      </div>

    </div>

    <div className="mt-5 pt-5 border-t border-slate-100 text-center text-sm text-slate-400">
      Designed & Developed by
      <span className="font-semibold text-amber-500 ml-1">
        Marina Romany
      </span>
    </div>

  </div>
</footer>
    );
  }
  
  export default Footer;