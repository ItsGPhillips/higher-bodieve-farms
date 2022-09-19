/** @type {import('next').NextConfig} */


const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   compiler: {
      styledComponents: {
         cssProp: true,
      },
   },
};

module.exports = nextConfig;
