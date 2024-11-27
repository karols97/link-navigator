import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen w-full px-10 py-8 font-inter">
        <div className="min-h-full w-full outline-dashed outline-2 outline-border-purple rounded p-4 box-border">
          {children}
        </div>
      </body>
    </html>
  );
}
