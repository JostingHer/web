import createMiddleware from "next-intl/middleware";



export default createMiddleware({
    locales: ["es", "en", "fr"],
    defaultLocale: "es",
});

export const config = {
    matcher: ["/", "/(fr|en|es)/:path*"],
  };
  