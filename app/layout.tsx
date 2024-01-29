import SessionProvider from "./SessionProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <SessionProvider>
        {children}
        </SessionProvider>
        </body>
    </html>
  );
}
