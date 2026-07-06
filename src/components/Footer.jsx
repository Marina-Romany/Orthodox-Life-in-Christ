import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-8">
      <div className="max-w-6xl mx-auto px-6 py-5">

        <div className="flex flex-col items-center text-center">

          <h3 className="font-bold text-lg mb-2">
            ✝ Orthodox Life in Christ
          </h3>

          <div className="flex gap-6 text-xl mb-4">

            <FaWhatsapp className="hover:text-green-400 cursor-pointer transition" />

            <FaFacebook className="hover:text-blue-400 cursor-pointer transition" />

            <FaInstagram className="hover:text-pink-400 cursor-pointer transition" />

            <a
  href="https://www.linkedin.com/in/marina-romany/"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaLinkedin className="hover:text-sky-400 cursor-pointer transition" />
</a>
 

          </div>

          <div className="w-20 h-[2px] bg-amber-500 rounded-full mb-4"></div>

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Orthodox Life in Christ
          </p>

          <div className="text-sm text-slate-500 mt-1">
  Designed & Developed by{" "}
  <a
    href="https://your-portfolio-link.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-amber-400 font-semibold hover:text-amber-300 transition"
  >
    Marina Romany
  </a>
</div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;