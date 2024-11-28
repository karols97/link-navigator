"use client";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/state/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className="flex min-h-screen w-full px-10 py-8">
          <div className="min-h-full w-full outline-dashed outline-2 outline-border-purple rounded p-6 box-border">
            {children}
          </div>
        </body>
      </html>
    </Provider>
  );
}
