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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </head>
      <body>
      <NextIntlClientProvider messages={messages}>
      <div className="bg-white">
            <Nav locale={locale} />
        
            {children}
            <Footer locale={locale}/>
          </div>
        </NextIntlClientProvider>

        </body>
    </html>
  );
}
