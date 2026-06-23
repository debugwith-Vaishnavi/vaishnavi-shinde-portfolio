export default function ServicesPricing() {
  const services = [
    {
      title: "Portfolio Website",
      price: "₹999+",
    },
    {
      title: "College Projects",
      price: "₹1,999+",
    },
    {
      title: "Python Automation",
      price: "₹2,999+",
    },
    {
      title: "Business Website",
      price: "₹4,999+",
    },
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-cyan-400 tracking-[4px] uppercase">
            SERVICES & PRICING
          </p>

          <h2 className="text-5xl font-bold mt-4">
            What I Offer
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="
              bg-slate-900/60
              border border-cyan-500/20
              rounded-3xl
              p-8
              text-center
              hover:scale-105
               hover:border-cyan-400/40
              hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]
              transition-all duration-500
              "
            >
              <h3 className="text-xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-3xl font-bold text-cyan-400">
                {service.price}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}