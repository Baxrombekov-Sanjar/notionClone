import { ChilProps } from "@/types";
import React from "react";
import { Navbar } from "./components";

export default function HomeLayout({ children }: ChilProps) {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
}
