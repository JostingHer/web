import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Nav from "@/components/Nav";
import Footer from "../sections/Footer";

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  
  return (
    <html lang={locale}>
      <head>
        <title>Rubén Viñals - Geografía y Ordenación del Territorio</title>
        <meta name="description" content="Soy Rubén Viñals, estudiante de Geografía en la Universidad de Zaragoza con experiencia en gestión de proyectos ambientales." />
        <meta name="keywords" content="Rubén Viñals, Geografía, Universidad de Zaragoza, proyectos ambientales, logística, SIG" />
        <meta name="author" content="Rubén Viñals" />
        <meta property="og:title" content="Rubén Viñals - Geografía y Ordenación del Territorio" />
        <meta property="og:description" content="Conoce a Rubén Viñals, estudiante de Geografía con experiencia en gestión de proyectos ambientales y logística." />
        <meta property="og:url" content="https://webrubenblog.netlify.app" />
        <link rel="icon" href="/rubi.png" type="image/png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="bg-white">
            <Nav locale={locale} />
            {children}
            <Footer locale={locale} />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
