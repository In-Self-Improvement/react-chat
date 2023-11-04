/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.google.com", "img1.daumcdn.net"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
