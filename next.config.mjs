/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'images.unsplash.com', protocol: 'https' },
      { hostname: 'i.postimg.cc', protocol: 'https' },
      { hostname: 'i.pravatar.cc', protocol: 'https' },
      { hostname: 'xsgames.co', protocol: 'https' },
      { hostname: 'flowbite.s3.amazonaws.com', protocol: 'https' },
    ],
  },
};

export default nextConfig;
