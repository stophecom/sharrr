/** @type {import('next').NextConfig} */

const { withPlausibleProxy } = require('next-plausible')
const withPlugins = require('next-compose-plugins')

const plugins = [withPlausibleProxy]

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withPlugins(plugins, nextConfig)
