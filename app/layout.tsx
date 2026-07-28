import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atomy România — Frumusețe & Sănătate din Coreea de Sud",
  description:
    "Descoperă gama exclusivă Atomy: produse premium certificate, bazate pe ingrediente naturale coreene și inovație științifică de top.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject = t;

              var ttq = w[t] = w[t] || [];

              ttq.methods = [
                "page",
                "track",
                "identify",
                "instances",
                "debug",
                "on",
                "off",
                "once",
                "ready",
                "alias",
                "group",
                "enableCookie",
                "disableCookie",
                "holdConsent",
                "revokeConsent",
                "grantConsent"
              ];

              ttq.setAndDefer = function (t, e) {
                t[e] = function () {
                  t.push(
                    [e].concat(
                      Array.prototype.slice.call(arguments, 0)
                    )
                  );
                };
              };

              for (var i = 0; i < ttq.methods.length; i++) {
                ttq.setAndDefer(ttq, ttq.methods[i]);
              }

              ttq.instance = function (t) {
                var e = ttq._i[t] || [];

                for (var n = 0; n < ttq.methods.length; n++) {
                  ttq.setAndDefer(e, ttq.methods[n]);
                }

                return e;
              };

              ttq.load = function (e, n) {
                var r =
                  "https://analytics.tiktok.com/i18n/pixel/events.js";

                var o = n && n.partner;

                ttq._i = ttq._i || {};
                ttq._i[e] = [];
                ttq._i[e]._u = r;

                ttq._t = ttq._t || {};
                ttq._t[e] = +new Date();

                ttq._o = ttq._o || {};
                ttq._o[e] = n || {};

                var script = document.createElement("script");
                script.type = "text/javascript";
                script.async = true;
                script.src = r + "?sdkid=" + e + "&lib=" + t;

                var firstScript =
                  document.getElementsByTagName("script")[0];

                firstScript.parentNode.insertBefore(
                  script,
                  firstScript
                );
              };

              ttq.load("D9JHFLBC77UD7F80E0I0");
              ttq.page();
            }(window, document, "ttq");
          `}
        </Script>
      </body>
    </html>
  );
}