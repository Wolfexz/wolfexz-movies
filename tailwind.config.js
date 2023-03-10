module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(15rem, 1fr))"
      },
      animation: {
        "spin-slow": "spin 1.5s linear infinite",
        "ping-slow": "ping 5s cubic-bezier(1, 1, 0.2, 1) infinite",
      },
      keyframes: {
        spin: {
          to: {
            transform: "rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
