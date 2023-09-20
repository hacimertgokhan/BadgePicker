const { default: DevServer } = require('next/dist/server/dev/next-dev-server')

/** @type {import('next').NextConfig} */
const nextConfig = {}

DevServer.fastRefresh = true;

module.exports = nextConfig
