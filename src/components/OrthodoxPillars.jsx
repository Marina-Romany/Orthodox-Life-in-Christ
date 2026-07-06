import {
  FaPrayingHands,
  FaChurch,
  FaBible,
  FaCross,
  FaHandsHelping,
  FaUsers,
} from "react-icons/fa";

function OrthodoxPillars() {
  const pillars = [
    {
      title: "Prayer",
      description:
        "Daily communion with God through personal prayer and worship.",
      icon: <FaPrayingHands size={32} />,
    },
    {
      title: "Fasting",
      description:
        "Growing in self-discipline and repentance through fasting.",
      icon: <FaCross size={32} />,
    },
    {
      title: "Scripture",
      description:
        "Reading, studying, and living according to the Word of God.",
      icon: <FaBible size={32} />,
    },
    {
      title: "Sacraments",
      description:
        "Receiving God's grace through the Holy Mysteries of the Church.",
      icon: <FaChurch size={32} />,
    },
    {
      title: "Fellowship",
      description:
        "Growing together in the life of the Church and the community of believers.",
      icon: <FaUsers size={32} />,
    },
    {
      title: "Service",
      description:
        "Serving others with love, humility, and the spirit of Christ.",
      icon: <FaHandsHelping size={32} />,
    },
  ];

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Foundations of Orthodox Life
        </h2>

        <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12 leading-8">
          Prayer, fasting, Scripture, sacraments, fellowship, and service form
          the foundation of a Christ-centered Orthodox life.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-amber-600 mb-4">
                {pillar.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {pillar.title}
              </h3>

              <p className="text-slate-600 leading-7">
                {pillar.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default OrthodoxPillars;