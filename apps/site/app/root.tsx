import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "@safer-streets/tailwind/index.css";
import icons from "@safer-streets/icons/index.css";

import { config } from "~/config";

import Navigation from "~/components/globals/navigation";
import Footer from "~/components/globals/footer";

export function meta() {
  return {
    charset: "utf-8",
    title: config.seo.default.title,
    description: config.seo.default.description,
    viewport: "width=device-width,initial-scale=1",
  };
}

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: icons },
    { rel: "stylesheet", href: config.css.fonts },
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-50">
        <div className="mx-auto flex max-w-6xl flex-col p-2">
          <Navigation />
          <Outlet />
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
