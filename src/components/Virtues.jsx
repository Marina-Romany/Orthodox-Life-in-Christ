import { FaCross, FaHeart, FaPrayingHands } from "react-icons/fa";
import { GiPeaceDove } from "react-icons/gi";

function Virtues() {
  const virtues = [
    {
      title: "Faith",
      description:
        "Trusting in God and walking confidently in His promises.",
      icon: <FaCross size={32} />,
    },
    {
      title: "Love",
      description:
        "Reflecting Christ's love through kindness and compassion.",
      icon: <FaHeart size={32} />,
    },
    {
      title: "Prayer",
      description:
        "Building a daily relationship with God through prayer.",
      icon: <FaPrayingHands size={32} />,
    },
    {
      title: "Humility",
      description:
        "Following Christ's example with a humble heart.",
      icon: <GiPeaceDove size={32} />,
    },
  ];

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Spiritual Virtues
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {virtues.map((virtue, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition"
            >
              <div className="mb-4">
                {virtue.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {virtue.title}
              </h3>

              <p className="text-slate-600">
                {virtue.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Virtues;