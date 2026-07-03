function Stats() {
    const stats = [
      {
        number: "500+",
        title: "Saints",
      },
      {
        number: "365",
        title: "Daily Readings",
      },
      {
        number: "50+",
        title: "Books",
      },
      {
        number: "100+",
        title: "Articles",
      },
    ];
  
    return (
      <section className="py-20 bg-white">
  
        <div className="max-w-6xl mx-auto px-6">
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  
            {stats.map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 rounded-3xl p-8 text-center shadow-sm hover:shadow-lg transition"
              >
                <h2 className="text-4xl font-bold text-amber-600 mb-2">
                  {item.number}
                </h2>
  
                <p className="text-slate-600">
                  {item.title}
                </p>
              </div>
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  }
  
  export default Stats;