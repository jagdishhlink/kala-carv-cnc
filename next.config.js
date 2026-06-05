/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    unoptimized: true,
    dangerouslyAllowSVG: true,
  },
  env: {
    BUSINESS_NAME: 'Kala Carv CNC',
    BUSINESS_PHONE: '095866 60214',
    BUSINESS_ADDRESS: 'Shyamved Industrial Estate, 57, Sardar Patel Ring Rd, nr. Gappa garden restaurant, Nana Chiloda, Ahmedabad, Gujarat 382330',
  },
};

module.exports = nextConfig;
