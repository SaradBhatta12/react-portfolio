/** @type {import('next').NextConfig} */
const nextConfig = {
  theme: {
    extend: {
      animation: {
        ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
      },
      keyframes: {
        ripple: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
        },
      },
    },
  },

  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
