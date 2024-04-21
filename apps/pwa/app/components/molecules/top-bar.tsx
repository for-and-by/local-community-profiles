import React from "react";
import { Link } from "@remix-run/react";

export default function TopBar() {
  return (
    <div className="pointer-events-auto flex w-full flex-row bg-base-100">
      <div className="flex flex-grow flex-row justify-between gap-4 px-2 py-1">
        <Link
          to="https://google.com"
          target="_blank"
          className="text-sm text-base-900"
        >
          Sydney Greens
        </Link>
        <Link
          to="https://google.com"
          target="_blank"
          className="text-sm text-brand-600 underline"
        >
          Keep Updated
        </Link>
      </div>
    </div>
  );
}
