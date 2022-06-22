// /** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer'

withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  // I don't want it to run when compiling as I trust the CI stage of the pipeline and Husky.
  ignoreDuringBuilds: true,
})
