/** @type {import('next').NextConfig} */

import createNextIntPlugin from "next-intl/plugin";

const withNextIntl = createNextIntPlugin();

const nextConfig = {};

export default withNextIntl(nextConfig);


