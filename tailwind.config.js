module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "Inter", "system-ui", "sans-serif"],
        display: ["'Space Grotesk'", "'Plus Jakarta Sans'", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 45px -20px rgba(59, 130, 246, 0.45)",
        soft: "0 24px 55px -30px rgba(15, 23, 42, 0.55)",
      },
      backgroundImage: {
        'hero-gradient': "radial-gradient(circle at top right, rgba(59,130,246,0.25), transparent 55%), radial-gradient(circle at bottom left, rgba(168,85,247,0.25), transparent 60%)",
        'grid-slate': "linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)",
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(20px, -30px) scale(1.05)' },
          '66%': { transform: 'translate(-25px, 15px) scale(0.97)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        blob: 'blob 18s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        shimmer: 'shimmer 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};