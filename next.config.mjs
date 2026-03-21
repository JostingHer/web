/** @type {import('next').NextConfig} */

import createNextIntPlugin from "next-intl/plugin";

const withNextIntl = createNextIntPlugin();

const nextConfig = {
    images: {
        domains: ['cdn.sanity.io'],
    }
};

export default withNextIntl(nextConfig);


