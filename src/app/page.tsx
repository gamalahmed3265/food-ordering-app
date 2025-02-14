"use client";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-screen justify-center items-center bg-secondary">
      <h2>hello nextjs</h2>
      <Button
        className="hover:bg-black transition-all"
        onClick={() => {
          console.log("sdfasf");
        }}
      >
        Click ME
      </Button>
    </main>
  );
}
