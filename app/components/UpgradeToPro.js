"use client";
import { FaCrown, FaHeart, FaStar } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

export default function UpgradeToPro() {
  const plans = [
    {
      title: "Free",
      price: "$0",
      icon: <FaStar size={24} />,
      features: [
        "Generate images till free API limit",
        "Generate some quotes/day",
        "Enhance images till API limit hits",
        "No login required",
        "Chatbot character limitations",
      ],
      buttonText: "You’re Using This",
      highlight: false,
    },
    {
      title: "Pro",
      price: "$20",
      icon: <FaCrown size={24} />,
      features: [
        "Unlimited image generations",
        "High-res HD quality images",
        "Faster generation speed",
        "Longer answer length",
        "Priority access to new features",
        "Exclusive styles, filters, and settings",
        "Smart prompt assist (AI-enhanced)",
      ],
      buttonText: "Upgrade to Pro",
      highlight: true,
    },
    {
      title: "Donate",
      price: "$Love",
      icon: <FaHeart size={24} />,
      features: [
        "Help keep this tool free for everyone",
        "Support future innovations",
        "Become part of our top supporters",
        "Buy us a coffee (literally!)",
        "Show some love if this helped you",
      ],
      buttonText: "Donate",
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen pt-24 bg-black flex flex-col items-center px-4 ml-60">
      {/* Heading */}
      <h1 className="text-white text-4xl font-bold mb-10 text-center">
        Upgrade to Pro & Unlock Magic
      </h1>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`flex flex-col justify-between rounded-[10px] p-6 border ${
              plan.highlight
                ? "bg-gradient-to-br scale-110 text-white bg-[#1f2622a7] border-2 border-[#00692A] shadow-2xl z-10"
                : "bg-[#111113] text-white border-zinc-700"
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                {plan.icon}
                <h2 className="text-2xl font-bold">{plan.title}</h2>
              </div>

              <p
                className={`text-3xl font-extrabold ${
                  plan.highlight ? "" : "text-zinc-300"
                }`}
              >
                {plan.price}
              </p>

              <ul className="mt-4 flex flex-col gap-2 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <button
              className={`mt-6 py-2 px-4 rounded-xl font-semibold transition duration-300 ${
                plan.highlight
                  ? "text-white bg-[#00692A] cursor-pointer"
                  : "bg-white text-black cursor-pointer"
              }`}
              onClick={() => {
                toast("This functionality is not integrated yet!", {
                  icon: "🚧",
                  style: {
                    borderRadius: "5px",
                    background: "#222",
                    color: "#fff",
                  },
                });
              }}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>

      {/* Footer Text */}
      <p className="text-zinc-400 mt-10 text-center text-sm max-w-xl ">
        Whether you're vibing with the Free version, going beast mode with Pro,
        or dropping love with a donation - every step helps me grow
      </p>
    </div>
  );
}
