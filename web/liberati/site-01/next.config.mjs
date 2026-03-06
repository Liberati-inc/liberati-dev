/** @type {import('next').NextConfig} */
const nextConfig = {
  // Bypass EPERM on .next/trace: node_modules cache often has different permissions
  distDir: "node_modules/.cache/next",
};

export default nextConfig;
